import React,{useEffect,useState} from 'react'
import { getCategories,deleteCategory, updateCategory } from '../services/allApis'
import { toast } from 'react-toastify'
import VideoCard from './VideoCard'

function Categorylist() {

    const [categoryList,setcategoryList]=useState([])
    useEffect(()=>{
        getdata()
    },[categoryList])


    const getdata=async()=>{
        const result=await getCategories()
        // console.log(result)
        if(result.status==200){
            setcategoryList(result.data)

        }
        
    }


    const deleteCat=async(id)=>{
        const result=await deleteCategory(id)
        console.log(result);
        if(result.status==200){
            getdata()
        }
        
    }


    const dropHandler=async(e,category)=>{
        console.log("dropped");
        const vid=(JSON.parse(e.dataTransfer.getData("video")));
        category.videos.push(vid)
        const result=await updateCategory(category.id,category)
        console.log(result);
        if(result.status==200){
            toast.success(`${vid.title} video added to ${category.title}`)
        }
        else{
            toast.error("video adding category Failed")
        }
    }


      const dragOverHandler=(e)=>{
        console.log("dragging over");
        e.preventDefault()
    }

  return (
    <>
    <div className='container-fluid p-2 mt-3' ></div>
    {

     categoryList.length>0?
     <div>
        {
            categoryList.map(item=>(
            <div className='border m-1'>
                    <div className='m-2 p-3 mb-3 border d-flex justify-content-between '  onDragOver={(e)=>{dragOverHandler(e)}} onDrop={(e)=>{dropHandler(e,item)}}>
                        <h3 style={{color:"black",fontSize:"1.2rem"}}>{item.title}</h3>
                        <button className='btn ' onClick={()=>{deleteCat(item.id)}}>
                            <i className='fa-solid fa-trash' style={{color:"#df0c36",}}/>
    
                        </button>
             </div>

             <div className='border border-light'>
                {
                    item?.videos?.length>0 &&
                    <>
                    {item?.videos?.map(vid=>(
                        <VideoCard video={vid} cat={true}/>
                    ))}
                    </>
                }

             </div>
            </div>

            ))
        }

     </div>

:

<h5>No CATEGORIES</h5>



    }
    
    
    </>
  )
}

export default Categorylist
