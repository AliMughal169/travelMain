import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
const backendUrl = process.env.REACT_APP_BASE_URL;
function Queries() {
    const [mainData,setMainData]=useState([]);
    const [reload,setReload]=useState(false)
    var config=null;
  useEffect(() => {
    config= {
        headers: {
          'Authorization': `Bearer ${sessionStorage.getItem("access_token")}`
        }
      }
        async function fetchQueries() {
            const response=await axios.get(`${backendUrl}v1/admin/queries/allqueries`,config).then((res) => {
                if (res.data.message=="UnAuthorized")
                {
                    history.push('/unauth/login')
                }
                setMainData(res.data.result)
              })
        }
        fetchQueries()
        
    },[ reload])

    const deleteQuery=async(id)=>{
        try {
            const response=axios.delete(`${backendUrl}v1/admin/queries/deleteQuery?_id=${id}`).then((res)=>console.log(res))
            setReload(!reload)
        } catch (error) {
            console.log(error)   
        }
        
    }
    function alerted(id) {
        Swal.fire({
          title: 'Are You Sure you want to Delete?',
          showCancelButton: true,
          confirmButtonText: 'Delete',
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
    
          if (result.isConfirmed) {
            deleteQuery(id)
            refreshPage()
          } else if (result.isDenied) {
            Swal.fire('Changes are not saved', '', 'info')
          }
        })
      }
  return (
    <div className=' container-fluid'>
        <div className=' d-flex justify-content-center align-items-center'>
            <h3 className='bg-dark text-white rounded font-italic p-2 font-weight-bolder '>All Query List </h3>
        </div>
        {mainData.map((data,index)=>{ 
            return(
            <div key={index} className=" my-3 container-fluid  rounded shadow-lg d-flex justify-content-center align-content-center">
                
                <div className='  py-2 container-fluid'>
                    <div className=' d-flex '>
                        <div className=' p-0 container-fluid d-flex justify-content-start'>
                        <b>First Name  : </b><p> {data.firstName}</p>        
                        </div>
                        <div className=' d-flex  container-fluid'>
                        <b>Last Name  : </b><p>{data.lastName}</p>        
                        </div>

                    
                        
                    </div>
                    <div className=' d-flex'>
                    <b>Email :  </b><p> {data.email}</p>    
                    </div>
                    
                    <div className=' d-flex'>
                    <b>Message : </b> <p>{data.message}</p>    
                    </div>
                    
                    
                </div>
                <div className='  d-flex flex-column justify-content-center    align-content-center  '>
                <Button variant='success' className=' my-1' > Edit</Button>

                <Button variant='danger' className='my-1' onClick={()=>alerted  (data._id)}  > Delete</Button>

                </div>
            </div>
            )
        })}
    </div>
  )
}

export default Queries