import React,{useState} from 'react'
import { StoreContext } from '../UserContext'

export default function UserCreate() {
    let data =  React.useContext(StoreContext)
    const [name, setName] = useState("")
    const [position, setPosition] = useState("")
    const [office, setOffice] = useState("")
    const [age, setAge] = useState("")
    const [date, setDate] = useState("")
    const [salary, setSalary] = useState("")

    function onSubmit(){
        
        data.setUserdata([...data.userdata,{"id":data.userdata.length,name,position,office,age,date,salary}])
        setName("")
        setPosition("")
        setOffice("")
        setAge("")
        setDate("")
        setSalary("")
    }
    return (
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            
            <div className="container">
                <div className="row ">
                    <h1 className="h3 mb-2 text-gray-800">User Create </h1>
                </div>
                <div className="row mb-2">
                    <div className="col-lg-6">
                        <label htmlFor="name">Name</label>
                        <input className="form-control" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                    </div>
                    <div className="col-lg-6">
                        <label htmlFor="name">Designation</label>
                        <input className="form-control" value={position} onChange={(e)=>{setPosition(e.target.value)}}/>
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col-lg-6">
                            <label htmlFor="name">Office</label>
                            <input className="form-control" value={office} onChange={(e)=>{setOffice(e.target.value)}}/>
                    </div>
                    <div className="col-lg-6">
                            <label htmlFor="name">Age</label>
                            <input className="form-control" value={age} onChange={(e)=>{setAge(e.target.value)}}/>
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col-lg-6">
                            <label htmlFor="name">Date</label>
                            <input className="form-control" value={date} onChange={(e)=>{setDate(e.target.value)}}/>
                    </div>
                    <div className="col-lg-6">
                            <label htmlFor="name">Salary</label>
                            <input className="form-control" value={salary} onChange={(e)=>{setSalary(e.target.value)}}/>
                    </div>
                </div>
                <div className="row mb-2">
                    <button className="btn btn-primary" onClick={onSubmit}>Submit</button>
                </div>
            </div> 
        </div>
    )
}
