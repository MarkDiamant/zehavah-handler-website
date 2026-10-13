import './globals.css';
const siteUrl=process.env.NEXT_PUBLIC_SITE_URL||'https://zehavah.sites.diamantsolutions.co.uk';
export const metadata={
 metadataBase:new URL(siteUrl),
 title:'Zehavah Handler | Psychotherapy & Sleep Specialist',
 description:'Thoughtful psychotherapy and specialist sleep support with Zehavah Handler. Online and in-person in Finchley, London.',
 openGraph:{type:'website',siteName:'Zehavah Handler Therapy',title:'Zehavah Handler | Psychotherapy & Sleep Specialist',description:'Individual psychotherapy and specialist Insomnia Healing in Finchley, North West London, and online.',url:'/'},
 icons:{icon:'/icon.svg'},
 // Keep the customer-review preview out of search results until launch is authorised.
 robots:{index:false,follow:true}
};
export default function RootLayout({children}){return <html lang="en"><body>{children}</body></html>}
