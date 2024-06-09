import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const View = () => {
    const [data,changeData]=useState([
        
            {
                "_id": "66651683741a512717d92b87",
                "fname": "Manu",
                "lastname": "R",
                "college": "FISAT",
                "dob": "02/04/1999",
                "course": "B-Tech Comp Science",
                "mobile": "+91 95266 7443",
                "email": "aa@gmail.com",
                "address": "Kochi",
                "__v": 0
            },
            {
                "_id": "666516bc741a512717d92b88",
                "fname": "Rahul",
                "lastname": "D",
                "college": "FISAT",
                "dob": "02/01/1992",
                "course": "MCA",
                "mobile": "+91 95266 74440",
                "email": "aa@gmail.com",
                "address": "Test Address",
                "__v": 0
            }
        



    ])
  return (
    <div>
        <Navbar/>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">fname</th>
      <th scope="col">lname</th>
      <th scope="col">college</th>
      <th scope="col">dob</th>
      <th scope="col">course</th>
      <th scope="col">mobno</th>
      <th scope="col">email</th>
    
      <th scope="col">adress</th>
    </tr>
  </thead>
  
  <tbody>
  {data.map(
    (value,index)=>{
        return<tr>
        
        <td>{value._id}</td>
        <td>{value.fname}</td>
        <td>{value.lastname}</td>
        <td>{value.college}</td>
        <td>{value.dob}</td>
        <td>{value.course}</td>
        <td>{value.mobile}</td>
        <td>{value.email}</td>
        <td>{value.address}</td>
      </tr>
    }
  )}
    
   
  </tbody>
</table>
    </div>
  )
}

export default View