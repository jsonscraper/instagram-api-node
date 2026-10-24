import {Instagram, APIError} from '../src/index.js';

const client = new Instagram(process.env.JSONSCRAPER_INSTAGRAM_LICENSE_KEY, {timeout: 30000, retries: 1});
try {
  const response = await client.v1_user_by_username({username: 'apple', cache_timeout: 60});
  if (response.status !== 'ok') throw new Error('The API returned an application error');
  console.log(response.ig);
} catch (error) {
  if (error instanceof APIError) console.error('HTTP', error.status);
  else throw error;
}
