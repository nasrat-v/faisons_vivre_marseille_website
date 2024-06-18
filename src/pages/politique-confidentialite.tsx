import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
    return (
        <div>
            <Navbar noLinks={true}/>
            <div className="flex-column md:px-24 px-12 py-24">
                <h2 className="font-futura-bold text-my-orange text-4xl">
                    Politique de confidentialité
                </h2>
                <h3 className="font-futura-bold text-my-orange text-2xl pt-8">
                    Éditeur:
                </h3>
                <span className="font-futura-book text-black text-xl">
                    Ce site est édité par Hugo Roche Poggi
                </span>
                <h3 className="font-futura-bold text-my-orange text-2xl pt-8">
                    Directeur de la publication:
                </h3>
                <span className="font-futura-book text-black text-xl">
                    Ce site est édité par Hugo Roche Poggi
                </span>
                <h3 className="font-futura-bold text-my-orange text-2xl pt-8">
                    Hébergement:
                </h3>
                <span className="font-futura-book text-black text-xl">
                Le site Web est hebergé par Netlify, Inc. situé au 512 2nd Street, Suite 200 San Francisco, CA 94107. 
                <br/>Adresse Postale: PO Box, PMB 87587, San Francisco, CA 94120-7775, Attn : Netlify Legal dept
                <br/>Adresse électronique (E-mail): support@netlify.com
                </span>
                <h3 className="font-futura-bold text-my-orange text-2xl pt-8">
                    Licence:
                </h3>
                <span className="font-futura-book text-black text-xl">
                    Sauf mention contraire, tous les textes de ce site sont protégés par la licence Creative Commons Attribution - 
                    <br />Pas d'Utilisation Commerciale - 
                    <br />Partage dans les Mêmes Conditions 4.0 International, ce qui signifie que vous êtes libres de reproduire, diffuser et communiquer cette création au public dans les conditions de la licence.
                </span>
                <h3 className="font-futura-bold text-my-orange text-2xl pt-8">
                    Données personnelles:
                </h3>
                <span className="font-futura-book text-black text-xl">
                    Les informations que vous nous communiquez sont uniquement utilisées dans le cadre de l'envoi de la newsletter ou pour vous permettre de laisser des commentaires sur ce blog.
                    <br />En application des articles 38 et suivants de la loi du 6 janvier 1978, vous bénéficiez des droits d'accès, de rectification, de suppression et d'opposition aux informations vous concernant. 
                    <br />Vous pouvez exercer ces droits en nous écrivant à l'adresse contact@faisonsvivremarseille.com
                </span>
            </div>
            <Footer />
        </div>
    )
}