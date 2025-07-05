import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [btnDisabled, setBtnDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const validateInputs = (newData) => {
    if (!newData.name || newData.name.length < 3) {
      setErrorMessage("El nombre debe tener al menos 3 caracteres");
      setBtnDisabled(true);
      return false;
    }

    if (!newData.email || !/\S+@\S+\.\S+/.test(newData.email)) {
      setErrorMessage("Correo electrónico no válido");
      setBtnDisabled(true);
      return false;
    }

    setErrorMessage("");
    setBtnDisabled(false);
    return true;
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    const updatedData = {
      ...data,
      [name]: value,
    };

    setData(updatedData);
    validateInputs(updatedData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validateInputs(data);
    if (!isValid) return;
    console.log(`sending data… ${data.name} ${data.email}`);

    const existingContacts =
      JSON.parse(localStorage.getItem("contactData")) || [];
    const updatedContacts = [...existingContacts, data];
    localStorage.setItem("contactData", JSON.stringify(updatedContacts));
    clearState();
    navigate("/other");
  };

  const initialState = {
    name: "",
    email: "",
    message: "",
  };

  const clearState = () => {
    setData({ ...initialState });
    setBtnDisabled(true);
    setErrorMessage("");
  };

  return (
    <>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="name">Nombre:</label>
        <input
          id="name"
          type="text"
          placeholder="Nombre"
          value={data.name}
          onChange={handleInputChange}
          name="name"
        />
        <label htmlFor="email">Correo electrónico:</label>
        <input
          id="email"
          type="email"
          placeholder="Correo electrónico"
          value={data.email}
          onChange={handleInputChange}
          name="email"
        />
        <label htmlFor="message">Mensaje:</label>
        <textarea
          id="message"
          placeholder="Mensaje"
          value={data.message}
          onChange={handleInputChange}
          name="message"
        />
        <button type="submit" disabled={btnDisabled}>
          Enviar
        </button>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      </form>
    </>
  );
};

export default Contact;
