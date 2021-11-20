import React, {useState, useEffect} from "react";
import UserService from "../service/UserService";
import { Link } from "react-router-dom";

const ListUser = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    UserService.getAllUser().then((resp) => {
      console.log(resp.data);
      setUsers(resp.data)
    }).catch(error => {
      console.log("Lỗi cmnr");
      console.log(error);
    })
  }, []);

  const format = (dateString) => {
    let day = dateString.substring(8,10);
    let month = dateString.substring(5,7);
    let year = dateString.substring(0,4);
    return day + "/" + month + "/" + year;
  }

  const getUrlImage = (image) => {
    return "https://raw.githubusercontent.com/phonghotkgd2k1/image_public/main/" + image;
  }


  return (
    <div>
        <h1>Quản lí người dùng</h1>
        <Link to="/add-user" className="btn btn-primary">Thêm người dùng</Link>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">id</th>
            <th scope="col">fullname</th>
            <th scope="col">Email</th>
            <th scope="col">avatar</th>
            <th scope="col">password</th>
            <th scope="col">Role</th>
            <th scope="col">active</th>
            <th scope="col">surplus</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user) => (
              <tr>
              <td>{user.id}</td>
              <td>{user.fullname}</td>
              <td>{user.email}</td>
              <td><img style={{width: '100px'}} src={getUrlImage(user.avatar)}/></td>
              <td>{user.password}</td>
              <td>{user.role}</td>
              <td>{user.active}</td>
              <td>{user.surplus}</td>
              <td>
                <button className="btn btn-primary">Edit</button> &ensp;
                <button className="btn btn-danger">Remove</button>
              </td>
            </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default ListUser;
