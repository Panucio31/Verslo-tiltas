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

  const checkboxValues = () => {
    let lineNr = document.querySelector('#line-nr').checked;
    let state = document.querySelector('#state').checked;
    let date = document.querySelector('#date').value;
    
    
  }

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
        <div className="filter-box">
          <label htmlFor="checkbox">Linijos Nr.<input type="checkbox" name="Linijos Nr" id="line-nr" onClick={checkboxValues} value='Linijos Nr.'/></label>
        </div>
        <div className="filter-box">
          <label htmlFor="checkbox">Būsena<input type="checkbox" id="state" value='Būsena' onClick={checkboxValues}/></label>
          
        </div>
        <div className="filter-box">
          <label htmlFor="checkbox">Aktyvavimo Data<input type="date" id='date' onChange={checkboxValues}/></label>
          
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
