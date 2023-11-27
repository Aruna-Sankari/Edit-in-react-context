import React, { useReducer } from 'react'
import { globalState } from './Routing/Context.js'
import { initialstate,reducer} from './Routing/Reducer.js'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Form from './Routing/Form.js'
import Card from './Routing/Card.js'

const Routing =()=>{
    const [state,dispatch]=useReducer(reducer,initialstate)

    return(
        <globalState.Provider value={{state,dispatch}}>
            <BrowserRouter>
                <Routes>
                 <Route path="/" element={<Form/>}>

                    </Route>
                    <Route path="/Card" element={<Card/>}>

                     </Route>
                </Routes> 
            </BrowserRouter>
        
        </globalState.Provider>
    )
}

export default Routing