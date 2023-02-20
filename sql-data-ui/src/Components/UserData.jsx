function UserData() {

  const inputValue = (e) => {
    const searchInput = e.target.value;
    return searchInput;

  }

  const findUser = () => {
    
  }

  return (
    <div className="main-ui-container">
      <div className="search-field">
        <label htmlFor="search">Surasti Vartotoją</label>
        <input type="text" name="search" onChange={(e) => inputValue(e)}/>
        <button className="find-user" onClick={findUser}>Ieškoti</button>
      </div>
      
        <tbody className="user-table">
          <tr>
            <th>vardas</th>
            <th>pavarde</th>
            <th>sutarties numeris</th>
            <th>busena</th>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
    </div>
      
  );
}

export default UserData;
