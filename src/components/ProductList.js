import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import { StoreContext } from '../UserContext'

export default function ProductList() {
    let data = useContext(StoreContext)
    return (
        <>
            <h1 className="h3 mb-0 text-gray-800">Product List</h1>
            <Link to="/productcreate">Create Product</Link> 
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Product Tables Example</h6>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Manufacturer</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th>Name</th>
                                            <th>Manufacturer</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Action</th>
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                        {data["productdata"].map(e=>{
                                            return <tr>
                                            <td>{e["title"]}</td>
                                            <td>{e["manufacturer"]}</td>
                                            <td>{e["price"]}</td>
                                            <td>{e["inventory"]}</td>
                                            <td>{<Link to={`/productedit/${e["id"]}`}>Product Edit</Link>}</td>
                                            </tr>
                                        })}
                                    </tbody>
                                </table> 
                            </div> 
                        </div>
                    </div>
        </>
    )
}
