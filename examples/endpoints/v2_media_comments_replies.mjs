/**
 * Get comment replies — GET /v2/media/comments/replies
 * Run: node examples/endpoints/v2_media_comments_replies.mjs --help
 * Set JSONSCRAPER_INSTAGRAM_LICENSE_KEY; this example performs one licensed request.
 */
import {parseArgs} from 'node:util';
import {writeFile} from 'node:fs/promises';
import {Instagram, APIError, TransportError} from '../../src/index.js';

async function main() {
  const {values} = parseArgs({options:{"media_id": {"type": "string", "default": "3816481912765155592"}, "comment_id": {"type": "string", "default": "18093208474788133"}, "min_id": {"type": "string"}, "cache_timeout": {"type": "string", "default": "60"}, "help": {"type": "boolean", "short": "h"}, "timeout": {"type": "string", "default": "30"}, "retries": {"type": "string", "default": "0"}, "output": {"type": "string"}},allowPositionals:false});
  if(values.help) {console.log("Get comment replies\nGET /v2/media/comments/replies\n\nEnvironment: JSONSCRAPER_INSTAGRAM_LICENSE_KEY\nCommon options: --timeout=30, --help\nQuery options:\n  --media_id=VALUE  Unique ID of the media item.\n  --comment_id=VALUE  Comment ID to load replies for.\n  --min_id=VALUE  Pagination cursor. Use next_min_id from the previous response.\n  --cache_timeout=VALUE  Caching is disabled by default. Set a value greater than 0 to enable response caching for the specified number of seconds; repeated requests within this window will be served from \n\nValues omitted from the command use the public Postman sample defaults. Replace IDs/URLs with your own inputs. Each run makes one request; live requests may consume quota.");return;}
  const key=process.env.JSONSCRAPER_INSTAGRAM_LICENSE_KEY?.trim();
  if(!key) throw new Error('Set JSONSCRAPER_INSTAGRAM_LICENSE_KEY before making a licensed request');
  const timeout=Number(values.timeout), retries=Number(values.retries);
  if(!Number.isFinite(timeout)||timeout<=0||!Number.isInteger(retries)||retries<0||retries>5) throw new Error('Use a positive timeout and 0 to 5 retries');
  const client=new Instagram(key,{timeout:timeout*1000,retries});
  const params=Object.fromEntries(Object.entries(values).filter(([key])=>!['help','timeout','retries','output'].includes(key)));
  const response=await client.v2_media_comments_replies(params);
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
