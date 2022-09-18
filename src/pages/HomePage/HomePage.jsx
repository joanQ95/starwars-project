import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCharacters } from "../../redux/actions";
import loadingImage from "../../assets/img/sablelaser.gif";
import "./HomePage.css";

function HomePage() {
  const dispatch = useDispatch();

  const allCharacters = useSelector((state) => state.people);
  console.log(allCharacters)
  useEffect(() => {
    dispatch(getCharacters());
    // eslint-disable-next-line
  }, []);
  return (
    <div className="container__homepage">
      <h2>
        Aqui conoceras a todos los personajes de Star Wars de las peliculas y
        series.
      </h2>
      <p>¿Qué personaje desea ver?</p>
      {allCharacters.length === 0 ? (
        <div>
          <p>Cargando...</p>
          <img src={loadingImage} />
        </div>
      ) : (
        allCharacters?.map((e, i) => {
          return (
            <>
              <Link key={i} to={`/recipes/${i}`}>
                
                  <h3>{e.name}</h3>
                  {/* <img
                    className={style.img}
                    src={image}
                    alt="img not found"
                    width="250em"
                    height="200em"
                  />
                  <h5>Score: {score}</h5>
                  <h5>
                    Dietas:{" "}
                    {diets.join(", ").charAt(0).toUpperCase() +
                      diets.join(", ").slice(1)}
                  </h5> */}
                
              </Link>
            </>
          );
        })
      )}
    </div>
  );
}

export default HomePage;
