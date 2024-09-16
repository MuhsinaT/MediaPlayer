import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addVideo } from '../services/allApis';
import { toast } from 'react-toastify';

function AddVideo({response}) {

    const [show, setShow] = useState(false);

    const[video,setVideo]=useState({
      videoId:"",title:"",imageUrl:"",videoUrl:""
    })
    console.log(video);


    const handleUpload= async()=>{
      console.log(video)
      const {videoId,title,imageUrl,videoUrl}=video
      if(!videoId || !title || !imageUrl || !videoUrl){
        // alert("please enter valid Input")
        toast.warning("Please enter valid input !!!")
      }
      else{

        try{
          const vurl=videoUrl.split("v=")[1]
          console.log(vurl);
          const eurl=`https://www.youtube.com/embed/${vurl}?si=kumw9VmhVP5Tj5Oz&autoplay=1`
          video.videoUrl=eurl
               
          const res=await addVideo(video)
          console.log(res);
          if(res.status==201){
            // alert("Upload successfully")
            toast.success("Upload SuccessFull!!")
            handleClose()
            response(res)
          }
          else{
            // alert("Upload Failed!!")
            toast.error("Upload Failed!!")
          }
        }

        catch(err){
          console.log(err);
          toast.error("Upload Failed!!")
          
        }
        
      }
      
    }
    

    const handleClose = () => {
      setShow(false)
      setVideo({
        videoId:"",title:"",imageUrl:"",videoUrl:""
      })
      
    };
    const handleShow = () => setShow(true);
  return (
    <>
    <button className='btn' onClick={handleShow} >
    <i className="fa-solid fa-circle-plus" style={{color:"#ffd436"}} />
    </button>
    
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <FloatingLabel controlId="floatingId" label="Video Id" className="mb-3" >
        <Form.Control type="number" placeholder="1"  onChange={(e)=>{setVideo({...video,videoId:e.target.value})}}/>
        </FloatingLabel>

      <FloatingLabel controlId="Vtitle" label="Video Title" className='mb-3'>
      <Form.Control type="text" placeholder="title" onChange={(e)=>{setVideo({...video,title:e.target.value})}} />
      </FloatingLabel>


      <FloatingLabel controlId="imageurl" label="Video Image Url" className='mb-3'>
      <Form.Control type="text" placeholder="url"  onChange={(e)=>{setVideo({...video,imageUrl:e.target.value})}} />
      </FloatingLabel>

      <FloatingLabel controlId="Vurl" label=" Youtube Video url" className='mb-3'>
      <Form.Control type="text" placeholder="url" onChange={(e)=>{setVideo({...video,videoUrl:e.target.value})}} />
      </FloatingLabel>

"

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpload}>Upload</Button>
        </Modal.Footer>
      </Modal>

    
    </>
  )
}

export default AddVideo
