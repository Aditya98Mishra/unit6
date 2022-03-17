// import { Home } from "./Home";
// import { About } from "./About";

import { Link } from "react-router-dom";


const links = [
  {
    title: "Home",
    link: "/",
    id: "header-link-home",
  },
  {
    title: "About",
    link: "/about",
    id: "header-link-about",
  },
  {
    title: "Movies",
    link: "/movies",
    id: "header-link-movies",
  }
  //   add the other link as well

];
export const Navbar = () => {
  return (

    <div>
      {links.map((e)=>(
        <div style={{display:'inline-block', margin:"50px",marginTop:"10px"}}>
          <Link to={e.link}>
          <h2>{e.title}</h2>
          </Link>
        </div>
        
      ))}
    </div>
    

  );
};
