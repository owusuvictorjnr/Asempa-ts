import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header>
      <nav>
        <div className="navbar justify-between bg-base-300">
          <Link href="/" className="btn btn-ghost text-lg">
            <h1 className="capitalize">asempa brand</h1>
          </Link>

          <ul className="flex">
            <li>
              <Link
                href="/cart"
                className="btn btn-ghost rounded-btn capitalize"
              >
                <h4 className="capitalize">cart</h4>
              </Link>
            </li>

            <li>
              <Link
                href="/signin"
                className="btn btn-ghost rounded-btn capitalize"
              >
                <h4 className="capitalize">signin</h4>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
