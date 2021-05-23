import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <header>
      {/** Top NAV ----- ring-2 ring-gray-600 */}
      <div className="flex items-center p-1 flex-grow py-2 ">
        <div className="mt-2 px-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={100}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>

        {/** SEARCH */}
        <div
          className="hidden sm:flex items-center h-10 rounded-md flex-grow
         bg-yellow-400 hover:bg-yellow-500 cursor-pointer"
        >
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md 
            focus:outline-none px-4"
            type="text"
          />
          <SearchIcon className="h-12 p-4" />
        </div>

        {/** RIGHT */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div className=" link">
            <p>Hello Siddhesh Kankekar</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>

          <div className=" link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>

          <div className="relative link flex items-center">
            <span
              className="absolute top-0 right-0 md:right-10 h-4 w-4 
            bg-yellow-400 text-center rounded-full text-white font-bold"
            >
              0
            </span>

            <ShoppingCartIcon className="h-8" />
            <p className="hidden md:inline font-extrabold md:text-sm mt-2">
              Basket
            </p>
          </div>
        </div>
      </div>

      {/**Bottom NAV */}
      <div className="flex items-center space-x-4 p-2 pl-6 text-white text-sm ring-2 ring-gray-600 ">
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-1" /> All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
        <p className="link hidden md:inline-flex">Electronics</p>
        <p className="link hidden md:inline-flex">Developers</p>
        <p className="link hidden md:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Amazon Alexa Skills</p>
        <p className="link hidden lg:inline-flex">Health Care & Fitness</p>
      </div>
    </header>
  );
}

export default Header;
