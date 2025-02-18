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
                    <button>About us</button>
                    <button>Contact us</button>
                </div>
                <div className="Menu-LogIn-SingUp">
                    <button> Sign In</button>
                    <button> Sign Up</button>
                </div>
            </div>
            <div className="Main-label">
                <p>We’ve got your morning covered with</p>
                <h1>Coffee</h1>
                <p>It is best to start your day with a cup of coffee. Discover the
                    best flavours coffee you will ever have. We provide the best
                    for our customers.</p>
                <button className="buttons-style">Order now</button>
            </div>
        </div>
    );
}

export default Main;