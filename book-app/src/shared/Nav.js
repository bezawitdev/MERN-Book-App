import { NavLink } from "react-router-dom";
import logo from './logoFinal.PNG';


const Nav = () => {
  return(
  <nav class="flex flex-wrap bg-green-900 p-6"> 
  <div class="items-start justify-start mr-1.5"> 
   <div class="flex"> 
    <img src={logo} class="max-w-full h-auto rounded-full" width="74" height="54" alt=""/>
    <h3 class="items-bottom text-yellow-600 text-2xl ml-9 mt-4  font-medium">Magic Book Store</h3>
  </div> 
  {/* <img src={logo} class="fill-current h-8 w-8 mr-60" width="54" height="54" /> */}
      {/* <svg className="fill-current h-8 w-8 mr-60" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg> */}
      </div>
    {/* <span className="font-semibold text-xl tracking-tight">Tailwind CSS</span>    */}
    <div className="items-end justify-between pl-96 mt-6 text-lg">
    <NavLink to="/" className="block mt-2 lg:inline-block lg:mt-0 text-md uppercase text-yellow-600  font-medium  hover:text-white mr-8">Home</NavLink>
    <NavLink to="/books" className="block mt-2 lg:inline-block lg:mt-0 text-yellow-600 text-md uppercase  font-medium hover:text-white mr-8">Books</NavLink>

       <NavLink to="/add-book" className="block mt-2 lg:inline-block lg:mt-0 text-yellow-600 text-md uppercase  font-medium hover:text-white mr-8">Add-Book</NavLink>
       <NavLink to="/NewyorkSeller" className="block mt-2 lg:inline-block lg:mt-0 text-yellow-600 text-md uppercase  font-medium hover:text-white mr-8">NY-Best-Seller</NavLink>
    
    </div>
    </nav>
  )
}

export default Nav
{/* <div className="flex items-end justify-end flex-wrap bg-red-900 p-6"> */}