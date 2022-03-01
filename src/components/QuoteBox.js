import React from 'react';

const QuoteBox = ({quote, changeQuote}) => {
    return (
        <div className="card_quote">  
            <p>{quote.quote}</p>
            <p>{quote.author}</p>
            <button onClick={() =>changeQuote()}>cambiar</button>
        </div>
    );
};

export default QuoteBox;