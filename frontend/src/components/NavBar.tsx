type Props = {
  handleOpen: () => void;
  setSearchQuery: (searchQuery: string) => void;
};

export const NavBar: React.FC<Props> = ({ handleOpen, setSearchQuery }) => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">Users</a>
      </div>
      <div className="navbar-center">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-48 md:w-auto"
            onChange={(event) => setSearchQuery(event.target.value)}
          />
        </div>
      </div>
      <div className="navbar-end">
        <button className="btn" onClick={handleOpen}>
          Add user
        </button>
      </div>
    </div>
  );
};
