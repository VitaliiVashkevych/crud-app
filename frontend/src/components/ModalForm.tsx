import { useEffect, useState } from "react";
import { User } from "../types/User";

type Props = {
  modalMode: "add" | "edit";
  isModalOpen: boolean;
  closeModal: () => void;
  onSubmit: (userData: User) => void;
  userData: User | undefined;
};

export const ModalForm: React.FC<Props> = ({
  modalMode,
  isModalOpen,
  closeModal,
  onSubmit,
  userData,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [job, setJob] = useState("");
  const [rate, setRate] = useState("");
  const [isactive, setIsactive] = useState(false);

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setIsactive(e.target.value === "Active");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const userData = { name, email, job, rate, isactive };
      await onSubmit(userData);
      closeModal();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (modalMode === "edit" && userData) {
      setName(userData.name);
      setEmail(userData.email);
      setJob(userData.job);
      setRate(userData.rate);
      setIsactive(userData.isactive);
    } else {
      setName("");
      setEmail("");
      setJob("");
      setRate("");
      setIsactive(false);
    }
  }, [modalMode, userData]);

  return (
    <dialog id="my_modal_3" className="modal" open={isModalOpen}>
      <div className="modal-box">
        <h3 className="font-bold text-lg py-4">
          {modalMode === "edit" ? "Edit User" : "New User"}
        </h3>
        <form
          method="dialog"
          className="gap-4 flex flex-col"
          onSubmit={handleSubmit}
        >
          <label className="input input-bordered flex items-center gap-2 w-full">
            Name
            <input
              type="text"
              className="grow"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2 w-full">
            Email
            <input
              type="email"
              className="grow"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2 w-full">
            Job
            <input
              type="text"
              className="grow"
              value={job}
              onChange={(e) => setJob(e.target.value)}
            />
          </label>

          <div className="flex mb-4 gap-4 justify-between">
            <label className="input input-bordered flex items-center gap-2 w-full">
              Rate
              <input
                type="number"
                className="grow"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
              />
            </label>

            <select
              className="select"
              value={isactive ? "Active" : "Inactive"}
              onChange={handleStatusChange}
            >
              <option>Inactive</option>
              <option>Active</option>
            </select>
          </div>

          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={closeModal}
          >
            ✕
          </button>
          <button className="btn btn-success">
            {modalMode === "edit" ? "Save changes" : "Add User"}
          </button>
        </form>
      </div>
    </dialog>
  );
};
