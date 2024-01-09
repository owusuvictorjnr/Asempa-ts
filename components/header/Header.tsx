import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header>
      <nav>
        <div className="navbar justify-between bg-base-300">
          <Link href="/" className="btn btn-ghost text-lg capitalize">
            asempa brand
          </Link>

          <ul className="flex">
            <li>
              <Link
                href="/cart"
                className="btn btn-ghost rounded-btn capitalize"
              >
                cart
              </Link>
            </li>

            <li>
              <Link
                href="/signin"
                className="btn btn-ghost rounded-btn capitalize"
              >
                signin
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
