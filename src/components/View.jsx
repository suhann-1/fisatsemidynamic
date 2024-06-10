import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const View = () => {
    const [data,changeData]=useState([])
     const fetchData=()=>{
        axios.get("https://courseapplogix.onrender.com/getdata").then(
            (response)=>{
                changeData(response.data)
            }
        ).catch().finally()

     }
     useEffect(()=>{fetchData()},[])
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
        <td>{value.firstname}</td>
        <td>{value.lastname}</td>
        <td>{value.college}</td>
        <td>{value.dob}</td>
        <td>{value.course}</td>
        <td>{value.mob}</td>
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