import React, { useEffect, useState } from 'react';
import './MagicQuote.css';
import {http} from '../../app/http';


const MagicQuote = () => {
  const [quotes, setQuotes] = useState([]);
  
  useEffect(() => {
    const getQuotes = async () => {
      const response = await http.get('/quotes');
      // return response.data;
      setQuotes(response.data.quotes);
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
                  {item.quote}
                </div>
              ))
            }
          </div>
        </section>
    </div>
  );
}

export default MagicQuote;
