import { useState } from "react";
import "./App.css";
import ModalForm from "./components/ModalForm";
import NavBar from "./components/Navbar";
import TableList from "./components/TableList";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"add" | "edit">("add");
  const handleOpen = (mode: "add" | "edit"): void => {
    console.log(mode);
    
    setIsOpen(true);
    setModalMode(mode);
  };
  const handleSubmit = () => {
    if (modalMode === "add") {
      console.log("add");
    } else {
      console.log("edited");
    }
  };
  return (
    <>
      <NavBar onOpen={() => handleOpen("add")} />
      <TableList onOpen={() => handleOpen("edit")} />
      <ModalForm
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSubmit={handleSubmit}
        mode={modalMode}
      />
    </>
  );
}

export default App;
