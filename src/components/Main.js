import React from "react";
import "./MainStyles.css"
function  Main() {
    return (
        <div className="Main-overlay">
            <div className="Main-menu">
                <div className="Menu-Logo">
                    <h1>Cafe Shop 21</h1>
                </div>
                <div className="Menu-buttons">
                    <button>Home</button>
                    <button>Store</button>
                    <button>Log in</button>
                    <button>Sing Up</button>
                </div>
                <div className="Menu-LogIn-SingUp">
                    <button> Sign In</button>
                    <button> Sign Up</button>
                </div>
            </div>
        </div>
    );
}

export default Main;