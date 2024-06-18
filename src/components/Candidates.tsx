import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export default function Candidates() {
    return (
        <div className="flex-column pb-24 pt-8" id="candidates">
            <div className="flex md:pb-24 pb-16">
                <h2 className="font-futura-bold text-5xl text-my-orange">Les candidats</h2>
            </div>
            <div className="flex-column">
                <div className="flex gap-12 justify-start md:flex-nowrap flex-wrap-reverse">
                    <StaticImage 
                        src="../images/hugo.png" 
                        alt="hugo" 
                        width={1200}
                        height={1200}
                        imgStyle={{
                            border: "solid",
                            borderColor: "#eF5104"
                        }}
                    />
                    <div className="flex-column pt-4">
                        <div className="pb-8">
                            <h3 className="font-futura-bold italic text-6xl text-my-orange">HUGO ROCHE POGGI</h3>
                        </div>
                        <span className="font-futura-book text-2xl">
                            Hugo Roche Poggi est né dans le 8eme arrondissement et vit dans le 7eme. 
                            Après ses études, il travaille à l'Assemblée nationale, au cabinet du ministre de la Culture, et dans le milieu de l'art. 
                            En pleine crise du Covid, il sent le besoin de s'engager pour sa ville. Il crée alors une association culturelle pour soutenir les artistes marseillais et leur public : Pour Que Marseille Vive !
                            <br />Au moment de la dissolution, il décide de s'engager pour sa circonscription. 
                        </span>
                    </div>
                </div>
                <div className="flex gap-12 pt-24 justify-end md:flex-nowrap flex-wrap">
                    <div className="flex-column pt-4">
                        <div className="pb-8">
                            <h3 className="font-futura-bold italic text-6xl text-my-orange">MANON PÉREZ LEGRÉ</h3>
                        </div>
                        <span className="font-futura-book text-2xl">
                            Manon Pérez Legré est originaire du 7eme arrondissement. 
                            Après des études à Kedge Marseille, Manon est aujourd'hui directrice du Collège citoyen de France, une association dédiée au renouvellement de la vie politique, qui forme à l'engagement des citoyens issus de tous horizons.
                            <br />Après avoir poussé pendant plusieurs années des acteurs de terrain à s'engager en politique, les bouleversements des dernières semaines l'ont menée, elle aussi, à prendre ce chemin. 
                        </span>
                    </div>
                    <StaticImage 
                        src="../images/manon.png" 
                        alt="hugo" 
                        width={1200}
                        height={1200}
                        imgStyle={{
                            border: "solid",
                            borderColor: "#eF5104"
                        }}
                    />
                </div> 
            </div>
        </div>
    )
}