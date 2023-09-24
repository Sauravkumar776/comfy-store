import { FormInput, SubmitBtn } from "../components"
import { Form, Link } from "react-router-dom"

const Register = () => {
    return (
      <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="class w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Register</h4>
        <FormInput type="text" label="Username" name="Username" placeholder="username" />
        <FormInput type="email" label="Email" name="Email" placeholder="email" />
        <FormInput type="password" label="Password" name="Password" placeholder="password"/>
        <div className="mt-4">
          <SubmitBtn text="register" />
        </div>
        <p className="text-center">
          Already a member?
          <Link
            to="/login"
            className="ml-2 link link-hover link-primary capitalize"
          >
            login
          </Link>
        </p>
        </Form>
      </section>
    )
  }
  
  export default Register
  