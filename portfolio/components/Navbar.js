import Link from "next/link";

function Navbar() {
  return (
    <nav className="text-black bg-white text-lg p-4 mt-0 w-full">
      <div className=" mx-auto flex justify-between items-center">
        <Link href="/">
          <span className="text-xl font-extrabold font-jetbrains">
            {"<Sofia />"}
          </span>
        </Link>
        <div className="space-x-4">
          <Link href="/contact">
            <span className="hover:text-gray-400 font-bold">Contact</span>
          </Link>
          <Link href="/">
            <span className="hover:text-gray-400 font-bold">Portfolio</span>
          </Link>
          <Link href="/admin">
            <span className="hover:text-gray-400 font-bold">Admin</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
