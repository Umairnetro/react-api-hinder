import "./App.css";

function App() {
  return (
    <>
      <section>
        <p>This is my greeting: {process.env.REACT_APP_GREETING || "No Founded"}</p>
      </section>
    </>
  );
}

export default App;
