import { useState, useEffect } from "react";
import useFetch from "../useFetch";

const Country = ({ getCountry }) => {
  const { data } = useFetch("reference", " ", "countries", "en-US");
  const [contries, setContries] = useState();
  const [selectedCountries, setSelectedCountries] = useState("");

  useEffect(() => {
    setContries(data?.Countries);
  }, [data]);

  useEffect(() => {
    getCountry(selectedCountries);
  }, [selectedCountries]);
  return (
    <>
      <select
        value={selectedCountries}
        onChange={(e) => setSelectedCountries(e.target.value)}
      >
        {contries?.map((country, index) => {
          return (
            <option value={country.Code} key={index}>
              {country.Name}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default Country;
