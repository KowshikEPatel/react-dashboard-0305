import React,{useState} from 'react'
import { StoreContext } from '../UserContext'

export default function ProductEdit(props) {
    
    let data =  React.useContext(StoreContext)
    let productobject = data.userdata[props.match.params.id]

    const [title, setTitle] = useState(productobject["title"])
    const [price, setPrice] = useState(productobject["price"])
    const [manufacturer, setManufacturer] = useState(productobject["manufacturer"])
    const [inventory, setInventory] = useState(productobject["inventory"])

    const onSubmit = ()=>{
        let array = data.productdata.map(e=>{
            
            if(e["id"]===parseInt(props.match.params.id)){
                
                e={"id":props.match.params.id,title,price,manufacturer,inventory}
            }
            return e
        })
        data.setProductdata(array)
        setTitle("")
        setPrice("")
        setManufacturer("")
        setInventory("")
    }

    const onDelete = ()=>{
        let array = data.productdata.filter(e=>e["id"]!==parseInt(props.match.params.id))
        
        data.setProductdata(array)
        setTitle("")
        setPrice("")
        setManufacturer("")
        setInventory("")
    }

    return (
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            
            <div className="container">
                <div className="row ">
                    <h1 className="h3 mb-0 text-gray-800">Product Edit</h1>
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
                    <div className="col-lg-3">
                        <button className="btn btn-primary" onClick={onDelete}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
