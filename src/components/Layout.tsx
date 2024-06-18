import React from "react";
import Footer from "./Footer";
import Introduction from "./Introduction";
import Candidates from "./Candidates";
import Propositions from "./Propositions";
import Contacts from "./Contacts";
import Navbar from "./Navbar";

export default function LayoutLayout() {
    return (
        <div>
            <Navbar />
            <Introduction />
            <div className="flex-column md:px-24 px-12">
                <Candidates />
                <Propositions />
                <Contacts />
            </div>
            <Footer />
        </div>
    )
}