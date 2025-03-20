import axios from "axios";
import { User } from "../types/User";

type Props = {
  searchQuery: string;
  handleOpen: (mode: "edit", userData: User) => void;
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
};

export const TableList: React.FC<Props> = ({
  searchQuery,
  handleOpen,
  users,
  setUsers,
}) => {
  const handleDelete = async (id: number) => {
    const confirmDelete = window.confirm("Are you sure about this?");
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:3000/api/users/${id}`);
        setUsers((prev: User[]) => prev.filter((user: User) => user.id !== id));
      } catch (error) {
        console.error(error);
      }
    }
  };
  const visibleUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.job.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <>
      {users && (
        <div className="overflow-x-auto mt-10">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Job</th>
                <th>Rate</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {visibleUsers.map((user) => (
                <tr key={user.id} className="hover:bg-base-300">
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>

                  <td>{user.job}</td>
                  <td>{user.rate}</td>
                  <td>{user.isactive ? "Active" : "Inactive"}</td>
                  <td className="gap-4 flex">
                    <button
                      className="btn btn-secondary rounded-full w-20"
                      onClick={() => handleOpen("edit", user)}
                    >
                      Update
                    </button>
                    <button
                      className="btn btn-accent rounded-full w-20"
                      onClick={() =>
                        user.id !== undefined && handleDelete(user.id)
                      }
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};
