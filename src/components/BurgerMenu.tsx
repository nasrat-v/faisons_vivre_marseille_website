import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { useState } from "react";
import scrollTo from "gatsby-plugin-smoothscroll";
import { Link } from "gatsby";

export default function BurgerMenu() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex items-center justify-between py-8">
      <nav>
        <section className="flex lg:hidden">
          <div
            className="space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <StaticImage
                src="../images/burger-menu.svg"
                alt="burger-menu"
                width={40}
                layout="fixed"
              />
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <StaticImage
                src="../images/cross.svg"
                alt="cross"
                width={20}
                layout="fixed"
              />
            </div>
            <Link to="/" onClick={() => setIsNavOpen(false)}>
              <StaticImage
                src="../images/logo-white.png"
                alt="cross"
                width={200}
                layout="fixed"
              />
            </Link>
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              <li className="text-2xl my-8">
                <button onClick={() => {
                    setIsNavOpen(false);
                    scrollTo("#candidates"); 
                }}>
                    <h2 className="font-futura-bold italic">Les candidats</h2>
                </button>
              </li>
              <li className="text-2xl my-8">
                <button onClick={() => {
                    setIsNavOpen(false);
                    scrollTo("#propositions");
                }}>
                    <h2 className="font-futura-bold italic">Nos propositions</h2>
                </button>
              </li>
              <li className="text-2xl my-8">
                <button onClick={() => {
                    setIsNavOpen(false);
                    scrollTo("#contacts");
                }}>
                    <h2 className="font-futura-bold italic">Nous suivre</h2>
                </button>
              </li>
            </ul>
          </div>
        </section>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: #eF5104;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}
