import { useEffect, useState } from "react";
import "./App.css";
import { Table, Pagination } from "react-bootstrap";

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchUsers = async (value) => {
    setIsLoading(true);
    setTimeout(async () => {
      const response = await fetch(`https://reqres.in/api/users?page=${value}`);
      const data = await response.json();
      setUsers(data.data);
      setIsLoading(false);
    }, 500);
  };
  return (
    <div className="App">
      <img
        src="https://dl.dropbox.com/s/mpmu0gjtxv2x3fs/Webp.net-resizeimage%20%281%29.jpg?raw=1"
        className="backroundimage"
      />
      <div className="navbar">
        <h1>aDMe</h1>
        <button onClick={() => fetchUsers(1)}>Get User</button>
      </div>
      {isLoading ? (
        <div className="loading">
          <div className="yellow"></div>
          <div className="red"></div>
          <div className="blue"></div>
          <div className="violet"></div>
        </div>
      ) : (
        <div>
          <div className="cards">
            {users?.map((item) => {
              return (
                <div class="card">
                  <div class="card-img">
                    <img src={item.avatar} />
                  </div>
                  <div class="desc">
                    <h6 class="primary-text">
                      {item.first_name} {item.last_name}
                    </h6>
                    <h6 class="secondary-text">{item.email}</h6>
                  </div>
                </div>
              );
            })}
          </div>
          {users.length > 0 ? (
            <div className="page">
              <Pagination>
                <Pagination.Item onClick={() => fetchUsers(1)}>
                  {1}
                </Pagination.Item>
                <Pagination.Item onClick={() => fetchUsers(2)}>
                  {2}
                </Pagination.Item>
              </Pagination>
            </div>
          ) : (
            " "
          )}
        </div>
      )}
    </div>
  );
}

export default App;
