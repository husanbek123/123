

import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav>
        <h1>{props.title}</h1>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about-us">About Us</Link>
            </li>
        </ul>
    </nav>
  )
}
