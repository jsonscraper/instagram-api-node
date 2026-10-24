import {Instagram} from '../src/index.js';
const client=new Instagram(process.env.JSONSCRAPER_INSTAGRAM_LICENSE_KEY);
console.log(await client.request('/v1/search/users',{"query": "apple", "cache_timeout": 60}));
