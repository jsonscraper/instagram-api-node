import {Instagram} from '../src/index.js';
const client=new Instagram(process.env.JSONSCRAPER_INSTAGRAM_LICENSE_KEY);
console.log(await client.request('/v1/media/by/code',{"code": "DT23hQ-EgkI", "cache_timeout": 60}));
