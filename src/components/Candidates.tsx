import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export default function Candidates() {
    return (
        <div className="flex-column" id="candidates">
            <div className="flex pb-24">
                <h2 className="font-[1000] text-4xl text-my-orange">Les candidats</h2>
            </div>
            <div className="flex-column">
                <div className="flex gap-12 justify-start">
                    <StaticImage 
                        src="../images/hugo.png" 
                        alt="hugo" 
                        width={1600}
                        height={1600}
                        imgStyle={{
                            border: "solid",
                            borderColor: "#eF5104"
                        }}
                    />
                    <div className="flex-column pt-4">
                        <div className="pb-8">
                            <span className="font-[1000] text-5xl text-my-orange">HUGO ROCHE-POGGI</span>
                        </div>
                        <span className="text-xl">
                            Hugo Roche Poggi est né dans le 8eme arrondissement et vit dans le 7eme. 
                            Après ses études, il travaille à l'Assemblée nationale, au cabinet du ministre de la Culture, et dans le milieu de l'art. 
                            En pleine crise du Covid, il sent le besoin de s'engager pour sa ville. Il crée alors une association culturelle pour soutenir les artistes marseillais et leur public : Pour Que Marseille Vive !
                            <br />Au moment de la dissolution, il décide de s'engager pour sa circonscription. 
                        </span>
                    </div>
                </div>
                <div className="flex gap-12 pt-28 justify-end">
                    <div className="flex-column pt-4">
                        <div className="pb-8">
                            <h3 className="font-[1000] text-5xl text-my-orange">MANON PÉREZ-LEGRÉ</h3>
                        </div>
                        <span className="text-xl">
                            Manon Pérez Legré est originaire du 7eme arrondissement. 
                            Après des études à Kedge Marseille, Manon est aujourd'hui directrice du Collège citoyen de France, une association dédiée au renouvellement de la vie politique, qui forme à l'engagement des citoyens issus de tous horizons.
                            <br />Après avoir poussé pendant plusieurs années des acteurs de terrain à s'engager en politique, les bouleversements des dernières semaines l'ont menée, elle aussi, à prendre ce chemin. 
                        </span>
                    </div>
                    <StaticImage 
                        src="../images/manon.png" 
                        alt="hugo" 
                        width={1600}
                        height={1600}
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