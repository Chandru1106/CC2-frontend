import axios from "axios";
import React, { Component } from "react";

class Showdata extends Component {
  state = {
  data: []
  }

  componentDidMount() {
  axios.get('http://127.0.0.1:8080/showdet1')
    .then(response => {
      this.setState({ data: response.data });
    })
    .catch(error => {
      console.log(error);
    });
}


  render() {   
    return (
      <div className="ia">
        <center>
      <table border={1}>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Count</th>
          <th>Email</th>
          <th>PhoneNumber</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {this.state.data.map(user => (
          <tr key={user.id}>
            <td>{user.aid}</td>
            <td>{user.aname}</td>
            <td>{user.acount}</td>
            <td>{user.email}</td>
            <td>{user.phoneno}</td>
            <td>{user.adistrict}</td>
          </tr>
        ))}
      </tbody>
    </table></center>
    </div>
    );
  }}
  
export default Showdata;