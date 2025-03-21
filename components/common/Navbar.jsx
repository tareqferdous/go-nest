import Image from "next/image";
import Link from "next/link";
import { FaBars, FaUserCircle } from "react-icons/fa";
import { FaLanguage } from "react-icons/fa6";
import SearchMenu from "./SearchMenu";
import UserMenu from "./UserMenu";

const Navbar = () => {
  return (
    <nav class="grid grid-cols-2 md:flex justify-between items-center py-3 bg-white border-b mb-6 md:gap-8 px-4 md:px-8 lg:px-20">
      <div class="flex items-center">
        <Link href="/">
          <Image
            width={100}
            height={100}
            src="/assets/logo.svg"
            alt="Hotel Logo"
            class="h-8 w-auto"
          />
        </Link>
      </div>

      <SearchMenu />

      <div class="flex items-center space-x-4 relative justify-end">
        <button class="text-2xl">
          <FaLanguage />
        </button>
        <button class="bg-white border border-zinc-300 text-zinc-800 px-4 py-2 rounded-full hover:shadow-md flex gap-3 items-center justify-center">
          <FaBars />
          <span class="bg-zinc-600 w-6 h-6 rounded-full flex items-center justify-center text-xs text-white">
            <FaUserCircle />
          </span>
        </button>

        <UserMenu />
      </div>
    </nav>
  );
};

export default Navbar;
