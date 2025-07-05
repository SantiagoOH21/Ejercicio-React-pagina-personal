import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Reserve = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    guests: 1,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const existingReservations =
      JSON.parse(localStorage.getItem("reservationData")) || [];
    const updatedReservations = [...existingReservations, formData];
    localStorage.setItem(
      "reservationData",
      JSON.stringify(updatedReservations)
    );
    clearState();
    navigate("/other");
  };

  const initialState = {
    name: "",
    date: "",
    time: "",
    guests: 1,
  };

  const clearState = () => {
    setFormData({ ...initialState });
  };

  return (
    <>
      <h2>Reserve</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="name">Nombre:</label>
        <input
          id="name"
          type="text"
          placeholder="Nombre"
          value={formData.name}
          onChange={handleInputChange}
          name="name"
          required
        />
        <label htmlFor="date">Fecha:</label>
        <input
          id="date"
          type="date"
          min={new Date().toISOString().split("T")[0]}
          value={formData.date}
          onChange={handleInputChange}
          name="date"
          required
        />
        <label htmlFor="time">Hora:</label>
        <input
          id="time"
          type="time"
          value={formData.time}
          onChange={handleInputChange}
          name="time"
          required
        />
        <label htmlFor="guests">Personas:</label>
        <input
          id="guests"
          type="number"
          min="1"
          max="10"
          value={formData.guests}
          onChange={handleInputChange}
          name="guests"
          required
        />
        <button type="submit">Reservar</button>
        <p>Si su reserva es de más de 10 personas, contáctenos por teléfono</p>
      </form>
    </>
  );
};

export default Reserve;
