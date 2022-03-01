import { useState } from 'react'
import QuoteBox from './QuoteBox'
import Quote from '../utils/quotes.json'

const Handler = () => {

    const quoteRandom = Math.floor(Math.random() * Quote.length)
    const colors = ['red', 'blue', 'green', 'violette']
    const colorRandom = Math.floor(Math.random() * colors.length)

    const [quote, setQuote] = useState(Quote[quoteRandom])
    const [color, setColor] = useState(colors[colorRandom])

    const changeQuote = () =>{
        const quoteRandom = Math.floor(Math.random() * Quote.length)
        setQuote(Quote[quoteRandom])
        setColor(colors[colorRandom])
    }

    return (
        <div className={`handler ${color}`}>
            <QuoteBox quote={quote} changeQuote={() => changeQuote()}/>
        </div>
    )
}

export default Handler; 