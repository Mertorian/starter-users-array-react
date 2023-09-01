import { useState } from "react";
import "./App.css";
import { Card } from "./components/Card";
import { users } from "./data/users";

function App() {
  const [filter, setFilter] = useState("All");

  function handleButtonClick(filter) {
    setFilter(filter);
  }

  let filteredUsers = [...users];

  if (filter === "Women") {
    filteredUsers = users.filter((user) => user.gender === "female");
  } else if (filter === "Men") {
    filteredUsers = users.filter((user) => user.gender === "male");
  } else if (filter === "By Age") {
    filteredUsers = [...users].sort((a, b) => a.dob.age - b.dob.age);
  } else if (filter === "By Name") {
    filteredUsers = [...users].sort((a, b) =>
      a.name.first.localeCompare(b.name.first)
    );
  } else if (filter === "By Coordinates") {
    filteredUsers = [...users].sort((a, b) => {
      const coordsA = a.location.coordinates;
      const coordsB = b.location.coordinates;

      if (coordsA[0] !== coordsB[0]) {
        return coordsA[0] - coordsB[0];
      } else {
        return coordsA[1] - coordsB[1];
      }
    });
  }

  return (
    <>
      <header>
        <h1>Array function magic</h1>
        <section className="filter-box">
          <h3>Filter by:</h3>
          <button
            onClick={() => handleButtonClick("All")}
            style={filter === "All" ? { backgroundColor: "black" } : undefined}
          >
            All
          </button>
          <button
            onClick={() => handleButtonClick("Women")}
            style={
              filter === "Women" ? { backgroundColor: "black" } : undefined
            }
          >
            Women
          </button>
          <button
            onClick={() => handleButtonClick("Men")}
            style={filter === "Men" ? { backgroundColor: "black" } : undefined}
          >
            Men
          </button>
          <button
            onClick={() => handleButtonClick("By Name")}
            style={
              filter === "By Name" ? { backgroundColor: "black" } : undefined
            }
          >
            By Name
          </button>
          <button
            onClick={() => handleButtonClick("By Age")}
            style={
              filter === "By Age" ? { backgroundColor: "black" } : undefined
            }
          >
            By Age
          </button>
          <button
            onClick={() => handleButtonClick("By Coordinates")}
            style={
              filter === "By Coordinates"
                ? { backgroundColor: "black" }
                : undefined
            }
          >
            By Coordinates
          </button>
        </section>
      </header>
      <main>
        <section className="card-list">
          {filteredUsers.map((user) => {
            return <Card key={user.email} user={user} />;
          })}
        </section>
      </main>
    </>
  );
}

export default App;
