# Instagram node request examples

Every file below is a complete single-request CLI program with environment-based authentication, all documented query options, timeout configuration, error handling and full response output. Sample defaults come from Postman; replace account names, IDs and URLs for your use case. `--help` requires no API key and makes no network request.

Set `JSONSCRAPER_INSTAGRAM_LICENSE_KEY` and install the SDK as described in the main README. Each execution makes one live request and may consume quota. None of these programs loops through a feed automatically.

## Get user info by ID

[Open the complete example](endpoints/v1_user_by_id.mjs) · `GET /v1/user/by/id`

```sh
node examples/endpoints/v1_user_by_id.mjs --help
```

## Get user info by username (by ID is faster)

[Open the complete example](endpoints/v1_user_by_username.mjs) · `GET /v1/user/by/username`

```sh
node examples/endpoints/v1_user_by_username.mjs --help
```

## Get user info by URL (by ID is faster)

[Open the complete example](endpoints/v1_user_by_url.mjs) · `GET /v1/user/by/url`

```sh
node examples/endpoints/v1_user_by_url.mjs --help
```

## Get info about user by ID

[Open the complete example](endpoints/v1_user_about.mjs) · `GET /v1/user/about`

```sh
node examples/endpoints/v1_user_about.mjs --help
```

## Get posts (chunked)

[Open the complete example](endpoints/v1_user_medias_chunk.mjs) · `GET /v1/user/medias/chunk`

```sh
node examples/endpoints/v1_user_medias_chunk.mjs --help
```

## Get pinned posts

[Open the complete example](endpoints/v1_user_medias_pinned.mjs) · `GET /v1/user/medias/pinned`

```sh
node examples/endpoints/v1_user_medias_pinned.mjs --help
```

## Get reels (chunked)

[Open the complete example](endpoints/v1_user_clips_chunk.mjs) · `GET /v1/user/clips/chunk`

```sh
node examples/endpoints/v1_user_clips_chunk.mjs --help
```

## Get tagged (mentions) posts

[Open the complete example](endpoints/v1_user_tag_medias_chunk.mjs) · `GET /v1/user/tag/medias/chunk`

```sh
node examples/endpoints/v1_user_tag_medias_chunk.mjs --help
```

## Get user stories by ID

[Open the complete example](endpoints/v1_user_stories.mjs) · `GET /v1/user/stories`

```sh
node examples/endpoints/v1_user_stories.mjs --help
```

## Get user stories by username (by ID is faster)

[Open the complete example](endpoints/v1_user_stories_by_username.mjs) · `GET /v1/user/stories/by/username`

```sh
node examples/endpoints/v1_user_stories_by_username.mjs --help
```

## Get user highlights by ID

[Open the complete example](endpoints/v1_user_highlights.mjs) · `GET /v1/user/highlights`

```sh
node examples/endpoints/v1_user_highlights.mjs --help
```

## Get user highlights by username (by ID is faster)

[Open the complete example](endpoints/v1_user_highlights_by_username.mjs) · `GET /v1/user/highlights/by/username`

```sh
node examples/endpoints/v1_user_highlights_by_username.mjs --help
```

## Search in followers list by query (not working for legacy verified accounts)

[Open the complete example](endpoints/v1_user_search_followers.mjs) · `GET /v1/user/search/followers`

```sh
node examples/endpoints/v1_user_search_followers.mjs --help
```

## Search in followings list by query (not working for legacy verified accounts)

[Open the complete example](endpoints/v1_user_search_following.mjs) · `GET /v1/user/search/following`

```sh
node examples/endpoints/v1_user_search_following.mjs --help
```

## Get user following (chunked)

[Open the complete example](endpoints/v1_user_following_chunk.mjs) · `GET /v1/user/following/chunk`

```sh
node examples/endpoints/v1_user_following_chunk.mjs --help
```

## Get user followers (chunked)

[Open the complete example](endpoints/v1_user_followers_chunk.mjs) · `GET /v1/user/followers/chunk`

```sh
node examples/endpoints/v1_user_followers_chunk.mjs --help
```

## Get media info by ID

[Open the complete example](endpoints/v1_media_by_id.mjs) · `GET /v1/media/by/id`

```sh
node examples/endpoints/v1_media_by_id.mjs --help
```

## Get media info by shortcode

[Open the complete example](endpoints/v1_media_by_code.mjs) · `GET /v1/media/by/code`

```sh
node examples/endpoints/v1_media_by_code.mjs --help
```

## Get media info by URL

[Open the complete example](endpoints/v1_media_by_url.mjs) · `GET /v1/media/by/url`

```sh
node examples/endpoints/v1_media_by_url.mjs --help
```

## Get media insights

[Open the complete example](endpoints/v1_media_insight.mjs) · `GET /v1/media/insight`

```sh
node examples/endpoints/v1_media_insight.mjs --help
```

## Get media comments (chunked)

[Open the complete example](endpoints/v1_media_comments_chunk.mjs) · `GET /v1/media/comments/chunk`

```sh
node examples/endpoints/v1_media_comments_chunk.mjs --help
```

## Get media likers

[Open the complete example](endpoints/v1_media_likers.mjs) · `GET /v1/media/likers`

```sh
node examples/endpoints/v1_media_likers.mjs --help
```

## Get author of the media

[Open the complete example](endpoints/v1_media_user.mjs) · `GET /v1/media/user`

```sh
node examples/endpoints/v1_media_user.mjs --help
```

## Get media oEmbed data

[Open the complete example](endpoints/v1_media_oembed.mjs) · `GET /v1/media/oembed`

```sh
node examples/endpoints/v1_media_oembed.mjs --help
```

## Get media code from media ID (PK) (unlimited usage)

[Open the complete example](endpoints/v1_media_code_from_pk.mjs) · `GET /v1/media/code/from/pk`

```sh
node examples/endpoints/v1_media_code_from_pk.mjs --help
```

## Get media ID (PK) from shortcode (unlimited usage)

[Open the complete example](endpoints/v1_media_pk_from_code.mjs) · `GET /v1/media/pk/from/code`

```sh
node examples/endpoints/v1_media_pk_from_code.mjs --help
```

## Get media ID (PK) from URL (unlimited usage)

[Open the complete example](endpoints/v1_media_pk_from_url.mjs) · `GET /v1/media/pk/from/url`

```sh
node examples/endpoints/v1_media_pk_from_url.mjs --help
```

## Get story by ID

[Open the complete example](endpoints/v1_story_by_id.mjs) · `GET /v1/story/by/id`

```sh
node examples/endpoints/v1_story_by_id.mjs --help
```

## Get story by URL

[Open the complete example](endpoints/v1_story_by_url.mjs) · `GET /v1/story/by/url`

```sh
node examples/endpoints/v1_story_by_url.mjs --help
```

## Download story by ID

[Open the complete example](endpoints/v1_story_download.mjs) · `GET /v1/story/download`

```sh
node examples/endpoints/v1_story_download.mjs --help
```

## Download story by direct media URL (unlimited usage)

[Open the complete example](endpoints/v1_story_download_by_url.mjs) · `GET /v1/story/download/by/url`

```sh
node examples/endpoints/v1_story_download_by_url.mjs --help
```

## Download story file by story URL (IG story link)

[Open the complete example](endpoints/v1_story_download_by_story_url.mjs) · `GET /v1/story/download/by/story/url`

```sh
node examples/endpoints/v1_story_download_by_story_url.mjs --help
```

## Get highlight by ID

[Open the complete example](endpoints/v1_highlight_by_id.mjs) · `GET /v1/highlight/by/id`

```sh
node examples/endpoints/v1_highlight_by_id.mjs --help
```

## Get highlight by URL

[Open the complete example](endpoints/v1_highlight_by_url.mjs) · `GET /v1/highlight/by/url`

```sh
node examples/endpoints/v1_highlight_by_url.mjs --help
```

## Get location by ID

[Open the complete example](endpoints/v1_location_by_id.mjs) · `GET /v1/location/by/id`

```sh
node examples/endpoints/v1_location_by_id.mjs --help
```

## Get location top medias

[Open the complete example](endpoints/v1_location_medias_top.mjs) · `GET /v1/location/medias/top`

```sh
node examples/endpoints/v1_location_medias_top.mjs --help
```

## Get location recent medias

[Open the complete example](endpoints/v1_location_medias_recent.mjs) · `GET /v1/location/medias/recent`

```sh
node examples/endpoints/v1_location_medias_recent.mjs --help
```

## Get location top medias (chunked)

[Open the complete example](endpoints/v1_location_medias_top_chunk.mjs) · `GET /v1/location/medias/top/chunk`

```sh
node examples/endpoints/v1_location_medias_top_chunk.mjs --help
```

## Get location recent medias (chunked)

[Open the complete example](endpoints/v1_location_medias_recent_chunk.mjs) · `GET /v1/location/medias/recent/chunk`

```sh
node examples/endpoints/v1_location_medias_recent_chunk.mjs --help
```

## Search locations

[Open the complete example](endpoints/v1_location_search.mjs) · `GET /v1/location/search`

```sh
node examples/endpoints/v1_location_search.mjs --help
```

## Get hashtag by name

[Open the complete example](endpoints/v1_hashtag_by_name.mjs) · `GET /v1/hashtag/by/name`

```sh
node examples/endpoints/v1_hashtag_by_name.mjs --help
```

## Get hashtag top medias

[Open the complete example](endpoints/v1_hashtag_medias_top.mjs) · `GET /v1/hashtag/medias/top`

```sh
node examples/endpoints/v1_hashtag_medias_top.mjs --help
```

## Get hashtag top medias (chunked)

[Open the complete example](endpoints/v1_hashtag_medias_top_chunk.mjs) · `GET /v1/hashtag/medias/top/chunk`

```sh
node examples/endpoints/v1_hashtag_medias_top_chunk.mjs --help
```

## Get hashtag recent medias (chunked)

[Open the complete example](endpoints/v1_hashtag_medias_top_recent_chunk.mjs) · `GET /v1/hashtag/medias/top/recent/chunk`

```sh
node examples/endpoints/v1_hashtag_medias_top_recent_chunk.mjs --help
```

## Get hashtag clips (chunked)

[Open the complete example](endpoints/v1_hashtag_medias_clips_chunk.mjs) · `GET /v1/hashtag/medias/clips/chunk`

```sh
node examples/endpoints/v1_hashtag_medias_clips_chunk.mjs --help
```

## Search hashtags

[Open the complete example](endpoints/v1_search_hashtags.mjs) · `GET /v1/search/hashtags`

```sh
node examples/endpoints/v1_search_hashtags.mjs --help
```

## Search users

[Open the complete example](endpoints/v1_search_users.mjs) · `GET /v1/search/users`

```sh
node examples/endpoints/v1_search_users.mjs --help
```

## Search music

[Open the complete example](endpoints/v1_search_music.mjs) · `GET /v1/search/music`

```sh
node examples/endpoints/v1_search_music.mjs --help
```

## Search places

[Open the complete example](endpoints/v1_fbsearch_places.mjs) · `GET /v1/fbsearch/places`

```sh
node examples/endpoints/v1_fbsearch_places.mjs --help
```

## Top search

[Open the complete example](endpoints/v1_fbsearch_topsearch.mjs) · `GET /v1/fbsearch/topsearch`

```sh
node examples/endpoints/v1_fbsearch_topsearch.mjs --help
```

## Get user info by ID

[Open the complete example](endpoints/v2_user_by_id.mjs) · `GET /v2/user/by/id`

```sh
node examples/endpoints/v2_user_by_id.mjs --help
```

## Get user info by username

[Open the complete example](endpoints/v2_user_by_username.mjs) · `GET /v2/user/by/username`

```sh
node examples/endpoints/v2_user_by_username.mjs --help
```

## Get user info stream by ID

[Open the complete example](endpoints/v2_userstream_by_id.mjs) · `GET /v2/userstream/by/id`

```sh
node examples/endpoints/v2_userstream_by_id.mjs --help
```

## Get user info stream by username

[Open the complete example](endpoints/v2_userstream_by_username.mjs) · `GET /v2/userstream/by/username`

```sh
node examples/endpoints/v2_userstream_by_username.mjs --help
```

## Get user stories by ID

[Open the complete example](endpoints/v2_user_stories.mjs) · `GET /v2/user/stories`

```sh
node examples/endpoints/v2_user_stories.mjs --help
```

## Get user stories by username

[Open the complete example](endpoints/v2_user_stories_by_username.mjs) · `GET /v2/user/stories/by/username`

```sh
node examples/endpoints/v2_user_stories_by_username.mjs --help
```

## Get user reels by ID

[Open the complete example](endpoints/v2_user_clips.mjs) · `GET /v2/user/clips`

```sh
node examples/endpoints/v2_user_clips.mjs --help
```

## Get user following list

[Open the complete example](endpoints/v2_user_following.mjs) · `GET /v2/user/following`

```sh
node examples/endpoints/v2_user_following.mjs --help
```

## Get user followers list

[Open the complete example](endpoints/v2_user_followers.mjs) · `GET /v2/user/followers`

```sh
node examples/endpoints/v2_user_followers.mjs --help
```

## Get media where user is tagged

[Open the complete example](endpoints/v2_user_tag_medias.mjs) · `GET /v2/user/tag/medias`

```sh
node examples/endpoints/v2_user_tag_medias.mjs --help
```

## Get user highlights by ID

[Open the complete example](endpoints/v2_user_highlights.mjs) · `GET /v2/user/highlights`

```sh
node examples/endpoints/v2_user_highlights.mjs --help
```

## Get user highlights by username (by ID is faster)

[Open the complete example](endpoints/v2_user_highlights_by_username.mjs) · `GET /v2/user/highlights/by/username`

```sh
node examples/endpoints/v2_user_highlights_by_username.mjs --help
```

## Get business suggestions for user

[Open the complete example](endpoints/v2_user_explore_businesses_by_id.mjs) · `GET /v2/user/explore/businesses/by/id`

```sh
node examples/endpoints/v2_user_explore_businesses_by_id.mjs --help
```

## Get suggested profiles for user

[Open the complete example](endpoints/v2_user_suggested_profiles.mjs) · `GET /v2/user/suggested/profiles`

```sh
node examples/endpoints/v2_user_suggested_profiles.mjs --help
```

## Get media info by ID

[Open the complete example](endpoints/v2_media_info_by_id.mjs) · `GET /v2/media/info/by/id`

```sh
node examples/endpoints/v2_media_info_by_id.mjs --help
```

## Get media info by shortcode

[Open the complete example](endpoints/v2_media_info_by_code.mjs) · `GET /v2/media/info/by/code`

```sh
node examples/endpoints/v2_media_info_by_code.mjs --help
```

## Get media info by URL

[Open the complete example](endpoints/v2_media_info_by_url.mjs) · `GET /v2/media/info/by/url`

```sh
node examples/endpoints/v2_media_info_by_url.mjs --help
```

## Get media comments

[Open the complete example](endpoints/v2_media_comments.mjs) · `GET /v2/media/comments`

```sh
node examples/endpoints/v2_media_comments.mjs --help
```

## Get media likers

[Open the complete example](endpoints/v2_media_likers.mjs) · `GET /v2/media/likers`

```sh
node examples/endpoints/v2_media_likers.mjs --help
```

## Check comment for offensiveness

[Open the complete example](endpoints/v2_media_comment_offensive.mjs) · `GET /v2/media/comment/offensive`

```sh
node examples/endpoints/v2_media_comment_offensive.mjs --help
```

## Get comment replies

[Open the complete example](endpoints/v2_media_comments_replies.mjs) · `GET /v2/media/comments/replies`

```sh
node examples/endpoints/v2_media_comments_replies.mjs --help
```

## Get story by ID

[Open the complete example](endpoints/v2_story_by_id.mjs) · `GET /v2/story/by/id`

```sh
node examples/endpoints/v2_story_by_id.mjs --help
```

## Get music feed by canonical ID

[Open the complete example](endpoints/v2_track_by_canonical_id.mjs) · `GET /v2/track/by/canonical/id`

```sh
node examples/endpoints/v2_track_by_canonical_id.mjs --help
```

## Get music feed by ID

[Open the complete example](endpoints/v2_track_by_id.mjs) · `GET /v2/track/by/id`

```sh
node examples/endpoints/v2_track_by_id.mjs --help
```

## Get hashtag by name

[Open the complete example](endpoints/v2_hashtag_by_name.mjs) · `GET /v2/hashtag/by/name`

```sh
node examples/endpoints/v2_hashtag_by_name.mjs --help
```

## Get hashtag top medias

[Open the complete example](endpoints/v2_hashtag_medias_top.mjs) · `GET /v2/hashtag/medias/top`

```sh
node examples/endpoints/v2_hashtag_medias_top.mjs --help
```

## Get hashtag recent medias

[Open the complete example](endpoints/v2_hashtag_medias_recent.mjs) · `GET /v2/hashtag/medias/recent`

```sh
node examples/endpoints/v2_hashtag_medias_recent.mjs --help
```

## Get highlight by ID

[Open the complete example](endpoints/v2_highlight_by_id.mjs) · `GET /v2/highlight/by/id`

```sh
node examples/endpoints/v2_highlight_by_id.mjs --help
```

## Search hashtags

[Open the complete example](endpoints/v2_search_hashtags.mjs) · `GET /v2/search/hashtags`

```sh
node examples/endpoints/v2_search_hashtags.mjs --help
```

## Search music

[Open the complete example](endpoints/v2_search_music.mjs) · `GET /v2/search/music`

```sh
node examples/endpoints/v2_search_music.mjs --help
```

## Search accounts (users)

[Open the complete example](endpoints/v2_fbsearch_accounts.mjs) · `GET /v2/fbsearch/accounts`

```sh
node examples/endpoints/v2_fbsearch_accounts.mjs --help
```

## Search places (locations)

[Open the complete example](endpoints/v2_fbsearch_places.mjs) · `GET /v2/fbsearch/places`

```sh
node examples/endpoints/v2_fbsearch_places.mjs --help
```

## Top search

[Open the complete example](endpoints/v2_fbsearch_topsearch.mjs) · `GET /v2/fbsearch/topsearch`

```sh
node examples/endpoints/v2_fbsearch_topsearch.mjs --help
```

## Search reels (clips)

[Open the complete example](endpoints/v2_fbsearch_reels.mjs) · `GET /v2/fbsearch/reels`

```sh
node examples/endpoints/v2_fbsearch_reels.mjs --help
```

## Get comments list by media ID (chunked)

[Open the complete example](endpoints/gql_comments_chunk.mjs) · `GET /gql/comments/chunk`

```sh
node examples/endpoints/gql_comments_chunk.mjs --help
```

## Get threaded replies list by comment ID (chunked)

[Open the complete example](endpoints/gql_comments_threaded_chunk.mjs) · `GET /gql/comments/threaded/chunk`

```sh
node examples/endpoints/gql_comments_threaded_chunk.mjs --help
```

## Get comment likers list by comment ID (chunked)

[Open the complete example](endpoints/gql_comment_likers_chunk.mjs) · `GET /gql/comment/likers/chunk`

```sh
node examples/endpoints/gql_comment_likers_chunk.mjs --help
```

## Search top content by keyword

[Open the complete example](endpoints/gql_topsearch.mjs) · `GET /gql/topsearch`

```sh
node examples/endpoints/gql_topsearch.mjs --help
```

## Get media likers by media ID

[Open the complete example](endpoints/gql_media_likers.mjs) · `GET /gql/media/likers`

```sh
node examples/endpoints/gql_media_likers.mjs --help
```

## Get video usertags by media IDs

[Open the complete example](endpoints/gql_media_usertags.mjs) · `GET /gql/media/usertags`

```sh
node examples/endpoints/gql_media_usertags.mjs --help
```

## Get user followers (chunked)

[Open the complete example](endpoints/gql_user_followers_chunk.mjs) · `GET /gql/user/followers/chunk`

```sh
node examples/endpoints/gql_user_followers_chunk.mjs --help
```

## Get user following (chunked)

[Open the complete example](endpoints/gql_user_following_chunk.mjs) · `GET /gql/user/following/chunk`

```sh
node examples/endpoints/gql_user_following_chunk.mjs --help
```

## Get user reposts

[Open the complete example](endpoints/gql_user_reposts.mjs) · `GET /gql/user/reposts`

```sh
node examples/endpoints/gql_user_reposts.mjs --help
```

## Get user clips (reels)

[Open the complete example](endpoints/gql_user_clips.mjs) · `GET /gql/user/clips`

```sh
node examples/endpoints/gql_user_clips.mjs --help
```

## Get user profile media (grid)

[Open the complete example](endpoints/gql_user_medias.mjs) · `GET /gql/user/medias`

```sh
node examples/endpoints/gql_user_medias.mjs --help
```

## Search users

[Open the complete example](endpoints/v3_fbsearch_accounts.mjs) · `GET /v3/fbsearch/accounts`

```sh
node examples/endpoints/v3_fbsearch_accounts.mjs --help
```

## Search places (locations)

[Open the complete example](endpoints/v3_fbsearch_places.mjs) · `GET /v3/fbsearch/places`

```sh
node examples/endpoints/v3_fbsearch_places.mjs --help
```

