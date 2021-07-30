import React from 'react'

export default function ContentArea() {
    let presentdata = [{
                            "id":1,
                            "title":"Earnings (Monthly)",
                            "shadowcolor":"border-left-primary",
                            "secondarytext":"$40,000",
                            "symbol":"fas fa-calendar fa-2x text-gray-300"
                        
                        },
                        {
                            "id":2,
                            "title":"Earnings (Annual)",
                            "shadowcolor":"border-left-success",
                            "secondarytext":"$215,000",
                            "symbol":"fas fa-dollar-sign fa-2x text-gray-300"
                        
                        },
                        {
                            "id":3,
                            "title":"Tasks",
                            "shadowcolor":"border-left-info",
                            "secondarytext":"50%",
                            "symbol":"fas fa-clipboard-list fa-2x text-gray-300"
                        
                        },
                        {
                            "id":4,
                            "title":"Pending Requests",
                            "shadowcolor":"border-left-warning",
                            "secondarytext":"18",
                            "symbol":"fas fa-comments fa-2x text-gray-300"
                        
                        },
                      ]
    return (<>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                        <button href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                className="fas fa-download fa-sm text-white-50"></i> Generate Report</button>
                    </div>
                    
                    <div className="row">

                        {
                            presentdata.map(e=>{
                                return <div key={e.id} className="col-xl-3 col-md-6 mb-4">
                                <div className={`card ${e["shadowcolor"]} shadow h-100 py-2`}>
                                    <div className="card-body">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col mr-2">
                                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                    {e["title"]}</div>
                                                <div className="h5 mb-0 font-weight-bold text-gray-800">{e["secondarytext"]}</div>
                                            </div>
                                            <div className="col-auto">
                                                <i className={`${e["symbol"]}`}></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            })
                        }
                    </div>

        </>
    )
}
