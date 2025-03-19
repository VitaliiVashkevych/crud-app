type Props = { 
  onOpen: () => void;
}

export default function NavBar({ onOpen }: Props) {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">Clients</a>
      </div>
      <div className="navbar-center">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-48 md:w-auto"
          />
        </div>
      </div>
      <div className="navbar-end">
        <button className="btn" onClick={onOpen}>Add user</button>
      </div>
    </div>
  );
}
