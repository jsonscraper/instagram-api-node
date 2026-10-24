import {Client,APIError} from '../src/index.js';
try {
 const c=new Client('contract-secret',{baseUrl:process.env.BASE_URL,timeout:Number(process.env.TIMEOUT||3)*1000,retries:Number(process.env.RETRIES||0)});
 const data=await c.request(process.env.API_PATH,{video_id:'a&b?x=1+/Ю',license_key:'override',count:0,flag:false});
 if(data instanceof Uint8Array)process.stdout.write(Buffer.from(data));else console.log(JSON.stringify(data));
}catch(e){console.log(JSON.stringify({error:e instanceof APIError?e.status:'transport'}));}
