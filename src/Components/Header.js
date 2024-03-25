import React from "react";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";

function Header() {
    return(
        <header className="border-b font-bold p-3 flex justify-between items-center">
            <span className="font-bold hover:bg-gray-200 rounded p-2">
                <Link to="/">Movies</Link>
            </span>

            <div className="hover:bg-gray-200 rounded p-2">
                <Navigation/>
            </div>
        </header>
    )
}

export default Header