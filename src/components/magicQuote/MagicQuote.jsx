import React, { useEffect, useState } from 'react';
import './MagicQuote.css';
import {http} from '../../app/http';


const MagicQuote = () => {
  const [quotes, setQuotes] = useState([]);
  
  useEffect(() => {
    const getQuotes = async () => {
      const response = await http.get('/quotes');
      // return response.data;
      setQuotes(response.data.quotes);           // https://dummyjson.com
      // setQuotes(response.data.data.quoteText);   // https://quote-garden.onrender.com/api/v3
      // setQuotes(response.data.results.content);     // https://api.quotable.io

      // console.log("response", response.data.quotes);
    };

    // setQuotes(getQuotes());
    getQuotes();

    // console.log("quotes", quotes);
  }, []);

  // console.log("quotes", quotes);


  return (
    <div className='quotes__container'>
      <section className='quotes'>
          <h2>Quotes section</h2>
          <div className='quotes__list'>
            {quotes.length > 0 &&
              quotes.map((item, index) => (
                <div key={index} className='quote__field'>
                  <blockquote className='quote__field__text'>
                    {item.quote}
                  </blockquote>
                  <cite className='quote__field__author'>
                    {item.author}
                  </cite>
                </div>
              ))
            }
          </div>
        </section>
    </div>
  );
}

export default MagicQuote;
