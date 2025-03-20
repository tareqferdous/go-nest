import Image from "next/image";
import Link from "next/link";
import { FaBars, FaUserCircle } from "react-icons/fa";
import { FaLanguage } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";

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

      <div class="row-start-2 col-span-2 border-0 md:border flex shadow-sm hover:shadow-md transition-all md:rounded-full items-center px-2">
        <div class="grid md:grid-cols-3 lg:grid-cols-7 gap-4 divide-x py-2 md:px-2 flex-grow">
          <input
            type="text"
            placeholder="Where to?"
            class="px-3 bg-transparent focus:outline-none lg:col-span-3 placeholder:text-sm"
          />
        </div>

        <button class="bg-primary text-white font-bold w-9 h-9 rounded-full grid place-items-center text-sm text-center transition-all hover:brightness-90 shrink-0">
          <FiSearch />
        </button>
      </div>

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

        <div class="max-w-48 w-48 bg-white shadow-sm border rounded-md absolute right-0 top-full max-h-fit mt-2 z-50 hidden lg:block">
          <ul class="">
            <Link href="/login" class="w-full">
              <li class="px-3 py-2 text-sm text-zinc-700 transition-all hover:bg-zinc-50 hover:text-zinc-800 hover:pl-4">
                Login
              </li>
            </Link>

            <Link href="/register" class="w-full">
              <li class="px-3 py-2 text-sm text-zinc-700 transition-all hover:bg-zinc-50 hover:text-zinc-800 hover:pl-4">
                Signup
              </li>
            </Link>

            <Link href="#" class="w-full">
              <li class="px-3 py-2 text-sm text-zinc-700 transition-all hover:bg-zinc-50 hover:text-zinc-800 hover:pl-4">
                Help
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
