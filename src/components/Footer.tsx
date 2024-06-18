import { Link } from "gatsby";
import React from "react";

export default function Footer() {
    return (
        <div className="flex p-24 text-xl bg-my-orange justify-center">
            <span className="font-futura-book text-center text-white text-2xl">
                Copyright Faisons vivre Marseille ! ©
                <br/>Tous droits réservés - <Link to="/politique-confidentialite" className="underline">Mentions légales</Link>
            </span>
        </div>
    )
}