import { useState } from "react";
import React from "react";

function UserData({ data }) {
  const [userData, setUserData] = useState([]);
  const [contractNumber, setContractNumber] =useState()

  

  const inputValue = (e) => {
    const searchValue = e.target.value;
    const initialState = [];
    setContractNumber(Number(searchValue));
    if (Number(searchValue) === 0) {
      setContractNumber(initialState)
    }
  }

  console.log(contractNumber)
 

  const findUser = (e) => {
    e.preventDefault();
    const targetUser = data.find((user) => user.contract === contractNumber);
    setUserData([...userData, targetUser])
    console.log(userData.length)
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
        <button type="submit" className="find-user" onClick={(e) => findUser(e)}>
          Ieškoti
        </button>
      </div>
      <table className="user-table">
        <tbody>
          <tr>
            <th>Vardas</th>
            <th>Pavarde</th>
            <th>Sutarties numeris</th>
            <th>Būsena</th>
          </tr>
          {userData.length !== 0 ? userData.map((user) => (
            <tr className="user-row" key={user.id}>
              <td>{user.userName}</td>
              <td>{user.lastName}</td>
              <td>{user.contract}</td>
            </tr>
          )) : data.map((user) => (
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
