import posts from '../../../data/blog-posts.json';
export function generateStaticParams(){return posts.map((p)=>({slug:p.title.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')}))}
export default async function Page({params}){const {slug}=await params;const post=posts.find(p=>p.title.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')===slug);return <main style={{maxWidth:850,margin:'auto',padding:40}}><h1>{post?.title}</h1>{post?.blocks.map((b,i)=><p key={i}>{b}</p>)}</main>}
