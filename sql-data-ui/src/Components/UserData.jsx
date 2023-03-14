import { useState } from "react";
import React from "react";
import LastUserAdded from "./LastUserAdded";

function UserData({ data }) {
  const [userData, setUserData] = useState([]);
  const [contractNumber, setContractNumber] = useState();

  const inputValue = (e) => {
    const searchValue = e.target.value;
    const initialState = [];
    setContractNumber(Number(searchValue));
    if (Number(searchValue) === 0) {
      setContractNumber(initialState);
    }
  };

  const findUser = (e) => {
    e.preventDefault();
    const targetUser = data.filter((user) => user.contract === contractNumber);
    setUserData([...userData, targetUser]);
    console.log(userData.length);
  };

  const checkboxValuesSpeed60 = () => {
    let lineSpeed = document.querySelector("#line-speed-60").checked;
    const target = data.filter((user) => user.lineSpeed === "60");
    if (lineSpeed === true) {
      setUserData(...userData, target);
    } else if (lineSpeed === false) {
      if (userData.length === 0) {
        return;
      } else if (userData.length !== 0) {
        setUserData(userData.splice(target.length, target.length))
      }
    }
  };

  const checkValuesSpeed100 = () => {
    let lineSpeed2 = document.querySelector("#line-speed-100").checked;
    const target = data.filter((user) => user.lineSpeed === "100");
    if (lineSpeed2 === true) {
      setUserData(...userData, target);
    } else if (lineSpeed2 === false){
      if (userData.length === 0) {
        return;
      } else if (userData.length !== 0) {
        setUserData(userData.splice(target.length, target.length))
      }
    }
  };

  const checkValuesSpeed300 = () => {
    let lineSpeed3 = document.querySelector("#line-speed-300").checked;
    const target = data.filter((user) => user.lineSpeed === "300");
    if (lineSpeed3 === true) {
      setUserData(...userData, target);
    } else if (lineSpeed3 === false){
      if (userData.length === 0) {
        return;
      } else if (userData.length !== 0) {
        setUserData(userData.splice(target.length, target.length))
      }
    }
  };

  const filterActiveUsers = () => {
    const activeUserValue = document.querySelector('#active').checked;
    const inactiveUserValue = document.querySelector('#inactive').checked;
    const filteredActive = data.filter((user) => user.status === true);
    if (activeUserValue === true){
      setUserData(...userData, filteredActive)
    }
    console.log(filteredActive)
    console.log(inactiveUserValue)
  }
  console.log(userData);
  console.log(data);
  // const findUser = () => {
  //   const searchData = inputValue();
  //   console.log(searchData)
  // };

  return (
    <div className="data-container">
      <div className="search-field">
        <label htmlFor="search">Surasti Vartotoją</label>
        <input
          type="number"
          name="search"
          onChange={(e) => inputValue(e)}
          placeholder="Vartotojo sutarties numeris"
        />
        <button
          type="submit"
          className="find-user"
          onClick={(e) => findUser(e)}
        >
          Ieškoti
        </button>
      </div>
      <div className="info-container">
        <LastUserAdded />
      </div>
      <div className="filter">
        <h3>Filtruoti</h3>
        <div className="filter-box-speed">
          <label htmlFor="60Mb">
            60Mb
            <input
              type="checkbox"
              name="60Mb"
              id="line-speed-60"
              onChange={checkboxValuesSpeed60}
              value="60"
            />
          </label>
          <label htmlFor="100Mb">
            100Mb
            <input
              type="checkbox"
              name="100Mb"
              id="line-speed-100"
              onClick={checkValuesSpeed100}
              value="100"
            />
          </label>
          <label htmlFor="300Mb">
            300Mb
            <input
              type="checkbox"
              name="300Mb"
              id="line-speed-300"
              onClick={checkValuesSpeed300}
              value="300"
            />
          </label>
        </div>
        <div className="filter-box-state">
          <label htmlFor="state-active">
            Aktyvus
            <input
              type="checkbox"
              id="active"
              name="state-active"
              onClick={filterActiveUsers}
            />
          </label>

          <label htmlFor="state-inactive">
            Ne aktyvus
            <input
              type="checkbox"
              id="inactive"
              name="state-inactive"
              onClick={filterActiveUsers}
            />
          </label>
        </div>
      </div>
      <table className="user-table">
        <tbody>
          <tr>
            <th>Vardas</th>
            <th>Pavarde</th>
            <th>Sutarties numeris</th>
            <th>Būsena</th>
          </tr>
          {userData.length !== 0
            ? userData.map((user) => (
                <tr className="user-row" key={user.id}>
                  <td>{user.userName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.contract}</td>
                </tr>
              ))
            : data.map((user) => (
                <tr className="user-row" key={user.id}>
                  <td>{user.userName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.contract}</td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserData;
