import axios from "axios";
import { useEffect, useState } from "react";

const baseUrl = "https://lanciweb.github.io";
const actorsUrl = "/demo/api/actors/";

export default function App() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    axios.get(baseUrl + actorsUrl).then((res) => {
      setActors(res.data);
    });
  }, []);

  return (
    <>
      <div className="container my-4">
        <h1 className="text-center mb-4">Actors List</h1>
        <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 g-2">
          {actors.map((actor) => {
            const { image, name, birth_year, nationality, biography, awards } = actor;
            return (
              <div key={actor.id} className="col">
                <div className="card">
                  <img className="card-img-top" src={image} alt={name} />
                  <div className="card-body">
                    <h5 className="card-title mb-0">{name}</h5>
                    <div className="birth-nationality border-bottom mb-1">
                      {birth_year} - {nationality}
                    </div>
                    <p className="bio mb-1">{biography}</p>
                    <ul className="awards list-unstyled border-top mb-0">
                      Awards:{" "}
                      {awards.map((award, index) => {
                        return (
                          <li key={index}>
                            <strong>{award}</strong>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
