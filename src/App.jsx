import "./App.css";

function App() {
  const api = process.env.REACT_APP_API_URL || "Hello, There is some problem";
  const ViteApi =
    process.env.Vite_APP_API_URL || "I am Vite Checker, There is some problem";

  return (
    <>
      <section>
        <p>This is my greeting: `${api}`</p>
        <p>This is my Vite greeting: {`${ViteApi}`}</p>
      </section>
    </>
  );
}

export default App;
