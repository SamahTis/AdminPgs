import {Delete} from "@mui/icons-material";
import books from "menu-items/books";
import React from "react";
import { AiFillDelete,AiFillSave } from "react-icons/ai";
export default function ItemBooks({ book ,deleteBook}) {
  console.log(book);
  return (
    <tr>
  <td>
      <div className="d-flex align-items-center">
        <div className="d-flex justify-content-start flex-column">
          <input
            type={"text"}
            className="form-control"
            value={book.name}
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
            value={book.author}
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
            value={book.isbn}
            // onChange={(e) => setDescription(e.target.value)}
            required
         />
        </div>
      </div>
    </td>
    <td>
      <div className="d-flex align-items-center">
        <div className="d-flex justify-content-start flex-column">
           {book.active ? (
          <div  className="card-toolbar ml-3">
            <span className="badge  fw-bolder me-auto px-1 rounded-pill py-2 " style={{background:"#53c56acf"}}>disponsnible</span>
          </div>
        ) : (
          <div  className="card-toolbar ml-3">
            <span className="badge   fw-bolder me-auto px-1 rounded-pill  py-2 " style={{background:"#e8c218f7"}}>indiponible</span>
          </div>
        )}
        </div>
      </div>
    </td>
    <td>
      <div className="d-flex align-items-center">
        <div className="d-flex justify-content-start flex-column">
          <textarea
            className="form-control"
            type="text"
            rows={3}
            value={book.description}
            // onChange={(e) => setDate(e.target.value)}
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
          onClick={() => deleteBook(book.id)}
        >
              <AiFillDelete style={{fontSize:"19px",color:"#b0c3d7"}}/>

        </button>
      </div>
    </td>
  </tr>
  );
}
