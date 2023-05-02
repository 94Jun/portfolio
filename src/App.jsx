import "./App.css";
import { Routes, Route } from "react-router";
import About from "./components/about/About";
import Container from "./components/UI/Container";
import Header from "./components/header/Header";
import Projects from "./components/projects/Projects";

const App = () => {
  return (
    <div className="App">
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Container>
    </div>
  );
};

export default App;
