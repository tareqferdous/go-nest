import Link from "next/link";

const UserMenu = () => {
  return (
    <div className="max-w-48 w-48 bg-white shadow-sm border rounded-md absolute right-0 top-full max-h-fit mt-2 z-50 hidden lg:hidden">
      <ul className="">
        <Link href="/login" className="w-full">
          <li className="px-3 py-2 text-sm text-zinc-700 transition-all hover:bg-zinc-50 hover:text-zinc-800 hover:pl-4">
            Login
          </li>
        </Link>

        <Link href="/register" className="w-full">
          <li className="px-3 py-2 text-sm text-zinc-700 transition-all hover:bg-zinc-50 hover:text-zinc-800 hover:pl-4">
            Signup
          </li>
        </Link>

        <Link href="#" className="w-full">
          <li className="px-3 py-2 text-sm text-zinc-700 transition-all hover:bg-zinc-50 hover:text-zinc-800 hover:pl-4">
            Help
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default UserMenu;
