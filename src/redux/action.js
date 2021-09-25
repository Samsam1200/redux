import {fetchItem,fetchAdd,fetchDeleteItem,updateItem} from './request.js'

export function getAllItems() {
    return dispatch => {
        fetchItem()
        .then (user =>dispatch (
            {type: "GET_ALL_SERVICES_SUCCEED",payload: user}) 
        )

        .catch(err=>dispatch( {
            type: "GET_ALL_SERVICES_FAILED",
            payload: err
          }))
    }

}

export const addItem=(nom,prenom)=> async (dispatch) =>{
    try{
        const res = await fetchAdd(nom,prenom);
        dispatch ({
            type:"ADD_SERVICE_SUCCED",
            payload:res.data
        })
        console.log("payload")
    }
    catch (error) {
              console.log(error);
             }
}
export const deleteItem=(id)=> async (dispatch) =>{
    try{
     await fetchDeleteItem(id);
        dispatch ({
            type:"DELETE_SERVICES_SUCCED",
            payload:id
        })
        console.log("payload")
      }
    catch (error) {
              console.log(error);
             }
}
export const updateData=(id,nom,prenom)=> async (dispatch) =>{
    try{
        const res = await updateItem(id,nom,prenom);
        dispatch ({
            type:"UPDATE_SERVICE_SUCCED",
            payload:res.data
        })
        console.log("payload")
    }
    catch (error) {
              console.log(error);
             }
}
