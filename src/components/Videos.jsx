import React,{useEffect,useState}from 'react'
import { Row,Col } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getVideos } from '../services/allApis'

function Videos({add}) {

  const[video,setVideo]=useState([])
  const [delResponse,setdelResponse]=useState("")

  useEffect(()=>{
    getdata()

  },[add,delResponse])

  const getdata=async()=>{
    const res=await getVideos()
    console.log(res);

    if(res.status==200){
      setVideo(res.data)
    }
    else{
      console.log(res);
    }  
  }



  return (
    <>
    <div className="border border-3 shadow p-5 mb-3" >
      {
        video.length>0?

        <Row>
          {
            video.map(item=>(
              <Col>
              <VideoCard video={item} response={setdelResponse}/>
              </Col>

            ))
          }
       
    </Row>
    :
    <h2 className='text-center text-danger'>No Videos Found</h2>
      }
       


    </div>
    
    
    </>
  )
}

export default Videos
