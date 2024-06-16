import React from "react";
import Navbar from "./navbar";
import Footer from "./Footer";
import Introduction from "./Introduction";
import Candidates from "./Candidates";
import Propositions from "./Propositions";
import Contacts from "./Contacts";

export default function LayoutLayout() {
    return (
        <div>
            <Navbar />
            <Introduction />
            <Candidates />
            <Propositions />
            <Contacts />
            <Footer />
        </div>
    )
}