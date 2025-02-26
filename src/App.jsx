import React, { useState } from 'react'

const App = () => {

  const[amount, setAmount] = useState(0);
  const[fromCurrency, setCurrency] = useState("USD");
  const[toCurrency, setToCurrency] = useState("PKR");

  return <section>
    <div className="currency-converter">
      <div className='currency-div'>
        <h1>Currency Converter</h1>
        <hr />
        <div>
          <label >
            Amount:
            <input type="text" value={amount} onChange={(e)=>setAmount(e.target.value)}/>
          </label>
        </div>
        <section className="currency-selector">
          <label>
            From:
            <select>
              {
                ["USD", "EUR", "PKR", "GBP", "AUD"].map((currency)=>{
                  return <option key={currency} value={currency}>{currency}</option>
                })
              }
            </select>
          </label>

          <label>
            To:
            <select>
              {
                ["EUR", "USD", "AUD", "GBP", "PKR"].map((currency)=>{
                  return <option key={currency} value={currency}>{currency}</option>
                })
              }
            </select>
          </label>
        </section>

        <button disabled={isLoading || amount <= 0}>{isLoading? "converting..." : "Convert"}</button>
      </div>
    </div>
  </section>
}

export default App