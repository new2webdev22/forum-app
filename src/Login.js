import React from "react";
import Input from "./Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  username: yup.string().required("Username is a required field"),
  password: yup.string().min(6, "Password must be at least 6 characters"),
});

function Login(props) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const formSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="sign-up">
      <h1>Log in</h1>
      <p>Lorem ipsum dolor, sit amet consectetur</p>
      <form onSubmit={handleSubmit(formSubmit)}>
        <Input
          id="username"
          label="Username"
          type="text"
          placeholder="Enter Username"
          register={{ ...register("username") }}
          errorMessage={errors.username?.message}
        />
        <Input
          id="password"
          label="Password"
          type="password"
          placeholder="Enter Password"
          register={{ ...register("password") }}
          errorMessage={errors.password?.message}
        />
        <button>Log in</button>
      </form>
      <button className="button-2" onClick={() => props.onFormSwitch("signup")}>
        Don't have an account? Register here.
      </button>
    </div>
  );
}

export default Login;
