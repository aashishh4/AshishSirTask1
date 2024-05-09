import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import Statepopup from "./Statepopup";
import Header from "./Header";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./Contextlogin";

function Home() {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  const initialValues = {
    name: "",
    num: ""
  };

  function validateForm(values) {
    const errors = {};
    if (!values.name) {
      errors.name = "Name is required";
    }

    if (!values.num) {
      errors.num = "Number is required";
    } else if (!/^[6-9]\d{9}$/.test(values.num)) {
      errors.num =
        "Mobile number should be 10 digits starting with 6, 7, 8, or 9";
    }

    return errors;
  }

  const handleForm = (values, actions) => {
    console.log(values);
    setIsOpenDropdown(true);
    actions.resetForm();
  };

  

 
    return (
      <>
        <div>
          <Header />
          <h1>Home page</h1>
          <Formik
            initialValues={initialValues}
            validate={validateForm}
            onSubmit={handleForm}
          >
            {({ isValid }) => (
              <Form>
                <label>Name:</label>
                <Field type="text" id="name" name="name" placeholder="Enter your Name" />
                <ErrorMessage name="name" component="div" style={{ color: "red" }} /><br />

                <label>Mobile:</label>
                <Field type="text" id="num" name="num" placeholder="Enter your number" />
                <ErrorMessage name="num" component="div" style={{ color: "red" }} /><br />

                <button type="submit" disabled={!isValid}>
                  Submit
                </button>
              </Form>
            )}
          </Formik>
          {isOpenDropdown && <Statepopup isOpen={isOpenDropdown} setIsOpen={setIsOpenDropdown} />}
        </div>
        <Outlet />
      </>
    );
  
}

export default Home;
