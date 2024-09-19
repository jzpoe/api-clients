async function fetchUser() {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  return data.data;
}

async function HomePage() {
  const users = await fetchUser();

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">HomePage</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <li
            key={user.id}
            className="bg-slate-400 p-6 rounded-xl shadow-lg text-black"
          >
            <h5 className="font-bold text-lg mb-2">
              <label className="text-gray-700">Email:</label> {user.email}
            </h5>
            <p>
              <label className="font-semibold">ID:</label> {user.id}
            </p>
            <p>
              <label className="font-semibold">Primer nombre:</label> {user.first_name}
            </p>
            <p>
              <label className="font-semibold">Segundo nombre:</label> {user.last_name}
            </p>
            <img src={user.avatar} className="rounded-full"/>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;