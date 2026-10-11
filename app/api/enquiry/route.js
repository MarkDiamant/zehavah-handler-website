export async function POST(request){
  try{
    const data=await request.json();
    const name=String(data.name||'').trim().slice(0,120);
    const email=String(data.email||'').trim().slice(0,254);
    const message=String(data.message||'').trim().slice(0,3000);
    const website=String(data.website||'');
    if(website)return Response.json({ok:true});
    if(!name||!email||!message||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))return Response.json({error:'Please complete all fields with a valid email address.'},{status:400});
    const key=process.env.RESEND_API_KEY;
    if(!key)return Response.json({error:'The enquiry service is temporarily unavailable.'},{status:503});
    const response=await fetch('https://api.resend.com/emails',{method:'POST',headers:{Authorization:'Bearer '+key,'Content-Type':'application/json'},body:JSON.stringify({from:'Zehavah Website <hello@diamantsolutions.co.uk>',to:['Handler.zehavah@gmail.com'],reply_to:email,subject:'Website therapy enquiry from '+name,text:'Name: '+name+'\nEmail: '+email+'\n\n'+message})});
    if(!response.ok){console.error('Enquiry delivery failed',response.status);return Response.json({error:'Your enquiry could not be sent. Please try again or email directly.'},{status:502})}
    return Response.json({ok:true});
  }catch{return Response.json({error:'Unable to send enquiry. Please try again.'},{status:500})}
}