import React,{useState} from 'react'
import ItemUser from './ItemUser'

const ListUsers=()=>{
    const [users, setUers] = useState([
        {
          id:1,
          firstname:"User 1",
          lastname:"User 1",
          email:"user1@gmail.com",
          active:true,
          role:""
    
        },
        {
          id:2,
          firstname:"livre 1",
          lastname:"User 1",
          email:"user2@gmail.com",
          active:true,
          role:""
        },
        {
          id:3,
          firstname:"User 1",
          lastname:"User 1",
          email:"user3@gmail.com",
          active:true,
          role:""
        }
      ])

      const deleteUser=(id)=>{
        if (window.confirm("Voulez-vous vraiment supprimer cet utlisateur !")) {
            const filteredusers = users.filter(
                (user) => user.id !== id
              );
              setUers(filteredusers);
            return
            axios
              .delete("/" + id)
              .then(() => {
               
                toast.success("Utilisateur supprimé");
              })  
              .catch((error) => {
                console.error(error);
              });
          }
      }
    return(
        <div className="responsive rounded bg-white p-3" style={{overflowX:"scroll"}}>
        <h5 className='mb-3'>Liste des administrateurs</h5>
     
            <table className="table   ">
       <thead>
         <tr className="fw-bold text-muted">
           <th scope="col">Nom</th>
           <th scope="col" className="min-w-150px">Prenom</th>
           <th scope="col" className="min-w-150px">Email</th>
           <th scope="col" className="min-w-150px">Active</th>
           <th scope="col" className="min-w-150px">role</th>
           <th scope="col" className="min-w-150px">Action</th>

          
         </tr>
       </thead>
       <tbody>
         {
           users.map((user,index)=>{
            return <ItemUser deleteUser={deleteUser} user={user} key={index}/>
           })
         }
        
        
       </tbody>
     </table>
        </div>    )
}
export default ListUsers