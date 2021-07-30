import React,{useState} from 'react'
import { StoreContext } from '../UserContext'

export default function ProductCreate() {
    
    let data =  React.useContext(StoreContext)
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [manufacturer, setManufacturer] = useState("")
    const [inventory, setInventory] = useState("")

    const onSubmit = ()=>{
        
        data.setProductdata([...data.productdata,{"id":data.productdata.length, title,price,manufacturer,inventory}])
        setTitle("")
        setPrice("")
        setManufacturer("")
        setInventory("")
    }
    return (
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <div className="container">
                <div className="row ">
                    <h1 className="h3 mb-0 text-gray-800">Product Create </h1>
                </div>
                <div className="row mb-2">
                    <div className="col-lg-6">
                        <label htmlFor="name">Title</label>
                        <input className="form-control" value={title} onChange={(e)=>{setTitle(e.target.value)}} />
                    </div>
                    <div className="col-lg-6">
                        <label htmlFor="name">Price</label>
                        <input className="form-control" value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col-lg-6">
                        <label htmlFor="name">Manufacturer</label>
                        <input className="form-control" value={manufacturer} onChange={(e)=>{setManufacturer(e.target.value)}}/>
                    </div>
                    <div className="col-lg-6">
                        <label htmlFor="name">Quantity</label>
                        <input className="form-control" value={inventory} onChange={(e)=>{setInventory(e.target.value)}}/>
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col-lg-3">
                        <button className="btn btn-primary" onClick={onSubmit}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
