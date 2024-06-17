import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export default function Contacts() {
    return (
        <div className="flex-column pb-24">
            <div className="flex py-24">
                <h2 className="font-[1000] text-4xl text-my-orange">Nous suivre</h2>
            </div>
            <div className="flex justify-between gap-32">
                <a href="https://www.instagram.com/faisonsvivremarseille?igsh=MWY3ZmJ3ZW41cGYwNg==" target="_blank">
                    <StaticImage 
                        src="../images/instagram.png" 
                        alt="instagram"
                    />
                </a>
                <a href="https://www.linkedin.com/in/hugo-roche-poggi-a89178a2" target="_blank">
                    <StaticImage 
                        src="../images/linkedin.png" 
                        alt="linkedin" 
                    />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61560958506711" target="_blank">
                    <StaticImage 
                        src="../images/facebook.png" 
                        alt="facebook" 
                    />
                </a>
                <a href="https://twitter.com/rochepoggi" target="_blank">
                    <StaticImage 
                        src="../images/twitter.png" 
                        alt="twitter" 
                    />
                </a>
                <a href="https://chat.whatsapp.com/IYQVKJmixryGsHIEFZZWcD" target="_blank">
                    <StaticImage 
                        src="../images/whatsapp.png" 
                        alt="whatsapp" 
                    />
                </a>
            </div>
        </div>
    )
}