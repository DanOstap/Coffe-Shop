import React from "react";
import "./MainStyles.css"
function  Main() {
    return (
        <div className="Main-overlay">
            <div className="Main-menu">
                <h1>Coffee 21</h1>
                <button>Home</button>
                <button>Store</button>
                <button>Log in</button>
                <button>Sing Up</button>
            </div>
        </div>
    );
}

export default Main;