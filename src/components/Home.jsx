import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      <h2>
        Bienvenidos a Restaurante La Comarca, donde cada plato cuenta una
        historia
      </h2>
      <p>
        En <strong>Restaurante La Comarca</strong>, creemos que la buena comida
        une a las personas. Nuestra cocina fusiona ingredientes frescos, recetas
        auténticas y un toque de creatividad para ofrecerte una experiencia
        gastronómica inolvidable.
      </p>
      <p>
        Ya sea que vengas a disfrutar de un almuerzo relajado, una cena especial
        o una velada entre amigos, te esperamos con el mejor sabor y un servicio
        que te hará sentir como en casa.
      </p>
      <blockquote>
        🍷{" "}
        <em>Comida que enamora. Servicio que cuida. Ambiente que inspira.</em>
      </blockquote>

      <div>
        <p>
          📍 Visítanos en{" "}
          <strong>501 Buckland Road, Matamata 3472, Nueva Zelanda</strong>
        </p>
        <p>
          📞 Reserva tu mesa: <strong>+64 21 123 4567</strong>
        </p>
        <Link to="/reserve" className="reserve-button">
          Reservar Ahora
        </Link>
      </div>
    </div>
  );
};

export default Home;
