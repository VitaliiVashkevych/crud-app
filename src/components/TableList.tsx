type Props = {
  onOpen: () => void;
}

export default function TableList({ onOpen }: Props) {
  const users = [
    {
      id: 1,
      name: "John1",
      email: "john.doe1@gmail.com",
      job: "developer1",
      rate: "100",
      isActive: true,
    },
    {
      id: 2,
      name: "John2",
      email: "john.doe2@gmail.com",
      job: "developer2",
      rate: "100",
      isActive: true,
    },
    {
      id: 3,
      name: "John3",
      email: "john.doe3@gmail.com",
      job: "developer3",
      rate: "100",
      isActive: false,
    },
  ];

  return (
    <>
      <div className="overflow-x-auto mt-10">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Job</th>
              <th>Rate</th>
            </tr>
          </thead>
          <tbody className="hover:bg-base-300">
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>

                <td>{user.job}</td>
                <td>{user.rate}</td>
                <td className="gap-4 flex">
                  <button
                    className={`btn rounded-full w-20 ${
                      user.isActive ? "btn-active" : "btn-outline-primary"
                    }`}
                  >
                    {user.isActive ? "Active" : "Inactive"}
                  </button>
                  <button className="btn btn-secondary rounded-full w-20" onClick={onOpen}>
                    Update
                  </button>
                  <button className="btn btn-accent rounded-full w-20">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
