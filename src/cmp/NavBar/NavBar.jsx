import Link from "./Link";

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
    return (
        <nav>


<ul className="flex ">
{
    navigationData.map(route => <Link key={route.id} route={route}></Link>)
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
        </nav>
    );
};

export default NavBar;