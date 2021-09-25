import React ,{useState}from "react"
import {updateData} from './redux/action.js'
import { useDispatch, useSelector } from "react-redux";



  const Mood = ({el}) =>{
    const dispatch = useDispatch();

      const [item,setItem]=useState({
        id:el.id,
        nom:el.nom,
          prenom:el.prenom
      })

      const[newItem,setNewItem]=useState({
        id:el.id,
        nom:'',
        prenom:''
      })


const updata = ()=>{
dispatch(updateData(item.id,item.nom,item.prenom))
}

    return(
        <div>

 
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhucz9QyyJBZrB11-gGcmCX7TbpalW55MV5g&usqp=CAU" data-bs-toggle="modal" data-bs-target="#exampleModal" className='mt-0'/>

 
<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
         <form onSubmit={updata}>
             <input type="text" defaultValue={item.nom}   onChange={(e)=>setItem({...item,nom:e.target.value})} />
             <input type="text" defaultValue={item.prenom} onChange={(e)=>setItem({...item,prenom:e.target.value})} />
        <input type="submit" />
         </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}


export  default Mood
