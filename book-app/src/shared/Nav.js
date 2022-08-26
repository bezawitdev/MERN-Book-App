import { NavLink } from "react-router-dom";

const Nav = () => {
  return(
  <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
    <span className="font-semibold text-xl tracking-tight">Tailwind CSS</span>   
    <NavLink to="/" className="block mt-2 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-2">Home</NavLink>
    <NavLink to="/books" className="block mt-2 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-2">Books</NavLink>
    <NavLink to="/add-book" className="block mt-2 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-2">Add-Book</NavLink>
    
    </nav>
  )
}

export default Nav
