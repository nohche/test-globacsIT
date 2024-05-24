import React from "react";
import "./userDetails.css";

const UserDetails = ({ user, closeUserDetails }) => {
  const handleUserDetailsClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="userDetailsContainer" onClick={closeUserDetails}>
      <div className="userDetailsBody" onClick={handleUserDetailsClick}>
        <div className="title">
          <h1>{user.name}</h1>
          <button onClick={closeUserDetails}>
            <img src="icon.svg" alt="закрыть" />
          </button>
        </div>
        <div className="info">
          <div>
            <span className="label">Телефон: </span>
            <span className="value">{user.phone}</span>
          </div>
          <div>
            <span className="label">Почта: </span>
            <span className="value">{user.email}</span>
          </div>
          <div>
            <span className="label">Дата приема: </span>
            <span className="value">{user.hire_date}</span>
          </div>
          <div>
            <span className="label">Должность: </span>
            <span className="value">{user.position_name}</span>
          </div>
          <div>
            <span className="label">Подразделение: </span>
            <span className="value">{user.department}</span>
          </div>
        </div>
        <div className="additionalInfo">
          <h3>Дополнительная информация:</h3>
          <span>
            Разработчики используют текст в качестве заполнителя макета страницы.
            Разработчики используют текст в качестве заполнителя макета страницы.
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
