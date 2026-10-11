'use client';
import {useState} from 'react';
import Link from 'next/link';
import {Menu,X} from 'lucide-react';
const items=[['Home','/'],['Your Therapy','/your-therapy'],['About Me','/about-me'],['Sleep','/sleep'],['Fees','/fees'],['Articles','/articles'],['Contact','/contact']];
export default function SiteHeader(){const[open,setOpen]=useState(false);return <header className="header"><Link href="/" className="brand" onClick={()=>setOpen(false)}>zehavah<span>.</span><small>HANDLER THERAPY</small></Link><nav className={'nav detailnav'+(open?' active':'')} aria-label="Main navigation">{items.map(([label,href])=><Link key={href} href={href} onClick={()=>setOpen(false)}>{label}</Link>)}</nav><Link href="/contact" className="headcta">Get in touch</Link><button type="button" className="menubtn" aria-label={open?'Close menu':'Open menu'} aria-expanded={open} onClick={()=>setOpen(v=>!v)}>{open?<X size={25}/>:<Menu size={25}/>}</button></header>}
