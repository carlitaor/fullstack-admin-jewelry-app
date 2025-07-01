import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + "/ping")
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch((err) => {
        console.error("Error fetching /ping:", err);
        setError("No se pudo conectar con la API");
      });
  }, []);

  return (
    <>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!message && !error && <p>Cargando...</p>}
      {message && <h2>API dice: {message}</h2>}
    </>
  );
}
export default App;
