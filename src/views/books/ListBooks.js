import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';
import axios from 'axios';
import React,{useState} from 'react'
import ItemBooks from './ItemBooks';



export default function ListBooks() {
  const [books, setBooks] = useState([
    {
      id:1,
      name:"livre 1",
      author:"Auteur livre1",
      description:"Description livre 1 ",
      active:true,

      isbn:"isbn livre 1",

    },
    {
      id:2,
      name:"livre 2",
      author:"Auteur livre2",
      isbn:"isbn livre 2",
      description:"Description livre 2 ",
      active:false,
      
    },
    {
      id:3,
      name:"livre 3",
      author:"Auteur livre3",
      isbn:"isbn livre 3",
      description:"Description livre 3 ",
      active:true,
      
    }
  ])
  const getBooks=()=>{
    axios.post("")
    .then((response)=>{
      setBooks(response.data)
    }) 
  }
 
  const deleteBook=(id)=>{
    if (window.confirm("Voulez-vous vraiment supprimer ce livre !")) {
        const filteredbooks = books.filter(
            (book) => book.id !== id
          );
          setBooks(filteredbooks);
        return
        axios
          .delete("/" + id)
          .then(() => {
           
            toast.success("Livre supprimée");
          })  
          .catch((error) => {
            console.error(error);
          });
      }
  }
  console.log(books);
    return (
      <>
   <div className="responsive rounded bg-white p-3" style={{overflowX:"scroll"}}>
   <h5 className='mb-3'>Liste des  livres</h5>

       <table className="table   ">
  <thead>
    <tr className="fw-bold text-muted">
      <th scope="col">Nom</th>
      <th scope="col" className="min-w-150px">Auteur</th>
      <th scope="col" className="min-w-150px">Isbn</th>
      <th scope="col" className="min-w-150px">Active</th>
      <th scope="col" className="min-w-150px">Description</th>
      <th scope="col" className="min-w-150px">Action</th>
    </tr>
  </thead>
  <tbody>
    {
      books.map((book,index)=>{
       return <ItemBooks deleteBook={deleteBook}book={book} key={index}/>
      })
    }
   
   
  </tbody>
</table>
   </div>

      </>
     
    );
}