import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import storage from "../firebase/firebase";
import UserService from "../service/UserService";

const AddUser = () => {
    const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [image, setimage] = useState(null);

  const submit = (data) => {
    console.log(data);
    UserService.createUser(data).then((resp) => {
        console.log(resp.data);
        history.push('/')
    }).catch(errors => {
        console.log(errors);
    })
  };

  const changeImage = (e) => {
    console.log(e.target.files[0]);
    setimage(e.target.files[0]);
    document.getElementById('inputAvatar').value = e.target.files[0].name
  };

  const getImage = (nameFile) => {
    storage.ref("images")
    .child(nameFile)
    .getDownloadURL()
    .then(url => {
        console.log(url);
    })
  }

  const uploadFile = () => {
    if (image == null) return;
    storage
      .ref(`/images/${image.name}`)
      .put(image)
      .on("state_changed", 
      snapshot => {},
      errors => {
          console.log(errors);
      },
      () => {
          console.log("upload done");
      }
      );
  };

  return (
    <div className="container m-3 text-left">
      <form onSubmit={handleSubmit(submit)}>
        <h2 className="mb-2">Thêm người dùng</h2>
        <input
          type="text"
          className="form-control w-50 mb-2"
          placeholder="Tên"
          {...register("fullname")}
        />
        <input
          type="text"
          className="form-control w-50 mb-2"
          placeholder="Email"
          {...register("email")}
        />
        <input
          type="file"
          onChangeCapture={changeImage}
          className="form-control w-50 mb-2"
        />
        <input
          type="hidden" id="inputAvatar"
          {...register("avatar")}
        />
        <div onClick={uploadFile} className="btn btn-primary">Upload</div>
        <div onClick={getImage.bind(this, '5.gif')} className="btn btn-primary">Get image</div>

        <input
          type="text"
          className="form-control w-50 mb-2"
          placeholder="Mật khẩu"
          {...register("password")}
        />
        <input
          type="text"
          className="form-control w-50 mb-2"
          placeholder="Vai trò"
          {...register("role")}
        />
        <div className="active">
          <input
            type="radio"
            name="active"
            checked
            value="1"
            {...register("active")}
          />{" "}
          Active &ensp;
          <input
            type="radio"
            name="active"
            value="0"
            {...register("active")}
          />{" "}
          Inctive
        </div>
        <input
          type="text"
          className="form-control w-50 mb-2"
          placeholder="Số dư"
          {...register("surplus")}
        />
        <button className="btn btn-primary">Thêm</button>
      </form>
    </div>
  );
};

export default AddUser;
