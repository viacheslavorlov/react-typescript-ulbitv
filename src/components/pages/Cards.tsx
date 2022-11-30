import React from 'react';
import Card, {CardVariant} from "../Card";

const Cards = () => {
    return (
        <>
            <Card onClick={(num) => console.log(num)} width={'200px'} height={'200px'} variant={CardVariant.outlined}>
                <button>Click!</button>
                <div>Content</div>
            </Card>
            <Card onClick={(num) => console.log(num)} width={'200px'} height={'200px'} variant={CardVariant.primary}>
                <button>Click!</button>
                <div>Content</div>
            </Card>
        </>
    );
};

export default Cards;
