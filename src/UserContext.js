import React,{useState} from 'react'

export const StoreContext = React.createContext();

export const StoreProvider = ({children})=>{
    let [productdata,setProductdata] = useState([
        {
            "id":0,
            "title":"Soap",
            "price":"$20",
            "manufacturer":"HUL",
            "inventory":10
        },
        {
            "id":1,
            "title":"Soap1",
            "price":"$21",
            "manufacturer":"HUL1",
            "inventory":15
        },
        {
            "id":2,
            "title":"Soap2",
            "price":"$23",
            "manufacturer":"HUL2",
            "inventory":17
        },
        {
            "id":3,
            "title":"Soap3",
            "price":"$25",
            "manufacturer":"HUL3",
            "inventory":19
        },
    ])

    let [userdata,setUserdata] = useState([
        {
            "id":0,
            "name":"Airi Satou",
            "position":	"Accountant",
            "office": "Tokyo",
            "age":"33",
            "date":"2008/11/28",
            "salary":"$162,700"
        },
        {
            "id":1,
            "name":"Angelica Ramos",
            "position":	"Chief Executive Officer (CEO)",
            "office": "London",
            "age":"47",
            "date":"2009/10/09",
            "salary":"$1,200,000"					
        },
        {
            "id":2,
            "name":"Ashton Cox",
            "position":	"Junior Technical Author",
            "office": "San Francisco",
            "age":"66",
            "date":"2009/01/12",
            "salary":"$86,000"					
        },
        {
            "id":3,
            "name":"Bradley Greer",
            "position":	"Software Engineer",
            "office": "London",
            "age":"41",
            "date":"2012/10/13",
            "salary":"$132,000"						
        },
        {
            "id":4,
            "name":"Brenden Wagner",
            "position":	"Software Engineer",
            "office": "San Francisco",
            "age":"28",
            "date":"2011/06/07",
            "salary":"$206,850"						
        },
        {
            "id":5,
            "name":"Brielle Williamson",
            "position":	"Integration Specialist",
            "office": "New York",
            "age":"61",
            "date":"2012/12/02",
            "salary":"$372,000"							
        },
        {
            "id":6,
            "name":"Bruno Nash",
            "position":	"Software Engineer",
            "office": "London",
            "age":"38",
            "date":"2011/05/03",
            "salary":"$163,500"						
        },
        {
            "id":7,
            "name":"Caesar Vance",
            "position":	"Pre-Sales Support",
            "office": "New York",
            "age":"21",
            "date":"2011/12/12",
            "salary":"$106,450"						
        },
        {
            "id":8,
            "name":"Cara Stevens",
            "position":	"Sales Assistant",
            "office": "New York",
            "age":"46",
            "date":"2011/12/06",
            "salary":"$145,600"					
        },
        {
            "id":9,
            "name":"Cedric Kelly",
            "position":	"Senior Javascript Developer",
            "office": "Edinburgh",
            "age":"22",
            "date":"2012/03/29",
            "salary":"$433,060"					
        }
    ])
    return <StoreContext.Provider value={{productdata,setProductdata,userdata,setUserdata}}>
        {children}
    </StoreContext.Provider>

}

