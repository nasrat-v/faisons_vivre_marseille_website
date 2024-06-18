import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export default function Propositions() {
    return (
        <div className="flex-column pb-24 pt-8" id="propositions">
            <div className="flex md:pb-24 pb-16">
                <h2 className="font-futura-bold text-5xl text-my-orange">Nos propositions</h2>
            </div>
            <div className="pt-23">
                <StaticImage 
                    src="../images/program-1.png" 
                    alt="program-1"
                    imgStyle={{
                        border: "solid",
                        borderColor: "#eF5104"
                    }}
                />
            </div>
            <div className="pt-12">
                <StaticImage 
                    src="../images/program-2.png" 
                    alt="program-2"
                    imgStyle={{
                        border: "solid",
                        borderColor: "#eF5104"
                    }}
                />
            </div>
        </div>
    )
}