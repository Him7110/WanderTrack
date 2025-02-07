// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"

<<<<<<< HEAD
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Button from "./Button";
import BackButton from "./BackButton";

import styles from "./Form.module.css";
import { useUrlPosition } from "../hooks/useUrlPosition";
import Message from "./Message";
import Spinner from "./Spinner";
import { useCities } from "../contexts/CitiesContext";
import { useNavigate } from "react-router-dom";
=======
import { useState } from "react";

import styles from "./Form.module.css";
>>>>>>> 04b9134b05de2fbf126ba17a93fb22e1afedd3ff

export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

<<<<<<< HEAD
const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

function Form() {
  const [lat, lng] = useUrlPosition();
  const { createCity, isLoading } = useCities();
  const navigate = useNavigate();

  const [isLoadingGeocoding, setIsLoadingGeocoding] = useState(false);
=======
function Form() {
>>>>>>> 04b9134b05de2fbf126ba17a93fb22e1afedd3ff
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
<<<<<<< HEAD
  const [emoji, setEmoji] = useState("");
  const [geocodingError, setGeocodingError] = useState("");

  useEffect(
    function () {
      if (!lat && !lng) return;

      async function fetchCityData() {
        try {
          setIsLoadingGeocoding(true);
          setGeocodingError("");

          const res = await fetch(
            `${BASE_URL}?latitude=${lat}&longitude=${lng}`
          );
          const data = await res.json();
          console.log(data);

          if (!data.countryCode)
            throw new Error(
              "That doesn't seem to be a city. Click somewhere else 😉"
            );

          setCityName(data.city || data.locality || "");
          setCountry(data.countryName);
          setEmoji(convertToEmoji(data.countryCode));
        } catch (err) {
          setGeocodingError(err.message);
        } finally {
          setIsLoadingGeocoding(false);
        }
      }
      fetchCityData();
    },
    [lat, lng]
  );

  async function handleSubmit(e) {
    e.preventDefault();

    if (!cityName || !date) return;

    const newCity = {
      cityName,
      country,
      emoji,
      date,
      notes,
      position: { lat, lng },
    };

    await createCity(newCity);
    navigate("/app/cities");
  }

  if (isLoadingGeocoding) return <Spinner />;

  if (!lat && !lng)
    return <Message message="Start by clicking somewhere on the map" />;

  if (geocodingError) return <Message message={geocodingError} />;

  return (
    <form
      className={`${styles.form} ${isLoading ? styles.loading : ""}`}
      onSubmit={handleSubmit}
    >
=======

  return (
    <form className={styles.form}>
>>>>>>> 04b9134b05de2fbf126ba17a93fb22e1afedd3ff
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
<<<<<<< HEAD
        <span className={styles.flag}>{emoji}</span>
=======
        {/* <span className={styles.flag}>{emoji}</span> */}
>>>>>>> 04b9134b05de2fbf126ba17a93fb22e1afedd3ff
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>
<<<<<<< HEAD

        <DatePicker
          id="date"
          onChange={(date) => setDate(date)}
          selected={date}
          dateFormat="dd/MM/yyyy"
=======
        <input
          id="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
>>>>>>> 04b9134b05de2fbf126ba17a93fb22e1afedd3ff
        />
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className={styles.buttons}>
<<<<<<< HEAD
        <Button type="primary">Add</Button>
        <BackButton />
=======
        <button>Add</button>
        <button>&larr; Back</button>
>>>>>>> 04b9134b05de2fbf126ba17a93fb22e1afedd3ff
      </div>
    </form>
  );
}

export default Form;
