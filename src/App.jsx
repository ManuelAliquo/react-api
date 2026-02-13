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
      <div className="container mt-5">
        <div className="row">
          <div className="col-2">
            <div className="card">
              <img className="card-img-top" src="..." alt="..." />
              <div className="card-body">
                <h5 className="card-title">Nome</h5>
                <div className="birth">Anno di nascita</div>
                <div className="nationality">Nazionalità</div>
                <p className="bio mb-0">Biografia</p>
                <div className="awards">Riconoscimenti</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
