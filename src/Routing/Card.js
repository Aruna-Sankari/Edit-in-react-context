import React, { useContext, useState } from 'react'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { globalState } from './Context.js'

const Card=()=>{
    const {state,dispatch}=useContext(globalState)

    console.log(state.arr);
    const nav=useNavigate()
    const edit=(val)=>{
    
        nav(`/?id=${val}`)
        
    }
    return(

        <div className="row">
                {
                    state.arr.map((value, i) => {
                        return (
                            <div key={i} className="card">
                                <div> 
                                    <div>
                                        <img src={value.image} alt="" />
                                    </div>
                                    <h3>Product Name: {value.name}</h3>

                                    <p>Product Price: {value.price} </p>

                                    <div>

                        
                                        <div>
                                           
                                            <div>
                                                <AiFillEdit onClick={()=>edit(value.id)} style={{fontSize:"25px"}}></AiFillEdit>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )

                    })

                }

            </div>
    )
}

export default Card