import axios from "axios";
import { useEffect, useState } from "react";

// Components
import ActorsList from "./components/ActorsList";
import ActressesList from "./components/ActressesList";

// URL
const baseUrl = "https://lanciweb.github.io";
const actorsEndpoint = "/demo/api/actors/";
const actressesEndpoint = "/demo/api/actresses/";

export default function App() {
  const [actors, setActors] = useState([]);
  const [actresses, setActresses] = useState([]);

  useEffect(() => {
    axios.get(baseUrl + actressesEndpoint).then((res) => setActresses(res.data));
    axios.get(baseUrl + actorsEndpoint).then((res) => setActors(res.data));
  }, []);

  return (
    <>
      <div className="container my-4">
        <h1 className="text-center mb-4">Actresses & Actors</h1>
        {/* Actresses */}
        <section>
          <h2 className="mt-4 ms-2">Actresses List</h2>
          <ActressesList actresses={actresses} />
        </section>
        {/* Actors */}
        <section>
          <h2 className="mt-4 ms-2">Actors List</h2>
          <ActorsList actors={actors} />
        </section>
      </div>
    </>
  );
}
