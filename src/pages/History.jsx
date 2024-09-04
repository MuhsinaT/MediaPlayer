import React, { useState ,useEffect} from 'react'
import { getHistory ,deleteHistory} from '../services/allApis'

export default function History() {

  const [History,setHistory]=useState([])


  useEffect(()=>{
    getdata()

  },[])


  const getdata=async()=>{
    const result=await getHistory()
    console.log(result);

    if(result.status==200){
      console.log(result.data);
      
      setHistory(result.data)
    }
    else{
      console.log(result);
    }  
  }


  const DelHistory=async(id)=>{
    const res=await deleteHistory(id)
    console.log(res);
    if(res.status==200){
      getdata()
    }
    
    
  }


  return (
    <>
    <div className="p-5">
      <h1 style={{color:"black",fontSize:"1.9rem"}}>Watch History</h1>
      {
        History.length>0?
        <table className='table table-bordered'>
        <thead>
          <tr>
            <th>Video Id</th>
            <th>Title</th>
            <th>Video Url</th>           
             <th>Date and Time</th>
             <th></th>

          </tr>
        </thead>
        <tbody>
          {
          History.map(item=>(
            
          
          <tr>
          <td>{item.videoId}</td>
          <td>{item.title}</td>
          <td>{item.url}</td>
          <td>{item.datetime}</td>
          <td>
            <button className='btn' onClick={()=>{DelHistory(item.id)}} >
              <i className='fa-solid fa-trash ' style={{color:'#df0c36'}} ></i>
            </button>
          </td>
        </tr>

          ))}

        </tbody>
      </table>
      :
    
      <h2>No history Available</h2>


      }
      




    </div>
    
    
    
    </>
  )
}
