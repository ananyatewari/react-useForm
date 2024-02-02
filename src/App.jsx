import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./App.css";
// import { toast, ToastContainer } from "react-toastify";

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [submit, setSubmit] = useState(false);

  const doneSubmit = (e) => {
    console.log(e);
    setSubmit(true);
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit(doneSubmit)}>
        <h2>{submit ? "Registration successful !" : null}</h2>
        <h3>First name</h3>
        <input
          type="text"
          placeholder="Enter first name"
          {...register("firstname", {
            required: "Enter your first name please !",
          })}
        />
        <h4>{errors.firstname?.message}</h4>
        <h3>Last name</h3>
        <input
          type="text"
          placeholder="Enter last name"
          {...register("lastname", {
            required: "Enter your last name please !",
          })}
        />
        <h4>{errors.lastname?.message}</h4>
        <h3>Email address</h3>
        <input
          type="email"
          placeholder="Enter email address"
          {...register("email", {
            required: "Enter your email address please !",
            pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
          })}
        />
        <h4>{errors.email?.message}</h4>
        <h3>Password</h3>
        <input
          type="password"
          placeholder="Enter your password"
          {...register("phone", {
            required: "Enter your password please !",
            min: {
              value: 5,
              message: "Password must be greater than 5 characters",
            },
            max: {
              value: 20,
              message: "Password must be smaller than 20 characters",
            },
          })}
        />
        <h4>{errors.phone?.message}</h4>
        <br />
        <button type="submit">Register</button>
      </form>
    </>
  );
}
