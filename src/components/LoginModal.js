import React from "react";
import styles from "../stylemodules/LoginModal.module.css";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const LoginModal = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm({
    reValidateMode: "onSubmit",
  });

  var navigate = useNavigate();

  const onSubmit = (data) => {
    login(data);
  };

  const login = async (data) => {
    console.log(data);
    var result = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });

    result = await result.json();
    if (result.error) {
      alert(result.error);
    } else {
      navigate(`/profile/${result.token}`);
    }
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <button className={styles.closebtn} onClick={props.closeHandler}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <h1>Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Email:</label>
          <input
            {...register("email", {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
            className={
              errors.email
                ? styles.error
                : isSubmitted && !errors.email
                ? styles.success
                : ""
            }
          />
          {errors.email && (
            <p className={styles.errorMsg}>Please insert valid email</p>
          )}
          <label>Password:</label>
          <input
            type="password"
            {...register("password", {
              required: true,
            })}
            className={
              errors.password
                ? styles.error
                : isSubmitted && !errors.password
                ? styles.success
                : ""
            }
          />
          {errors.password && errors.password.type === "required" && (
            <p className={styles.errorMsg}>Required</p>
          )}
          <input type="submit" value="Login" className={styles.submitbtn} />
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
