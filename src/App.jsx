import "./App.css";

function App() {
  const api = process.env.REACT_APP_API_URL || "Hello, There is some problem";

  return (
    <>
      <section>
        <p>This is my greeting: {api}</p>
      </section>
    </>
  );
}

export default App;
