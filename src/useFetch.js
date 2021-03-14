import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (hostVal, query, ...params_) => {
  //   const [status, setStatus] = useState("idle");
  //   const [query, setQuery] = useState("");
  const [data, setData] = useState();
  //   const [place, setPlace] = useState([]);
  //   const [currencies, setCurrencies] = useState([]);
  useEffect(() => {
    // setStatus("Fetching...");
    if (!params_) return;
    async function getData() {
      if (hostVal === "autosuggest") {
        // import axios from "axios";

        const options = {
          method: "GET",
          url: `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/${[
            ...params_,
          ].join("/")}`,
          params: { query: `${query}` },
          headers: {
            "x-rapidapi-key":
              "707f16a228msh04600d6feab809dp1e6f60jsn44c9bb8259f0",
            "x-rapidapi-host":
              "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
          },
        };

        axios
          .request(options)
          .then(function (response) {
            setData(response.data);
          })
          .catch(function (error) {
            console.error(error);
          });
      } else {
        const options = {
          method: "GET",
          url: `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/${hostVal}/v1.0/${[
            ...params_,
          ].join("/")}`,
          params: { query: `${query}` },
          headers: {
            "x-rapidapi-key":
              "707f16a228msh04600d6feab809dp1e6f60jsn44c9bb8259f0",
            "x-rapidapi-host":
              "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
          },
        };

        axios
          .request(options)
          .then(function (response) {
            setData(response.data);
            //   console.log(response.data);
          })
          .catch(function (error) {
            console.error(error);
          });
      }
    }

    getData();
  }, []);
  return { data };
};

export default useFetch;
