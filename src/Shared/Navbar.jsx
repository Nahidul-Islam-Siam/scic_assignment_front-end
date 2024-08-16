import { Link } from "react-router-dom";



export default function Navbar() {
  return (
    <div className='hidden lg:block'>
    <div className='container'>
<div className='flex w-fit gap-10 mx-auto font-medium py-4 text-blackish'>
<Link href='#' className='navbar__link relative'>HOME</Link>
<Link href='#' className='navbar__link relative'>CATEGORIES</Link>
<Link href='#' className='navbar__link relative'>MEN&apos;S</Link>
<Link href='#' className='navbar__link relative'>WOMENS</Link>
<Link href='#' className='navbar__link relative'>JEWELRY</Link>
<Link href='#' className='navbar__link relative'>PERFORM</Link>
<Link href='#' className='navbar__link relative'>BLOGS</Link>
<Link href='#' className='navbar__link relative'>HOT OFFERS</Link>
</div>
    </div>
    </div>
  )
}
