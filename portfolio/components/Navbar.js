import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 mt-0 w-full">
      <div className=" mx-auto flex justify-between items-center">
        <Link href="/">
          <span className="text-xl font-bold">My Portfolio</span>
        </Link>
        <div className="space-x-4">
          <Link href="/contact">
            <span className="hover:text-gray-400 font-semibold">Contact</span>
          </Link>
          <Link href="/">
            <span className="hover:text-gray-400 font-semibold">Portfolio</span>
          </Link>
          <Link href="/admin">
            <span className="hover:text-gray-400 font-semibold">Admin</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
