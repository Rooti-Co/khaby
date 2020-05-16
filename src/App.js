import React from "react";
import Catalog from "./components/catalog"
function App() {
    return <>
        <Catalog type="all" />
        <Catalog type="main" />
        <Catalog type="shirts" />
        <Catalog type="dress" />
    </>;
}

export default App;
