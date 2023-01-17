import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Box, Button, TextField, Typography } from "@mui/material";
import findUser from "../../../utils/findUser";

const schema = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email("Email is invalid").required(),
    password: yup
      .string()
      .min(8, "Password must be more than 8 characters")
      .max(32, "Password must be less than 32 characters")
      .required(),
  })
  .required();

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      birthdate: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const [error, setError] = useState(null);

  const onSubmit = (data) => {
    const userResult = findUser(data);

    if (userResult) setError("This email is already taken");
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [reset, isSubmitSuccessful]);

  console.log("erorrs are ", errors);

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField
        error={!!errors["firstName"]}
        helperText={errors["firstName"] ? errors["firstName"].message : ""}
        label="first name"
        variant="standard"
        {...register("firstName")}
      />

      <TextField
        error={!!errors["lastName"]}
        helperText={errors["lastName"] ? errors["lastName"].message : ""}
        label="last name"
        variant="standard"
        {...register("lastName")}
      />

      <TextField
        error={!!errors["email"]}
        helperText={errors["email"] ? errors["email"].message : ""}
        label="email"
        type="email"
        variant="standard"
        {...register("email")}
      />

      <TextField
        label="birth date"
        type="date"
        variant="standard"
        {...register("birthdate")}
      />

      <TextField
        error={!!errors["password"]}
        helperText={errors["password"] ? errors["password"].message : ""}
        lebl="password"
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
        Register
      </Button>

      {error ? <Typography color="darkred"> {error} </Typography> : null}
    </Box>
  );
};

export default RegisterForm;
