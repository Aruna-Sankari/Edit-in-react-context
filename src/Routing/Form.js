import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { globalState } from './Context.js'
const Form = () => {

    const [name, setname] = useState()
    let [id, setid] = useState()
    const [pri, setpri] = useState()
    const [image, setimage] = useState()
    const { state, dispatch } = useContext(globalState)


    const [param] = useSearchParams();


    useEffect(() => {

        if (param.get("id") != null) {
            let edit = state.arr.find((e) => {
                return e.id === param.get("id")
            })

            setname(edit.name)
            setid(edit.id)
            setimage(edit.image)
            setpri(edit.price)
            console.log(edit);
        }
    }, [])

    let nav = useNavigate()
    const gocard = (e) => {
        e.preventDefault()
        nav("/Card")
    }
    const handle = (e) => {
        if (e.target.name === "pna") {
            console.log(e.target.value, e.target.name);
            setname(e.target.value)
        }
        else if (e.target.name === "ppri") {
            console.log(e.target.value, e.target.name);
            setpri(e.target.value)
        }
        else if (e.target.name === "pid") {
            console.log(e.target.value, e.target.name);
            setid(e.target.value)
        }
        else if (e.target.name === "images") {
            console.log(e.target.value, e.target.name);
            setimage(e.target.value)
        }

    }

    const handlesubmit = (e) => {

        e.preventDefault()
        const temp = {
            name: name,
            price: pri,
            id: id,
            image: image
        }

        if (param.get("id") != null) {


            let x = state.arr.map((e) => {
                return param.get("id") === e.id ? temp : e
            })
            dispatch({ type: "updatearr", payload: x })
        }
        else {
            dispatch({ type: "updatearr", payload: [...state.arr, temp] })
        }
        setname("")
        setpri("")
        setid("")
        setimage("")

    }
    return (
        <div>
            <h2 style={{textAlign:"center"}}>FORM</h2>
            <div>

                <div>
                    <form onSubmit={handlesubmit} style={{ margin: "auto", margin: "100px 0 0 600px",border:"2px solid black" ,width:"350px",padding:"14px"}}>
                        <div>
                            <div>
                                <label>Product Id:</label>
                                <input tyep="number" value={id} name="pid" onChange={handle}></input>
                            </div><br></br>
                            <div>
                                <label>Product Name:</label>
                                <input type="text" value={name} name="pna" onChange={handle}></input>
                            </div><br></br>
                            <div>
                                <label>Product Price:</label>
                                <input type="text" value={pri} name="ppri" onChange={handle}></input>
                            </div><br></br>
                            <div>
                                <label>Image:</label>
                                <input type="text" value={image} name="images" onChange={handle}></input>
                            </div><br></br>
                            <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"10px"}}>
                                <div>
                                    <button style={{backgroundColor:"blue",padding:"5px",color:"white"}}>submit</button>
                                </div>
                                <div>
                                    <button onClick={gocard} style={{backgroundColor:"darksalmon",padding:"5px",color:"black"}}>Home</button>

                                </div>
                            </div>


                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Form