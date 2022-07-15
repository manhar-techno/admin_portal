import React from "react";
import { useContext } from "react";
import { ContextRegistration } from "../App";
import { useForm } from "react-hook-form";
import * as yup from "yup";
// import { yupResolver } from "react-hook-form-resolvers";
import { yupResolver } from "@hookform/resolvers/yup";
export default function RegisterPageOne() {
  const schema = yup.object().shape({
    firstName: yup
      .string("Numbers are not allowed in name")
      .min(3)
      .required("Required"),
    lastName: yup
      .string("Numbers are not allowed in name")
      .min(3)
      .required("Required"),
    email: yup
      .string()
      .email("Kindly enter a valid email address")
      .required("Required"),
    age: yup.number().integer().required("Required"),
    password: yup
      .string()
      .min(4, "Password Can not be so short")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      )
      .required("Required"),
    confirmPassword: yup
      .string()
      .min(4)
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Required"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const { state, dispatch } = useContext(ContextRegistration);
  return (
    <div
      className="form"
      onSubmit={handleSubmit((data) => {
        console.log(register("firstName").ref);
        console.log(errors);
        console.log(data);
      })}
    >
      <form className="form-class">
        {" "}
        <h2>Fill the details</h2>
        <div className="form-elements">
          <h3>First Name</h3>
          <input type="text" name="firstName" {...register("firstName")} />
          <span className="error-message">{errors.firstName?.message}</span>
          <h3> Last Name</h3>
          <input
            type="text"
            name="lastName"
            ref={register}
            {...register("lastName")}
          />{" "}
          <span className="error-message">{errors.lastName?.message}</span>
          <h3>Age</h3>
          <input type="text" name="age" ref={register} {...register("age")} />
          <span className="error-message">{errors.age?.message}</span>
          <h3>Email</h3>
          <input
            type="text"
            name="email"
            ref={register}
            {...register("email")}
          />
          <span className="error-message">{errors.email?.message}</span>
          <h3>Password</h3>
          <input
            type="password"
            name="password"
            ref={register}
            {...register("password")}
          />{" "}
          <span className="error-message">{errors.password?.message}</span>
          <h3>Confirm-Password</h3>
          <input
            type="password"
            name="confirmPassword"
            ref={register}
            {...register("confirmPassword")}
          />
          <span className="error-message">
            {errors.confirmPassword?.message}
          </span>
        </div>
        <div>
          <button type="submit" className="button-home">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
