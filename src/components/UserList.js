import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import { StoreContext } from '../UserContext'

export default function UserList() {
    let data = useContext(StoreContext)
    
    return (
            <>
            <h1 className="h3 mb-0 text-gray-800">User List</h1>
            <p className="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
                        For more information about DataTables, please visit the <a target="_blank" rel="noreferrer"
                            href="https://datatables.net">official DataTables documentation</a>.</p>

                    <Link to="/usercreate">Create User</Link>
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
                        </div>
            <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Position</th>
                                            <th>Office</th>
                                            <th>Age</th>
                                            <th>Start date</th>
                                            <th>Salary</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th>Name</th>
                                            <th>Position</th>
                                            <th>Office</th>
                                            <th>Age</th>
                                            <th>Start date</th>
                                            <th>Salary</th>
                                            <th>Action</th>
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                    
                                        { data.userdata.map(e=>{
                                            return <tr key={e["id"]}>
                                            <td>{e["name"]}</td>
                                            <td>{e["position"]}</td>
                                            <td>{e["office"]}</td>
                                            <td>{e["age"]}</td>
                                            <td>{e["date"]}</td>
                                            <td>{e["salary"]}</td>
                                            <td>{<Link to={`/useredit/${e["id"]}`}>User Edit</Link>}</td>
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
