import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getAllItems,addItem,deleteItem} from './redux/action.js'
import  Mood from './modal.js'
 const User = ()=>{
    const user = useSelector((state) => state.userStore.user);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getAllItems());
    }, []);
    const [input, setInput] = useState({
        nom:'',prenom:""
       });
       const addOne= ()=>{
           dispatch(addItem(input.nom,input.prenom))
       }
       const deleteOne = (id) => {
        dispatch(deleteItem(id));
      };
 
 
    return(
        <div>
               <form onSubmit={addOne}>
                <input type="text" placeholder="Nom" onChange={(e)=>setInput({...input,nom:e.target.value})} />
                <input type="text" placeholder="Prenom" onChange={(e)=>setInput({...input,prenom:e.target.value})} />
        <input type="submit" className="envoyer" />
         </form>
            {user.map(el=>(
                <div key={el.id}> 
                    <h1 className="out">{el.nom} {el.prenom}</h1>
                    <div className="image">
                     <img src="data:image/png;base64,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" onClick={() => deleteOne(el.id)}   />
                    <Mood el={el}    />
                    </div>
                </div>
            ))}
         
            </div>


    )
}

export default User