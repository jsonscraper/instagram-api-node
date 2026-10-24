import {Instagram} from '../src/index.js';
const client=new Instagram(process.env.JSONSCRAPER_INSTAGRAM_LICENSE_KEY);
console.log(await client.request('/v1/user/medias/chunk',{"user_id": "5821462185", "end_cursor": "", "cache_timeout": 60}));
