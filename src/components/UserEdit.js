import React,{useState,useContext} from 'react'
import { StoreContext } from '../UserContext'

export default function UserEdit(props) {
    let data =  useContext(StoreContext)
    let dataobject = data.userdata[props.match.params.id]
    
    const [name, setName] = useState(dataobject["name"])
    const [position, setPosition] = useState(dataobject["position"])
    const [office, setOffice] = useState(dataobject["office"])
    const [age, setAge] = useState(dataobject["age"])
    const [date, setDate] = useState(dataobject["date"])
    const [salary, setSalary] = useState(dataobject["salary"])

    const onSubmit = ()=>{
        let array = data.userdata.map(e=>{
            
            if(e["id"]===parseInt(props.match.params.id)){
                
                e={"id":props.match.params.id,name,position, office,age,date,salary}
            }
            return e
        })
        data.setUserdata(array)
        setName("")
        setPosition("")
        setOffice("")
        setAge("")
        setDate("")
        setSalary("")   
    }
    const onDelete = ()=>{
        let array = data.userdata.filter(e=>e["id"]!==parseInt(props.match.params.id))
        
        data.setUserdata(array)
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
                    <h1 className="h3 mb-0 text-gray-800">User Edit</h1>
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
                    <div className="col-lg-3">
                        <button className="btn btn-primary" onClick={onSubmit}>Submit</button>
                    </div>
                    <div className="col-lg-3">
                        <button className="btn btn-primary" onClick={onDelete}>Delete</button>
                    </div>
                </div>
                </div>
        </div>
    )
}
