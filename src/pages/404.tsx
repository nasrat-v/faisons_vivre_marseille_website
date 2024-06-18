import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function NotFound() {
  return (
    <div className="flex-column">
      <Navbar noLinks={true} />
      <div className="flex md:px-24 px-12 text-center h-screen items-center justify-center">
        <span className="text-my-orange text-4xl">
          Page introuvable
        </span>
      </div>
      <Footer />
    </div>
  )
}