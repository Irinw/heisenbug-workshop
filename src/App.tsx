import React from 'react';
import CardContainer from "./components/card-container/card-container";
import Baner from "./components/baner/baner";
import TopBar from "./components/top-bar/top-bar";

function App() {
    return (
        <div>
            <TopBar/>
            <Baner/>
            <CardContainer/>
        </div>
    );
}

export default App;