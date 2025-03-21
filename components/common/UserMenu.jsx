import Link from "next/link";

const UserMenu = () => {
  return (
    <div class="max-w-48 w-48 bg-white shadow-sm border rounded-md absolute right-0 top-full max-h-fit mt-2 z-50 hidden lg:hidden">
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
  );
};

export default UserMenu;
