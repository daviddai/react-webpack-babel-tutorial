import React from "react";
import "./style/main.scss";

export default function Application() {
    const greeting: string = "Hello World from React Webpack Babel Tutorial";

    const showGreeting = () => {
        alert(greeting);
    };

    return (
        <>
            <div className="font-weight-bolder">
                {greeting}
            </div>
            <div>
                <button className="btn-primary" onClick={() => showGreeting()}>Click to see greeting message</button>
            </div>
        </>
    );
}
