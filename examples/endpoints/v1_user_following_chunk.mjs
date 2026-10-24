/**
 * Get user following (chunked) — GET /v1/user/following/chunk
 * Run: node examples/endpoints/v1_user_following_chunk.mjs --help
 * Set JSONSCRAPER_INSTAGRAM_LICENSE_KEY; this example performs one licensed request.
 */
import {parseArgs} from 'node:util';
import {writeFile} from 'node:fs/promises';
import {Instagram, APIError, TransportError} from '../../src/index.js';

async function main() {
  const {values} = parseArgs({options:{"user_id": {"type": "string", "default": "975798655"}, "max_id": {"type": "string"}, "cache_timeout": {"type": "string", "default": "60"}, "help": {"type": "boolean", "short": "h"}, "timeout": {"type": "string", "default": "30"}, "retries": {"type": "string", "default": "0"}, "output": {"type": "string"}},allowPositionals:false});
  if(values.help) {console.log("Get user following (chunked)\nGET /v1/user/following/chunk\n\nEnvironment: JSONSCRAPER_INSTAGRAM_LICENSE_KEY\nCommon options: --timeout=30, --help\nQuery options:\n  --user_id=VALUE  Instagram ID of the user whose following list you want to retrieve.\n  --max_id=VALUE  Pagination cursor. Use the max_id value from the previous response to load the next chunk of results.\n  --cache_timeout=VALUE  Caching is disabled by default. Set a value greater than 0 to enable response caching for the specified number of seconds; repeated requests within this window will be served from \n\nValues omitted from the command use the public Postman sample defaults. Replace IDs/URLs with your own inputs. Each run makes one request; live requests may consume quota.");return;}
  const key=process.env.JSONSCRAPER_INSTAGRAM_LICENSE_KEY?.trim();
  if(!key) throw new Error('Set JSONSCRAPER_INSTAGRAM_LICENSE_KEY before making a licensed request');
  const timeout=Number(values.timeout), retries=Number(values.retries);
  if(!Number.isFinite(timeout)||timeout<=0||!Number.isInteger(retries)||retries<0||retries>5) throw new Error('Use a positive timeout and 0 to 5 retries');
  const client=new Instagram(key,{timeout:timeout*1000,retries});
  const params=Object.fromEntries(Object.entries(values).filter(([key])=>!['help','timeout','retries','output'].includes(key)));
  const response=await client.v1_user_following_chunk(params);
  if(response instanceof Uint8Array) {
    if(!values.output) throw new Error('Binary response: provide --output=filename');
    await writeFile(values.output,response);return;
  }
  if(!response || response.status!=='ok' || response.rate_limit_reached) {
    console.error('The API returned an application error or quota limit. Inspect the envelope below.');
    console.log(JSON.stringify(response,null,2));process.exitCode=1;return;
  }
  const rendered=JSON.stringify(response,null,2)+'\n';
  if(values.output) await writeFile(values.output,rendered,'utf8');else process.stdout.write(rendered);
}
main().catch(error=>{
  if(error instanceof APIError) console.error(`HTTP ${error.status}. Check access, parameters and quota. Retry-After: ${error.retryAfter||'not provided'}`);
  else if(error instanceof TransportError) console.error(error.message);
  else console.error(error.message);
  process.exitCode=1;
});
