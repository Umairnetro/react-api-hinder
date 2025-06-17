import "./App.css";

function App() {
  const ViteApi =
    import.meta.env.VITE_API_URL || "I am Vite Checker, There is some problem";

  return (
    <>
      <section>
        <p>This is my Vite greeting: {`${ViteApi}`}</p>
      </section>
    </>
  );
}

export default App;
