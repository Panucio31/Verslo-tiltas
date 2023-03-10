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

  console.log(contractNumber);

  const findUser = (e) => {
    e.preventDefault();
    const targetUser = data.find((user) => user.contract === contractNumber);
    setUserData([...userData, targetUser]);
    console.log(userData.length);
  };

  const checkboxValuesSpeed60 = () => {
    let lineSpeed = document.querySelector("#line-speed-60").checked;
      if (lineSpeed === true){
        const target = data.find((user) => user.lineSpeed === '60');
        setUserData([...userData, target]);
        
      }
      setUserData(data)
      
    console.log(lineSpeed);
  };
  

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
        <div className="filter-box-speed">
          <input
            type="checkbox"
            name="60Mb"
            id="line-speed-60"
            onChange={checkboxValuesSpeed60}
            value='60'
          />
          <label htmlFor="60Mb">60Mb</label>
          <input
            type="checkbox"
            name="greitis"
            id="line-speed-100"
            onClick={console.log(100)}
            value='100'
          />
          <label htmlFor="100Mb">100Mb</label>
          <input
            type="checkbox"
            name="greitis"
            id="line-speed-300"
            onClick={console.log(300)}
            value='300'
          />
          <label htmlFor="300Mb">300Mb</label>
        </div>
        {/* <div className="filter-box">
          <label htmlFor="state">
            Būsena
            <input
              type="checkbox"
              id="state"
              value="Būsena"
              onClick={checkboxValues}
            />
          </label>
        </div>
        <div className="filter-box">
          <label htmlFor="date">
            Aktyvavimo Data
            <input
              type="date"
              name="date"
              id="date"
              onChange={checkboxValues}
            />
          </label>
        </div> */}
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
