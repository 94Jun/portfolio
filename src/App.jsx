import "./App.css";
import { Routes, Route } from "react-router";
import About from "./components/about/About";
import Container from "./components/ui/Container";
import Header from "./components/header/Header";
import Projects from "./components/projects/Projects";
import { useSelector } from "react-redux";
import Modal from "./components/ui/Modal";

const App = () => {
  const activeModal = useSelector((state) => state.modal.activeModal);
  console.log(activeModal)
  return (
    <div className="App">
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Container>
      {activeModal && <Modal />}
    </div>
  );
};

export default App;
