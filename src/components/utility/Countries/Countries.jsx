import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import { Input } from "../../ui/input";
import SearchBox from "../SearchBox/SearchBox";

const Countries = () => {
  const [countryValue, setCountryValue] = useState("");
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        const countryNames = data.map((country) =>
          country.name.common.toLowerCase()
        );
        setCountries(countryNames);
      });
  }, []);

  const HandleChange = (e) => {
    setCountryValue(e.target.value);

    const countriesValue = e.target.value.split(",");

    const filteredCountryValue = countriesValue.filter((country) => {
      return filteredCountry(country);
    });

    setFilteredCountries(filteredCountryValue);
  };

  const filteredCountry = (country) => {
    return countries.includes(country.trim().toLowerCase());
  };

  return (
    <>
      <h5>Find Country</h5>
      <div className="todo-list-form mb-3">
        <Input
          type="text"
          placeholder="Country"
          value={countryValue}
          onChange={HandleChange}
          className="w-64"
        />
        {/* <SearchBox handleChange={HandleChange} /> */}
      </div>

      <div className="flex gap-3">
        {filteredCountries && filteredCountries.length > 0 ? (
          filteredCountries.map((country, index) => {
            return <CountryCard key={index} name={country} />;
          })
        ) : (
          <p className="mt-3">No countries found.</p>
        )}
      </div>
    </>
  );
};

export default Countries;
