import React from "react";
import "./style/main.scss";

export default function App() {
    const greeting: string = "Hello World from React Webpack Babel Tutorial";
    return (
        <>
            <div class="font-weight-bolder">
                {greeting}
            </div>
        </>
    );
}
