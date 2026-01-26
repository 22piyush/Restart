import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupReSolver } from '@hookform/resolver/yup'
import { registerSchema } from "./schema";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useState({
    resolver: yupReSolver(registerSchema)
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("name")} placeholder="Name" />
        <p>{errors.name?.message}</p>

        <input type="email" {...register("email")} placeholder="Email" />
        <p>{errors.email?.message}</p>

        <input
          type="password"
          {...register("password")}
          placeholder="Password"
        />
        <p>{errors.password?.message}</p>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Form;
