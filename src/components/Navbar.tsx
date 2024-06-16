import { Link } from "gatsby";
import React from "react";

export default function Navbar() {
    return (
        <nav>
            <h1>Faisons vivre Marseille !</h1>
            <Link to="/">Les candidats</Link>
            <Link to="/">Nos propositions</Link>
            <Link to="/">Nous suivre</Link>
        </nav>
    )
}