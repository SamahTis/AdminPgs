import {
    FormControl,
    FormHelperText,
    Input,
    InputLabel,
    TextField,
  } from "@mui/material";
import axios from "axios";
import {Field, Form, Formik} from "formik";
  import React from "react";
  
  export default function NewUser() {
    const initialValues = {
        nom: "",
        prenom: "",
        email: "",
        password: "",
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
          <label className='required fw-bold fs-6'>Nom</label>
            <Field 
              type="text"
              className="form-control"
              name="nom"
            />
          </div>
          <div className="form-group m-3">
            <label  className='required fw-bold fs-6'for="formGroupExampleInput2">Prenom</label>
            <Field
              type="text"
              className="form-control"
              name="prenom"
            />
          </div>
          <div className="form-group m-3">
            <label  className='required fw-bold fs-6' for="formGroupExampleInput2">Email</label>
            <Field
              type="email"
              className="form-control"
              name="email"
            />
          </div>
          <div className="form-group m-3">
            <label for="formGroupExampleInput2"  className='required fw-bold fs-6'>Password</label>
            <Field
              type="password"
              rows={4}
              className="form-control"
              name="password"
            />
          </div>
          <button type="submit" className="btn  mx-3 border-none" style={{background:"#673ab7",color:"white"}}>Ajouter</button>
  
        </Form>)}
        </Formik>
      </>
    );
  }
  