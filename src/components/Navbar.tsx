import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import scrollTo from "gatsby-plugin-smoothscroll";
import React from "react";
import BurgerMenu from "./BurgerMenu";


export default function Navbar() {
    return (
        <header>
            <nav>
                <div className="flex py-12 px-24 justify-between bg-my-orange text-white items-center">
                    <div className="flex text-balance pr-12">
                        <Link to="/">
                            <h1 className="font-futura-bold sm:text-3xl md:text-4xl text-2xl">Faisons vivre Marseille !</h1>
                        </Link>
                    </div>
                    <div className="md:flex justify-evenly gap-12 items-end text-2xl hidden">
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
                    <div className="md:hidden">
                        <BurgerMenu />
                    </div>
                </div>
            </nav>
            
        </header>
    )
}