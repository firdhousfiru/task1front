import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'

const Addp = () => {
    const [data,setData] = useState(
        {
            "name":"",
            "con":"",
            "ufor":"",
            "edate":""
        }
    )
    const inputHandler=(event)=>{
        setData(...data,{[event.target.data]:event.target.value})
    }
    const readvalue=()=>{
        axios.post("http://localhost:9000/add",data).then(
            (response)=>{
                console.log(data)
                setData(response.data)
                if(response.data.status=="success")
                    {
                        alert("ADDED")
                    }
                    else{
                        alert("error")
                    }
            }
        ).catch().finally()

    }

    return (
        <div><NavBar/>
            <div className="container">
                <div className="row g-4 ">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">NAME:</label>
                                <input type="text" className="form-control" name="name" value={data.name} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">CONTENTS:</label>
                                <input type="text" className="form-control" name="con" value={data.con} onChange={inputHandler}/>
                            </div>
                        
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">USED FOR:</label>
                            <input type="text" className="form-control" name="ufor" value={data.ufor} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">EXPIRY DATE:</label>
                            <input type="date" name="edate" id="" className="form-control"  value={data.edate} onChange={inputHandler}/>
                        </div>
                    </div>

                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-warning" onClick={readvalue}>CLICK HERE</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
  )
}

export default Addp