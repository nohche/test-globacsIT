import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useRef } from "react";
import { fetchUsers } from "./redux/userSlice";
import UserDetails from "./components/UserDetails";
import Card from "./components/Card";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const [inputValue, setInputValue] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const modalRef = useRef(null);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleCardClick = (user) => {
    setSelectedUser(user);
  };

  const handleBackgroundClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setSelectedUser(null);
    }
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div onClick={handleBackgroundClick}>
      <div className="formInput">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <main>
        {filteredUsers.map((user, ind) => (
          <Card key={ind} user={user} handleCardClick={handleCardClick} />
        ))}
      </main>
      {selectedUser && (
        <div ref={modalRef}>
          <UserDetails user={selectedUser} closeUserDetails={() => setSelectedUser(null)} />
        </div>
      )}
    </div>
  );
}

export default App;
