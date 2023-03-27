import {
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  TextField,
} from "@mui/material";
import axios from "axios";
import { Field, Form, Formik } from "formik";
import React from "react";

export default function NewBook() {
  const initialValues = {
    name: "",
    author: "",
    isbn: "",
    description: "",
  };

  const handelSumbit = (values) => {
    console.log(values);
    return
    axios
    .post("", values)
    .then((response) => {
     console.log(response.data);
     
    })
    .catch((error) => {
      console.log(error);
    });

  };
  return (
    <> 
           <Formik
            initialValues={initialValues}
               onSubmit={(values,{ resetForm })=>{
               handelSumbit(values)
                resetForm({values:""})
           
        }}>
                    {() => (
                      <Form className="p-1">
                      <div className="form-group m-3">
                        <label className="required fw-bold fs-6">Nom livre</label>
                        <Field type="text" className="form-control" name="name" />
                      </div>
                      <div className="form-group m-3">
                        <label
                          className="required fw-bold fs-6"
                          for="formGroupExampleInput2"
                        >
                          Auteur
                        </label>
                        <Field name="author" type="text" className="form-control" />
                      </div>
                      <div className="form-group m-3">
                        <label
                          className="required fw-bold fs-6"
                          for="formGroupExampleInput2"
                        >
                          Isbn
                        </label>
                        <Field name="isbn" type="text" className="form-control" />
                      </div>
                      <div className="form-group m-3">
                        <label
                          for="formGroupExampleInput2"
                          className="required fw-bold fs-6"
                        >
                          Description
                        </label>
                        <Field
                          
                          name="description"
                          as="textarea"
                          rows={4}
                          className="form-control"
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn  mx-3 border-none"
                        style={{ background: "#673ab7", color: "white" }}
                      >
                        Ajouter
                      </button>
                    </Form>
                    )}
                  </Formik>
    
    
    </>
  );
}
