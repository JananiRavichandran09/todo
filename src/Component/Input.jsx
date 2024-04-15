import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Input = ({ addTodo }) => {
  const initialValues = {
    title: "",
    description: "",
    priority: "",
    dueDate: "",
    image: "", 
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
    priority: Yup.string().required("Priority is required"),
    dueDate: Yup.string().required("Due date is required"),
    image: Yup.mixed(), 
  });

  const onSubmit = (values, { resetForm }) => {
    addTodo(
      values.title,
      values.description,
      values.priority,
      values.dueDate,
      values.image
    );
    resetForm();
  };

  return (
    <div className="container">
      <h1
        className="text-center m-3"
        style={{ color: "#198754", textAlign: "center" }}
      >
        My Todo
      </h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form>
            <div
              className="row justify-content-around text"
              style={{ marginTop: "100px" }}
            >
              <div className="col-lg-3 col-md-6 mb-3">
                <Field
                  type="text"
                  name="title"
                  placeholder="Todo Title"
                  className="form-control"
                />
                <ErrorMessage
                  name="title"
                  component="div"
                  className="error-message"
                />
              </div>
              <div className="col-lg-3 col-md-6 mb-3">
                <Field
                  type="text"
                  name="description"
                  placeholder="Todo Description"
                  className="form-control"
                />
                <ErrorMessage
                  name="description"
                  component="div"
                  className="error-message"
                />
              </div>
              <div className="col-lg-3 col-md-6 mb-3">
                <Field as="select" name="priority" className="form-control">
                  <option value="">Select Priority</option>
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </Field>
                <ErrorMessage
                  name="priority"
                  component="div"
                  className="error-message"
                />
              </div>
              <div className="col-lg-3 col-md-6 mb-3">
                <Field
                  type="date"
                  name="dueDate"
                  placeholder="Due Date"
                  className="form-control"
                />
                <ErrorMessage
                  name="dueDate"
                  component="div"
                  className="error-message"
                />
              </div>
              <div className="col-lg-3 col-md-6 mb-3">
                <input
                  type="file"
                  name="image"
                  onChange={(event) => {
                    setFieldValue("image", event.currentTarget.files[0]);
                  }}
                />
                
              </div>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="btn btn-success"
                disabled={isSubmitting}
              >
                Add Todo
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <div className="text-center m-5 p-5">
        <Link to="/home" className="btn btn-outline-primary ml-2">
          View Me
        </Link>
      </div>
    </div>
  );
};

export default Input;
