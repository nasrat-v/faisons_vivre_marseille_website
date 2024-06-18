import scrollTo from "gatsby-plugin-smoothscroll";
import React from "react";

export default function Navbar() {
    return (
        <nav>
            <div className="flex py-12 px-24 justify-between bg-my-orange text-white">
                <div className="flex">
                    <h1 className="font-[1000] text-4xl">Faisons vivre Marseille !</h1>
                </div>
                <div className="flex justify-evenly gap-12 items-end font-bold italic text-2xl">
                    <button onClick={() => scrollTo("#candidates")}>Les candidats</button>
                    <button onClick={() => scrollTo("#propositions")}>Nos propositions</button>
                    <button onClick={() => scrollTo("#contacts")}>Nous suivre</button>
                </div>
            </div>
        </nav>
    )
}