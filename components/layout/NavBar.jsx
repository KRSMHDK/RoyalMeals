import React from 'react';
import Link from 'next/link';
function NavBar() {
  return (
    <nav>
      <ul className="items-center h-24 font-semibold border-t-4 border-b-4 py-7">
        <Link href="/" passHref>
          <a>
            <li className="inline mr-5 align-middle ">HOME</li>{' '}
          </a>
        </Link>

        <li className="inline mr-5 align-middle">CATEGORIES</li>
        <li className="inline mr-5 align-middle">RECIPES</li>
        <li className="inline mr-5 align-middle ">CONTACT</li>
        <li className="inline align-middle">ABOUT</li>
      </ul>
    </nav>
  );
}

export default NavBar;
