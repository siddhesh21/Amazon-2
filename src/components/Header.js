import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <div>
      {/** Top NAV */}
      <div className="flex items-center p-1 flex-grow py-2">
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
      </div>

      {/**Bottom NAV */}
      <div></div>
    </div>
  );
}

export default Header;
