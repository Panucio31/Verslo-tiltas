function UserData({ data }) {
  console.log(data);

  const inputValue = (e) => {
    const searchInput = e.target.value;
    return searchInput;
  };

  const findUser = () => {};

  return (
    <div className="data-container">
      <div className="search-field">
        <label htmlFor="search">Surasti Vartotoją</label>
        <input type="text" name="search" onChange={(e) => inputValue(e)} />
        <button className="find-user" onClick={findUser}>
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
          <hr />
            {data.map((user) =>
            <tr className="user-row" key={user.id}>
              <td>{user.userName}</td>
              <td>{user.lastName}</td>
              <td>{user.contract}</td>
              
            </tr>
            
            )}
            <hr/>
        </tbody>
      </table>
    </div>
  );
}

export default UserData;
