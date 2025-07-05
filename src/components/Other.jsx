import { useNavigate } from "react-router-dom";

const Other = () => {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/");
  }, 5000);

  return (
    <>
      <h2>Su petición fue enviada correctamente.</h2>
      <p>Ahora será redirigido a la página principal.</p>
      <p>Gracias por contactar con Restaurante La Comarca 😊</p>
    </>
  );
};

export default Other;
