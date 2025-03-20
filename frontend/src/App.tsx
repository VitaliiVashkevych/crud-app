import { useEffect, useState } from "react";
import "./App.css";
import { ModalForm } from "./components/ModalForm";
import { NavBar } from "./components/NavBar";
import { TableList } from "./components/TableList";
import { User } from "./types/User";
import axios from "axios";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"add" | "edit">("add");
  const [searchQuery, setSearchQuery] = useState("");
  const [userData, setUserData] = useState<User | undefined>();

  const handleOpen = (mode: "add" | "edit", user?: User): void => {
    setIsModalOpen(true);
    setModalMode(mode);
    setUserData(user);
  };

  const handleSubmit = async (newUserData: User) => {
    if (modalMode === "add") {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/users",
          newUserData
        );
        setUserData(response.data);
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        const response = await axios.put(
          `http://localhost:3000/api/users/${userData!.id}`,
          newUserData
        );
        setUsers((prev) =>
          prev.map((user) => (user.id === userData!.id ? response.data : user))
        );
      } catch (error) {
        console.error(error);
      }
    }
  };
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/users");
        setUsers(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <>
      <NavBar
        handleOpen={() => handleOpen("add")}
        setSearchQuery={setSearchQuery}
      />
      <TableList
        searchQuery={searchQuery}
        handleOpen={handleOpen}
        users={users}
        setUsers={setUsers}
      />
      <ModalForm
        modalMode={modalMode}
        isModalOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
        userData={userData}
      />
    </>
  );
}

export default App;
