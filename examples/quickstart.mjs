import {Instagram, TikTok, APIError} from '@jsonscraper/sdk';

const ig = new Instagram(process.env.JSONSCRAPER_INSTAGRAM_LICENSE_KEY, {timeout: 30000, retries: 1});
console.log(await ig.v1_user_by_username({username: 'apple', cache_timeout: 60}));
const tiktok = new TikTok(process.env.JSONSCRAPER_TIKTOK_LICENSE_KEY);
const video = await tiktok.get_video_by_id({video_id: '7106855913906081070', cache_timeout: 60});
console.log(video.tiktok.aweme_detail.aweme_id);
