const posts=require('./data/blog-posts.json');
const slug=t=>t.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
const dates=['2024/09/05','2024/06/05','2024/02/12','2024/01/22','2024/01/02','2023/12/03','2023/11/01','2023/09/26','2023/09/05','2023/09/05','2023/08/07','2023/07/31','2023/07/31','2023/07/31'];
module.exports={async redirects(){return posts.map((p,i)=>({source:'/'+dates[i]+'/'+slug(p.title),destination:'/articles/'+slug(p.title),permanent:true}))}};
