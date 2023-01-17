import { useState } from "react";
import { useForm, Controller } from "react-hook-form";

import { Button, TextField, Typography } from "@mui/material";

import findUser from "../../../utils/findUser";

const SignInForm = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [error, setError] = useState(null);

  const onSubmit = (data) => {
    const userResult = findUser(data);

    if (userResult === "password") setError("Wrong Password!");
    else if (userResult) {
      localStorage.setItem("user", JSON.stringify(userResult));
      window.location = "/";
    } else setError("User does not exist!");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <TextField label="email" type="email" variant="standard" {...field} />
        )}
      />

      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <TextField
            label="password"
            placeholder="password"
            type="password"
            variant="standard"
            {...field}
          />
        )}
      />

      <Button
        fullWidth
        variant="contained"
        color="secondary"
        onClick={handleSubmit(onSubmit)}
      >
        Sign In
      </Button>

      {error ? <Typography color="darkred"> {error} </Typography> : null}
    </form>
  );
};

export default SignInForm;
