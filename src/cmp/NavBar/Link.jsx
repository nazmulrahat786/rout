

const Link = ({route}) => {
    return (
       <li className=" px-4  hover:bg-green-300  lg:mr-10">

<a href={route.path}>{route.name}</a>

       </li>
    );
};

export default Link;