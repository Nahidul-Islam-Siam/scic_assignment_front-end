import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Firebase/AuthProviders";



export default function Navbar() {
  const {user,logout} = useContext(AuthContext)
  return (
    <div className='hidden lg:block'>
    <div className='container'>
<ul className='flex w-fit gap-10 mx-auto font-medium py-4 text-blackish'>
<li><Link to="/" className='navbar__link relative'>HOME</Link></li>
<li><Link href='#' className='navbar__link relative'>CATEGORIES</Link></li>
<li>
  {
  user ? 
  <NavLink to="/login" className='navbar__link relative'>Login</NavLink> :
  <NavLink onClick={logout} className='navbar__link relative'>Log Out</NavLink>

  }

{/* <Link href='#' className='navbar__link relative'>WOMENS</Link>
<Link href='#' className='navbar__link relative'>JEWELRY</Link>
<Link href='#' className='navbar__link relative'>PERFORM</Link>
<Link href='#' className='navbar__link relative'>BLOGS</Link>
<Link href='#' className='navbar__link relative'>HOT OFFERS</Link> */}
</li>
</ul>
    </div>
    </div>
  )
}
