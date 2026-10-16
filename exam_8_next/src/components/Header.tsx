import Link from 'next/link';

function Header() {
  return (
    <div className="py-4 px-6 bg-white flex flex-row justify-between items-center">
      <div>
        <h3 className="text-2xl">My Blog</h3>
      </div>
      <nav className="flex flex-row items-center gap-6">
        <Link
          className="text-md py-1 border-b-2 border-transparent transition-colors duration-300 hover:border-blue-500"
          href={'/quotes'}
        >
          Quotes
        </Link>
        <Link
          className="text-md py-1 border-b-2 border-transparent transition-colors duration-300 hover:border-blue-500"
          href={'/add-quote'}
        >
          Add Quote
        </Link>
      </nav>
    </div>
  );
}

export default Header;
