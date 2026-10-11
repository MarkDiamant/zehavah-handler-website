import {createClient} from '@supabase/supabase-js';
export async function POST(request){
 try{
  const token=(request.headers.get('authorization')||'').replace(/^Bearer\s+/i,'');
  const {password}=await request.json();
  if(!token||typeof password!=='string'||password.length<12||password.length>128)return Response.json({error:'Invalid request or password.'},{status:400});
  const url=process.env.NEXT_PUBLIC_SUPABASE_URL;
  const pub=process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const secret=process.env.SUPABASE_SERVICE_ROLE_KEY;
  if(!url||!pub||!secret)return Response.json({error:'Admin password setup is not configured yet.'},{status:503});
  const publicClient=createClient(url,pub,{auth:{persistSession:false,autoRefreshToken:false}});
  const {data:{user},error:authError}=await publicClient.auth.getUser(token);
  if(authError||!user)return Response.json({error:'Sign in as the website administrator first.'},{status:401});
  const admin=createClient(url,secret,{auth:{persistSession:false,autoRefreshToken:false}});
  const {data:member,error:memberError}=await admin.from('tenant_members').select('role').eq('tenant_id','21c40433-5ebb-4412-bdd4-42357b167a2d').eq('user_id',user.id).eq('role','admin').maybeSingle();
  if(memberError||!member)return Response.json({error:'Only the website administrator may set the initial client password.'},{status:403});
  const {error}=await admin.auth.admin.updateUserById('115cf4b4-5fb3-471d-b4aa-2b1498f74bbd',{password});
  if(error)return Response.json({error:'Unable to set password: '+error.message},{status:502});
  return Response.json({ok:true});
 }catch{return Response.json({error:'Unable to set password.'},{status:500})}
}