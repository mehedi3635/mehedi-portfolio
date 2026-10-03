import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <section
        id="home"
        style={{ height: "100vh" }}
        className="d-flex align-items-center justify-content-center"
      >
        <h1>Mehedi Hasan Portfolio</h1>
      </section>
    </>
  );
}

export default App;