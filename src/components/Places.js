import { useState, useEffect } from "react";
import useFetch from "../useFetch";

const Places = ({ country, currency }) => {
  const [places, setPlaces] = useState();
  const [query_, setQuery_] = useState("");
  const [selectedPlaces, setSelectedPlaces] = useState([]);
  const [placeData, setplaceData] = useState({
    query: "",
    country: "",
    currency: "",
  });
  const { data } = useFetch(
    // placeData.query,
    // placeData.country,
    // placeData.currency,
    "autosuggest",
    query_ ? placeData.query : "India",
    country ? placeData.country : "IN",
    currency ? placeData.currency : "INR",
    "en-US"
  );

  useEffect(() => {
    setPlaces(data?.Places);
  }, [country, currency]);

  const handleSubmit = () => {
    setplaceData({
      query: query_,
      country: country,
      currency: currency,
    });

    console.log(placeData);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search for airports here"
        required={true}
        value={query_}
        onChange={(e) => setQuery_(e.target.value)}
      />

      {/* <select
        value={selectedPlaces}
        onChange={(e) => setSelectedPlaces(e.target.value)}
      >
        {places?.map((place, index) => {
          return (
            <option value={place.placeId} key={index}>
              {place.PlaceName}
            </option>
          );
        })}
      </select> */}
      <button onClick={handleSubmit}>Search Places</button>
    </>
  );
};

export default Places;
