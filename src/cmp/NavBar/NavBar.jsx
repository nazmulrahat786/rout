import { MenuIcon, X } from "lucide-react";
import Link from "./Link";
import { useState } from "react";

const navigationData = [
    {
      id: 1,
      name: "Home",
      path: "/"
    },
    {
      id: 2,
      name: "Articles",
      path: "/articles"
    },
    {
      id: 3,
      name: "Categories",
      path: "/categories"
    },
    {
      id: 4,
      name: "Users",
      path: "/users"
    },
    {
      id: 5,
      name: "Settings",
      path: "/settings"
    }
  ];
  

const NavBar = () => {
  const [open , setOpen] = useState(false) 
  const links =  navigationData.map(route => <Link key={route.id} route={route}></Link>)
    return (
        <nav className="flex justify-between items-center bg-gray-800 text-white p-4">
         <span onClick={()=>setOpen(!open)} className="flex justify-center items-center gap-2">

          {
            open? <X className="md:hidden"></X> :  <MenuIcon className="md:hidden"></MenuIcon>
          }


        <ul className={`md:hidden 
          absolute duration-1000
           ${open ? "top-16" : "-top-96"}
           `}>
          {links}
        </ul>



         <h3 className="m-2">My NavBar</h3>
         </span>


<ul className="md:flex hidden ">
{
   links
}
</ul>



{/* <ul>
   {
     navigationData.map(route =><li  className="mr-10">
        <a href={route.path}>{route.name}</a>
        </li> )
   }
</ul> */}







            {/* <ul className="flex"> 
                <li className="mr-10"><a href="/">Home</a></li>
                <li className="mr-10"><a href="/about">About</a></li>
                <li className="mr-10"><a href="/blog">Blog</a></li>
            </ul> */}


<button className="btn">Sign in</button>
        </nav>
    );
};

export default NavBar;