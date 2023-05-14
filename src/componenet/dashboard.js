import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { useNavigate}  from 'react-router-dom'
import {toast} from 'react-toastify'
import{url}from '../App'
import axios from 'axios';

function Dashboard() {
  let [data,setData] = useState([])
  let token = sessionStorage.getItem('token')
  let navigate = useNavigate() 

  let getData = async()=>{
     try {
       let res = await axios.get(`${url}/users`,
       {headers:{Authorization:`bearer ${token}`}})
     } catch (error) {
      toast.error(error.response.data.message)
     }
  }

  useEffect(()=>{
    if(token){
     getData()
    }
    else{
      toast.error("session expired")
      sessionStorage.clear()
      navigate('/login')
    }
  })
  return <>
   <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        
      </tbody>
    </Table>
  </>
}

export default Dashboard