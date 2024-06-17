import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export default function Introduction() {
    return (
        <div className="flex-column">
            <StaticImage src="../images/banner.png" alt="intro banner" />
            <div className="flex-column px-32 py-20 text-center text-xl">
                <span>
                    Madame, Monsieur,
                </span><br />
                <span>
                    Chers habitants des 7ème et 8ème arrondissements de Marseille,
                </span><br />
                <span>
                    Pour beaucoup d'entre vous, vous nous connaissez déjà. Nous venons des 7e et 8e arrondissements.
                </span><br />
                <span>
                    Nous y avons grandi. Avec nos familles, proches et amis, nous y vivons.
                </span><br />
                <span>
                    Aujourd'hui, nous nous sentons le devoir de représenter ce territoire et ses convictions.
                </span><br />
                <span>
                    La France a été jetée aux bras des extrêmes par une action politique centralisée, qui néglige les territoires et leur diversité. C'est parce que Marseille est un exemple des territoires délaissés de la République que ses forces vives se réunissent pour construire une alternative crédible, parce que locale.
                </span><br />
                <span>
                    Ensemble, faisons vivre Marseille.
                </span>
            </div>
        </div>
    )
}