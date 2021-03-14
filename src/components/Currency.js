import { useState, useEffect } from "react";
import useFetch from "../useFetch";

const Currency = ({ getCurrency }) => {
  const { data } = useFetch("reference", "", "currencies");
  const [currencies, setCurrencies] = useState();
  const [selectedCurrency, setSelectedCurrency] = useState("");

  useEffect(() => {
    setCurrencies(data?.Currencies);
  }, [data]);

  useEffect(() => {
    getCurrency(selectedCurrency);
  }, [selectedCurrency]);

  return (
    <>
      {/* {console.log(selectedCurrency)} */}
      <h1>{selectedCurrency}</h1>
      <select
        value={selectedCurrency}
        onChange={(e) => setSelectedCurrency(e.target.value)}
      >
        {currencies?.map((curr, index) => {
          return (
            <option value={curr.Code} key={index}>
              {curr.Symbol}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default Currency;
