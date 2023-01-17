import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button, TextField, Box } from "@mui/material";

import findUser from "../../../utils/findUser";

const schema = yup
  .object({
    email: yup.string().email("Email is invalid").required(),
    password: yup
      .string()
      .min(8, "Password must be more than 8 characters")
      .max(32, "Password must be less than 32 characters")
      .required(),
  })
  .required();

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const [error, setError] = useState(null);

  const onSubmit = (data) => {
    const userResult = findUser(data);

    if (userResult === "password") setError("password");
    else if (userResult) {
      localStorage.setItem("currentUser", JSON.stringify(userResult));
      window.location = "/";
    } else setError("email");
  };

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField
        error={error === "email" || !!errors["email"]}
        helperText={
          error === "email"
            ? "User does not exist!"
            : errors["email"]
            ? errors["email"].message
            : ""
        }
        label="Email"
        placeholder="Email"
        variant="standard"
        {...register("email")}
      />

      <TextField
        error={error === "password" || !!errors["password"]}
        helperText={
          error === "password"
            ? "Wrong password!"
            : errors["password"]
            ? errors["password"].message
            : ""
        }
        label="Password"
        placeholder="Password"
        type="password"
        variant="standard"
        {...register("password")}
      />

      <Button
        fullWidth
        variant="contained"
        color="secondary"
        onClick={handleSubmit(onSubmit)}
      >
        Sign In
      </Button>
    </Box>
  );
};

export default SignInForm;
