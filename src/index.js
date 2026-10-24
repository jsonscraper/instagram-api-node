import JSONbigFactory from 'json-bigint';
const JSONbig=JSONbigFactory({storeAsString:true,protoAction:'error',constructorAction:'error'});
export class APIError extends Error {
  constructor(status, retryAfter) { super(`jsonscraper API returned HTTP ${status}`); this.name='APIError'; this.status=status; this.retryAfter=retryAfter; }
}
export class TransportError extends Error {}
export class Client {
  #key;
  constructor(licenseKey, {product='instagram', baseUrl, timeout=30000, retries=0, cacheTimeout}={}) {
    if (!['instagram','tiktok'].includes(product)) throw new TypeError('Unknown product');
    if (typeof licenseKey!=='string' || !licenseKey.trim()) throw new TypeError('A license key is required');
    const url=new URL(baseUrl || {instagram:'https://ig.jsonscraper.com',tiktok:'https://tiktok.evelode.com'}[product]);
    if (url.username || url.password || url.search || url.hash || !['http:','https:'].includes(url.protocol) || (url.protocol!=='https:' && !['localhost','127.0.0.1','[::1]'].includes(url.hostname))) throw new TypeError('Use an HTTPS base URL');
    if (!Number.isFinite(timeout) || timeout<=0 || !Number.isInteger(retries) || retries<0 || retries>5) throw new TypeError('Invalid timeout or retries');
    this.#key=licenseKey; this.baseUrl=url.href.replace(/\/$/,''); this.timeout=timeout; this.retries=retries; this.cacheTimeout=cacheTimeout;
  }
  async request(path, params={}) {
    if (typeof path!=='string' || !/^\/[A-Za-z0-9_/-]+$/.test(path) || path.includes('//') || path.includes('..')) throw new TypeError('Use an API path, not a URL');
    const url=new URL(this.baseUrl+path);
    for(const [key,value] of Object.entries(params)) if(value!=null && key!=='license_key') url.searchParams.set(key,String(value));
    if(this.cacheTimeout!=null && !url.searchParams.has('cache_timeout')) url.searchParams.set('cache_timeout',String(this.cacheTimeout));
    url.searchParams.set('license_key',this.#key);
    for(let attempt=0;attempt<=this.retries;attempt++) {
      let delay;
      try {
        const response=await fetch(url,{headers:{Accept:'application/json','User-Agent':'jsonscraper-node/0.1.0'},redirect:'manual',signal:AbortSignal.timeout(this.timeout)});
        if(response.ok) return (response.headers.get('content-type')||'').includes('json') ? JSONbig.parse(await response.text()) : new Uint8Array(await response.arrayBuffer());
        const retryAfter=response.headers.get('retry-after');
        await response.body?.cancel();
        if(attempt===this.retries || ![429,502,503,504].includes(response.status)) throw new APIError(response.status,retryAfter);
        delay=retryAfter && /^\d+$/.test(retryAfter) ? Math.min(60,Number(retryAfter)) : Math.min(2**attempt,30);
      } catch(error) { if(error instanceof APIError) throw error; throw new TransportError('Unable to read jsonscraper API response'); }
      await new Promise(resolve=>setTimeout(resolve,delay*1000));
    }
  }
}
export class Instagram extends Client {
  constructor(key,options={}){super(key,{...options,product:'instagram'});}
  v1_user_by_id(params={}){return this.request('/v1/user/by/id',params);}
  v1_user_by_username(params={}){return this.request('/v1/user/by/username',params);}
  v1_user_by_url(params={}){return this.request('/v1/user/by/url',params);}
  v1_user_about(params={}){return this.request('/v1/user/about',params);}
  v1_user_medias_chunk(params={}){return this.request('/v1/user/medias/chunk',params);}
  v1_user_medias_pinned(params={}){return this.request('/v1/user/medias/pinned',params);}
  v1_user_clips_chunk(params={}){return this.request('/v1/user/clips/chunk',params);}
  v1_user_tag_medias_chunk(params={}){return this.request('/v1/user/tag/medias/chunk',params);}
  v1_user_stories(params={}){return this.request('/v1/user/stories',params);}
  v1_user_stories_by_username(params={}){return this.request('/v1/user/stories/by/username',params);}
  v1_user_highlights(params={}){return this.request('/v1/user/highlights',params);}
  v1_user_highlights_by_username(params={}){return this.request('/v1/user/highlights/by/username',params);}
  v1_user_search_followers(params={}){return this.request('/v1/user/search/followers',params);}
  v1_user_search_following(params={}){return this.request('/v1/user/search/following',params);}
  v1_user_following_chunk(params={}){return this.request('/v1/user/following/chunk',params);}
  v1_user_followers_chunk(params={}){return this.request('/v1/user/followers/chunk',params);}
  v1_media_by_id(params={}){return this.request('/v1/media/by/id',params);}
  v1_media_by_code(params={}){return this.request('/v1/media/by/code',params);}
  v1_media_by_url(params={}){return this.request('/v1/media/by/url',params);}
  v1_media_insight(params={}){return this.request('/v1/media/insight',params);}
  v1_media_comments_chunk(params={}){return this.request('/v1/media/comments/chunk',params);}
  v1_media_likers(params={}){return this.request('/v1/media/likers',params);}
  v1_media_user(params={}){return this.request('/v1/media/user',params);}
  v1_media_oembed(params={}){return this.request('/v1/media/oembed',params);}
  v1_media_code_from_pk(params={}){return this.request('/v1/media/code/from/pk',params);}
  v1_media_pk_from_code(params={}){return this.request('/v1/media/pk/from/code',params);}
  v1_media_pk_from_url(params={}){return this.request('/v1/media/pk/from/url',params);}
  v1_story_by_id(params={}){return this.request('/v1/story/by/id',params);}
  v1_story_by_url(params={}){return this.request('/v1/story/by/url',params);}
  v1_story_download(params={}){return this.request('/v1/story/download',params);}
  v1_story_download_by_url(params={}){return this.request('/v1/story/download/by/url',params);}
  v1_story_download_by_story_url(params={}){return this.request('/v1/story/download/by/story/url',params);}
  v1_highlight_by_id(params={}){return this.request('/v1/highlight/by/id',params);}
  v1_highlight_by_url(params={}){return this.request('/v1/highlight/by/url',params);}
  v1_location_by_id(params={}){return this.request('/v1/location/by/id',params);}
  v1_location_medias_top(params={}){return this.request('/v1/location/medias/top',params);}
  v1_location_medias_recent(params={}){return this.request('/v1/location/medias/recent',params);}
  v1_location_medias_top_chunk(params={}){return this.request('/v1/location/medias/top/chunk',params);}
  v1_location_medias_recent_chunk(params={}){return this.request('/v1/location/medias/recent/chunk',params);}
  v1_location_search(params={}){return this.request('/v1/location/search',params);}
  v1_hashtag_by_name(params={}){return this.request('/v1/hashtag/by/name',params);}
  v1_hashtag_medias_top(params={}){return this.request('/v1/hashtag/medias/top',params);}
  v1_hashtag_medias_top_chunk(params={}){return this.request('/v1/hashtag/medias/top/chunk',params);}
  v1_hashtag_medias_top_recent_chunk(params={}){return this.request('/v1/hashtag/medias/top/recent/chunk',params);}
  v1_hashtag_medias_clips_chunk(params={}){return this.request('/v1/hashtag/medias/clips/chunk',params);}
  v1_search_hashtags(params={}){return this.request('/v1/search/hashtags',params);}
  v1_search_users(params={}){return this.request('/v1/search/users',params);}
  v1_search_music(params={}){return this.request('/v1/search/music',params);}
  v1_fbsearch_places(params={}){return this.request('/v1/fbsearch/places',params);}
  v1_fbsearch_topsearch(params={}){return this.request('/v1/fbsearch/topsearch',params);}
  v2_user_by_id(params={}){return this.request('/v2/user/by/id',params);}
  v2_user_by_username(params={}){return this.request('/v2/user/by/username',params);}
  v2_userstream_by_id(params={}){return this.request('/v2/userstream/by/id',params);}
  v2_userstream_by_username(params={}){return this.request('/v2/userstream/by/username',params);}
  v2_user_stories(params={}){return this.request('/v2/user/stories',params);}
  v2_user_stories_by_username(params={}){return this.request('/v2/user/stories/by/username',params);}
  v2_user_clips(params={}){return this.request('/v2/user/clips',params);}
  v2_user_following(params={}){return this.request('/v2/user/following',params);}
  v2_user_followers(params={}){return this.request('/v2/user/followers',params);}
  v2_user_tag_medias(params={}){return this.request('/v2/user/tag/medias',params);}
  v2_user_highlights(params={}){return this.request('/v2/user/highlights',params);}
  v2_user_highlights_by_username(params={}){return this.request('/v2/user/highlights/by/username',params);}
  v2_user_explore_businesses_by_id(params={}){return this.request('/v2/user/explore/businesses/by/id',params);}
  v2_user_suggested_profiles(params={}){return this.request('/v2/user/suggested/profiles',params);}
  v2_media_info_by_id(params={}){return this.request('/v2/media/info/by/id',params);}
  v2_media_info_by_code(params={}){return this.request('/v2/media/info/by/code',params);}
  v2_media_info_by_url(params={}){return this.request('/v2/media/info/by/url',params);}
  v2_media_comments(params={}){return this.request('/v2/media/comments',params);}
  v2_media_likers(params={}){return this.request('/v2/media/likers',params);}
  v2_media_comment_offensive(params={}){return this.request('/v2/media/comment/offensive',params);}
  v2_media_comments_replies(params={}){return this.request('/v2/media/comments/replies',params);}
  v2_story_by_id(params={}){return this.request('/v2/story/by/id',params);}
  v2_track_by_canonical_id(params={}){return this.request('/v2/track/by/canonical/id',params);}
  v2_track_by_id(params={}){return this.request('/v2/track/by/id',params);}
  v2_hashtag_by_name(params={}){return this.request('/v2/hashtag/by/name',params);}
  v2_hashtag_medias_top(params={}){return this.request('/v2/hashtag/medias/top',params);}
  v2_hashtag_medias_recent(params={}){return this.request('/v2/hashtag/medias/recent',params);}
  v2_highlight_by_id(params={}){return this.request('/v2/highlight/by/id',params);}
  v2_search_hashtags(params={}){return this.request('/v2/search/hashtags',params);}
  v2_search_music(params={}){return this.request('/v2/search/music',params);}
  v2_fbsearch_accounts(params={}){return this.request('/v2/fbsearch/accounts',params);}
  v2_fbsearch_places(params={}){return this.request('/v2/fbsearch/places',params);}
  v2_fbsearch_topsearch(params={}){return this.request('/v2/fbsearch/topsearch',params);}
  v2_fbsearch_reels(params={}){return this.request('/v2/fbsearch/reels',params);}
  gql_comments_chunk(params={}){return this.request('/gql/comments/chunk',params);}
  gql_comments_threaded_chunk(params={}){return this.request('/gql/comments/threaded/chunk',params);}
  gql_comment_likers_chunk(params={}){return this.request('/gql/comment/likers/chunk',params);}
  gql_topsearch(params={}){return this.request('/gql/topsearch',params);}
  gql_media_likers(params={}){return this.request('/gql/media/likers',params);}
  gql_media_usertags(params={}){return this.request('/gql/media/usertags',params);}
  gql_user_followers_chunk(params={}){return this.request('/gql/user/followers/chunk',params);}
  gql_user_following_chunk(params={}){return this.request('/gql/user/following/chunk',params);}
  gql_user_reposts(params={}){return this.request('/gql/user/reposts',params);}
  gql_user_clips(params={}){return this.request('/gql/user/clips',params);}
  gql_user_medias(params={}){return this.request('/gql/user/medias',params);}
  v3_fbsearch_accounts(params={}){return this.request('/v3/fbsearch/accounts',params);}
  v3_fbsearch_places(params={}){return this.request('/v3/fbsearch/places',params);}
}
export class TikTok extends Client {
  constructor(key,options={}){super(key,{...options,product:'tiktok'});}
  get_no_watermark_url(params={}){return this.request('/getNoWatermarkUrl',params);}
  get_no_watermark_url_by_id(params={}){return this.request('/getNoWatermarkUrlByID',params);}
  get_video_by_id(params={}){return this.request('/getVideoByID',params);}
  get_video_by_url(params={}){return this.request('/getVideoByUrl',params);}
  get_unshortened_url(params={}){return this.request('/getUnshortenedUrl',params);}
  get_comments_by_url(params={}){return this.request('/getCommentsByUrl',params);}
  get_comments_by_id(params={}){return this.request('/getCommentsByID',params);}
  get_comments_replies(params={}){return this.request('/getCommentsReplies',params);}
  search_user(params={}){return this.request('/searchUser',params);}
  search_video(params={}){return this.request('/searchVideo',params);}
  search_music(params={}){return this.request('/searchMusic',params);}
  search_live(params={}){return this.request('/searchLive',params);}
  search_hashtag(params={}){return this.request('/searchHashtag',params);}
  search_location(params={}){return this.request('/searchLocation',params);}
  search_top(params={}){return this.request('/searchTop',params);}
  search_insights(params={}){return this.request('/searchInsights',params);}
  search_comment_suggested_users(params={}){return this.request('/searchCommentSuggestedUsers',params);}
  get_user_info(params={}){return this.request('/getUserInfo',params);}
  get_user_info_by_id(params={}){return this.request('/getUserInfoByID',params);}
  get_basic_user_info(params={}){return this.request('/getBasicUserInfo',params);}
  get_user_feed(params={}){return this.request('/getUserFeed',params);}
  get_user_feed_by_id(params={}){return this.request('/getUserFeedByID',params);}
  get_user_id(params={}){return this.request('/getUserID',params);}
  get_username_by_id(params={}){return this.request('/getUsernameByID',params);}
  get_twitter_username(params={}){return this.request('/getTwitterUsername',params);}
  get_instagram_username(params={}){return this.request('/getInstagramUsername',params);}
  get_youtube_channel(params={}){return this.request('/getYoutubeChannel',params);}
  get_followers(params={}){return this.request('/getFollowers',params);}
  get_followers_by_id(params={}){return this.request('/getFollowersByID',params);}
  get_following(params={}){return this.request('/getFollowing',params);}
  get_following_by_id(params={}){return this.request('/getFollowingByID',params);}
  get_live_event_info_by_id(params={}){return this.request('/getLiveEventInfoByID',params);}
  get_hashtag_info(params={}){return this.request('/getHashtagInfo',params);}
  get_hashtag_feed(params={}){return this.request('/getHashtagFeed',params);}
  get_hashtag_feed_by_id(params={}){return this.request('/getHashtagFeedByID',params);}
  get_location_info_by_id(params={}){return this.request('/getLocationInfoByID',params);}
  get_location_feed_by_id(params={}){return this.request('/getLocationFeedByID',params);}
  get_music_info(params={}){return this.request('/getMusicInfo',params);}
  get_music_feed(params={}){return this.request('/getMusicFeed',params);}
  get_music_charts(params={}){return this.request('/getMusicCharts',params);}
  get_trending_categories_list(params={}){return this.request('/getTrendingCategoriesList',params);}
  get_trending_feed(params={}){return this.request('/getTrendingFeed',params);}
  get_stickers_by_id(params={}){return this.request('/getStickersByID',params);}
  get_sticker_by_id(params={}){return this.request('/getStickerByID',params);}
  get_sticker_feed_by_id(params={}){return this.request('/getStickerFeedByID',params);}
  get_user_stories(params={}){return this.request('/getUserStories',params);}
  get_story_info_by_id(params={}){return this.request('/getStoryInfoByID',params);}
  get_user_playlists(params={}){return this.request('/getUserPlaylists',params);}
  get_user_playlist_by_id(params={}){return this.request('/getUserPlaylistByID',params);}
  get_video_by_playlist_id(params={}){return this.request('/getVideoByPlaylistID',params);}
  get_available_ranking_list(params={}){return this.request('/getAvailableRankingList',params);}
  get_ranking_info(params={}){return this.request('/getRankingInfo',params);}
  get_live_info(params={}){return this.request('/getLiveInfo',params);}
  get_live_feed(params={}){return this.request('/getLiveFeed',params);}
}
