import "./App.css";
import querystring from "querystring";
import { useState, useEffect } from "react";
import Currency from "./components/Currency";
import Country from "./components/Country";
import Places from "./components/Places";
function App() {
  const [currency, setCurrency] = useState("");
  const [country, setCountry] = useState("");

  const getCurrency = (currency_) => {
    setCurrency(currency_);
  };

  const getCountry = (country_) => {
    setCountry(country_);
  };

  return (
    <div className="App">
      <Currency getCurrency={getCurrency} />
      <Country getCountry={getCountry} />
      <Places currency={currency} country={country} />
    </div>
  );
}

export default App;
