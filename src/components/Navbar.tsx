import { Link } from "gatsby";
import scrollTo from "gatsby-plugin-smoothscroll";
import React from "react";

export default function Navbar() {
    return (
        <nav>
            <div className="flex py-12 px-24 justify-between bg-my-orange text-white">
                <div className="flex">
                    <Link to="/">
                        <h1 className="font-futura-bold text-4xl">Faisons vivre Marseille !</h1>
                    </Link>
                </div>
                <div className="flex justify-evenly gap-12 items-end text-2xl">
                    <button onClick={() => scrollTo("#candidates")}>
                        <h2 className="font-futura-bold italic">Les candidats</h2>
                    </button>
                    <button onClick={() => scrollTo("#propositions")}>
                        <h2 className="font-futura-bold italic">Nos propositions</h2>
                    </button>
                    <button onClick={() => scrollTo("#contacts")}>
                        <h2 className="font-futura-bold italic">Nous suivre</h2>
                    </button>
                </div>
            </div>
        </nav>
    )
}