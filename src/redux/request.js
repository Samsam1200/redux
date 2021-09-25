import axios from 'axios'

 export const fetchItem = () =>
axios
  .get( "http://localhost:3004/user")
  .then((res) => res.data);
  export const fetchAdd = (nom,prenom)=>{
    axios.post("http://localhost:3004/user",{nom,prenom}).then(res=>{
        console.log(res.data )
    })
}
export const fetchDeleteItem = (id) =>
axios.delete(`http://localhost:3004/user/${id}`).then((res) => res.data);
export const updateItem=(id,nom,prenom)=>{
    axios.put(`http://localhost:3004/user/${id}`,{nom,prenom}).then(res=>res.data) 
}