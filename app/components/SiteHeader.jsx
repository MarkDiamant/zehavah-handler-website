'use client';
import {useState} from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {Menu,X} from 'lucide-react';
const items=[['Home','/'],['Your Therapy','/your-therapy'],['About Me','/about-me'],['Insomnia Healing','/insomnia-healing'],['Fees','/fees'],['Articles','/articles'],['Contact','/contact']];
export default function SiteHeader(){const[open,setOpen]=useState(false);const pathname=usePathname();return <header className="header"><Link href="/" className="brand" onClick={()=>setOpen(false)}>Zehavah Handler<small>Psychotherapy · Insomnia</small></Link><nav className={'nav detailnav'+(open?' active':'')} aria-label="Main navigation">{items.map(([label,href])=><Link key={href} href={href} aria-current={pathname===href?'page':undefined} onClick={()=>setOpen(false)}>{label}</Link>)}</nav><a className="header-phone" href="tel:+447385136779">07385 136 779</a><Link href="/contact" className="headcta">Get in touch</Link><button type="button" className="menubtn" aria-label={open?'Close menu':'Open menu'} aria-expanded={open} onClick={()=>setOpen(v=>!v)}>{open?<X size={25}/>:<Menu size={25}/>}</button></header>}
