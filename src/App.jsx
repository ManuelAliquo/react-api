import axios from "axios";

export default function App() {
  const baseUrl = "https://lanciweb.github.io";
  axios.get(baseUrl + "/demo/api/actors/").then((res) => {
    console.log(res.data);
  });
  return (
    <>
      <h1>Hello</h1>
    </>
  );
}
