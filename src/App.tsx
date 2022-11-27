import React from 'react';
import Card, {CardVariant} from "./components/Card";


function App() {
    return (
        <div className="App">
            <Card onClick={(num) => console.log(num)} width={'200px'} height={'200px'} variant={CardVariant.outlined}>
                <button>Click!</button>
                <div>Content</div>
            </Card>
        </div>
    );
}

export default App;
