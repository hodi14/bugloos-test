import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
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
    watch,
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
  const [userInfo, setUserInfo] = useState(null);
  const handleFormChange = useCallback(
    (value, name) => {
      setUserInfo({ ...userInfo, [name]: value[name] });
    },
    [userInfo]
  );

  const onSubmit = (data) => {
    const userResult = findUser(data);

    if (userResult) setError("This email is already taken");
    else setError(null);
  };

  useEffect(() => {
    if (isSubmitSuccessful && !error) {
      localStorage.setItem("currentUser", JSON.stringify(userInfo));
      localStorage.setItem(
        "users",
        JSON.stringify([...JSON.parse(localStorage.getItem("users")), userInfo])
      );
      reset();
      window.location = "/";
    }
  }, [reset, isSubmitSuccessful, userInfo, error]);

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      handleFormChange(value, name);
    });
    return () => subscription.unsubscribe();
  }, [watch, handleFormChange]);

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
        label="First Name"
        variant="standard"
        {...register("firstName")}
      />

      <TextField
        error={!!errors["LastName"]}
        helperText={errors["lastName"] ? errors["lastName"].message : ""}
        label="Last Name"
        variant="standard"
        {...register("lastName")}
      />

      <TextField
        error={!!errors["email"]}
        helperText={errors["email"] ? errors["email"].message : ""}
        label="Email"
        type="email"
        variant="standard"
        {...register("email")}
      />

      <TextField
        label="Birth Date"
        type="date"
        variant="standard"
        {...register("birthdate")}
      />

      <TextField
        error={!!errors["password"]}
        helperText={errors["password"] ? errors["password"].message : ""}
        lebl="Password"
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
