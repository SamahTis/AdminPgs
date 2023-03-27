import {Delete, InputSharp} from "@mui/icons-material";
import books from "menu-items/books";
import React from "react";
import { AiFillDelete,AiFillSave } from "react-icons/ai";



export default function ItemUser({ user,deleteUser }) {
  return (
    <tr>
  <td>
      <div className="d-flex align-items-center">
        <div className="d-flex justify-content-start flex-column">
          <input
            type={"text"}
            className="form-control"
            value={user.firstname}
            // onChange={(e) => setDescription(e.target.value)}
            required
         />
        </div>
      </div>
    </td>
    <td>
      <div className="d-flex align-items-center">
        <div className="d-flex justify-content-start flex-column">
          <input
            type={"text"}
            className="form-control"
            value={user.lastname}
            // onChange={(e) => setDescription(e.target.value)}
            required
         />
        </div>
      </div>
    </td>
    <td>
      <div className="d-flex align-items-center">
        <div className="d-flex justify-content-start flex-column">
          <input
            type={"text"}
            className="form-control"
            value={user.email}
            // onChange={(e) => setDescription(e.target.value)}
            required
         />
        </div>
      </div>
    </td>
    <td>
      <div className="d-flex align-items-center">
        <div className="d-flex justify-content-start flex-column">
           {user.active ? (
          <div  className="card-toolbar ml-3">
            <span className="badge  fw-bolder me-auto px-1 rounded-pill py-2 " style={{background:"#53c56acf"}}>users activé</span>
          </div>
        ) : (
          <div  className="card-toolbar ml-3">
            <span className="badge   fw-bolder me-auto px-1 rounded-pill  py-2 " style={{background:"#e8c218f7"}}>user desactivé</span>
          </div>
        )}
        </div>
      </div>
    </td>
   

    <td>
      <div className="d-flex align-items-center">
        <div className="d-flex justify-content-start flex-column">
          <input
            className="form-control"
            type="text"
            value={user.role}
            
/>
        </div>
      </div>
    </td>
    <td>
      <div className="d-flex justify-content-end flex-shrink-0">
        <button
          type={"submit"}
          title="enregister"
          className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
          // onClick={() => updateCategorie(id)}
        >
              <AiFillSave style={{fontSize:"19px",color:"#b0c3d7"}}/>

        </button>

        <button
          title="supprimer"
          className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
          onClick={() => deleteUser(user.id)}
        >
              <AiFillDelete style={{fontSize:"19px",color:"#b0c3d7"}}/>

        </button>
      </div>
    </td>
  </tr>
  );
}
