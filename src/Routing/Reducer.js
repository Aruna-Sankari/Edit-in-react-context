export const initialstate={
    arr:[]
}
export const reducer=(state,action)=>{
    if(action.type==="updatearr"){
        return{...state,arr:action.payload}
    }
}