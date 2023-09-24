import React from 'react';
import { FormInput, SubmitBtn } from "../components";
import { Form, Link } from "react-router-dom";

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="class w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">LogIn</h4>
        <FormInput
          type="email"
          label="email"
          name="identifier"
          defaultValue="test@test.com"
          placeholder='email'
        />
        <FormInput
          type="password"
          label="password"
          name="password"
          defaultValue="secret"
          placeholder='password'
        />
        <div className="mt-4">
          <SubmitBtn text="login" />
        </div>
        <button type="button" className="btn btn-secondary btn-block">
          Guest User
        </button>
        <p className="text-center">
          Not a member yet?{" "}
          <Link
            to="/register"
            className="ml-2 link link-hover link-primary capitalize"
          >
            register
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default Login;
