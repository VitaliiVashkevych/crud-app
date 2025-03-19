import { useState } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  mode: "add" | "edit";
};

export default function ModalForm({ isOpen, onClose, onSubmit, mode }: Props) {
  const [rate, setRate] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [job, setJob] = useState("");
  const [status, setStatus] = useState(false);

  const handleStatusChange = (e) => {
    setStatus(e.target.value === "Active");
  };

  const handleSubmit = (e) => {
    console.log(e.target);
    
    e.preventDefault();
    onClose();
  }
  return (
    <dialog id="my_modal_3" className="modal" open={isOpen} >
      <div className="modal-box">
        <h3 className="font-bold text-lg py-4">
          {mode === "edit" ? "Edit User" : "New User"}
        </h3>
        <form method="dialog" onSubmit={onClose} className="gap-4 flex flex-col" onSubmitCapture={handleSubmit}>
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

            <select className="select" defaultChecked>
              <option>Select status</option>
              <option value={"Inactive"}>Inactive</option>
              <option value={"Active"}>Active</option>
            </select>
          </div>

          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <button className="btn btn-success">
            {mode === "edit" ? "Save changes" : "Add User"}
          </button>
        </form>
      </div>
    </dialog>
  );
}
