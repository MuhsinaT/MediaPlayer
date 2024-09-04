import React from 'react'
import {Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card';

function Landing() {
  return (
    <>
    <div className='container-fluid mb-5 d-flex align-items-center' style={{height:'80vh'}}>
      <Row>
        <Col className='p-5' sm={12} md={6}> 
        <h2 style={{marginTop:"60px",fontSize:"2.3rem",color:"black"}} >
        <i className="fa-solid fa-play "  style={{color: "#8B0000",}} ></i>
          Media Player 2024
        </h2>
        <p style={{textAlign:'justify',fontSize:"1rem",color:"black",marginTop:"30px"}}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit minus, ab ut nesciunt repellendus ipsum? Ducimus, 
          placeat tenetur blanditiis commodi debitis magni distinctio earum aliquid expedita corrupti dolorum molestias quibusdam!
        </p>
        <div className='d-grid'>
          <Link to={'/login'} className='btn btn-outline-danger' > Let's Go</Link>

        </div>
        </Col>
        <Col className='py-4' sm={12} md={6}>
         <img src="https://img.freepik.com/premium-photo/social-media-marketing-analysis-youtube-channel-grown-3d-illustration_261703-186.jpg" 
         className="img-fluid rounded" alt=""  style={{height:"50vh",marginTop:"20px"}}/>
        </Col>
      </Row>

    </div>



    <div className='container-fluid mt-5'>
   <h3 className='my-3 text-center'>Features</h3>
   <div className='p-4 d-flex justify-content-around'>
  
   <Card style={{ width: '18rem',border:'none',boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',backgroundColor:"white"}}>
      <Card.Img variant="top" src="https://cdn.dribbble.com/users/759392/screenshots/9201914/media/6432c05968a1592b64b8feaccc2a7280.gif" style={{ height: '180px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title style={{color:"black",fontSize:"1.3rem"}}>Upload Youtube Videos</Card.Title>
        <Card.Text style={{color:"black",fontSize:"0.8rem"}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>

      </Card.Body>
    </Card>
    <Card style={{ width: '18rem',border:'none' ,boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',backgroundColor:"white"}}>
      <Card.Img variant="top" src="https://cdn.dribbble.com/users/2395254/screenshots/4954611/youtube-mobile.gif" style={{ height: '180px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title style={{color:"black",fontSize:"1.3rem"}}>Add Categories</Card.Title>
        <Card.Text style={{color:"black",fontSize:"0.8rem"}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>

      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' ,border:'none',boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',backgroundColor:"white"}}>
      <Card.Img variant="top" src="https://images.squarespace-cdn.com/content/v1/531e73abe4b0a6495db73891/1450669240595-3ESB97ZM3MP6BOIF3ZVH/image-asset.gif"  style={{ height: '180px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title style={{color:"black",fontSize:"1.3rem"}}>Watch History</Card.Title>
        <Card.Text style={{color:"black",fontSize:"0.8rem"}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>

      </Card.Body>
    </Card>
   </div>
    </div>


    
    <div className='p-5' style={{marginTop:"50px"}}>
<Row>
  <Col sm={12} md={7}>
    <h4 style={{color:"black"}}>Simple And Faster</h4>
    <p style={{textAlign:'justify',color:"black" ,fontSize:"0.9rem"}}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia cumque debitis ipsum veritatis impedit! Quia nulla tenetur, 
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia cumque debitis ipsum veritatis impedit! Quia nulla tenetur, 
      inventore maiores consequuntur minus totam quos impedit doloribus at saepe. Debitis, consectetur iure.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia cumque debitis ipsum veritatis impedit! Quia nulla tenetur, 
      inventore maiores consequuntur minus totam quos impedit doloribus at saepe. Debitis, consectetur iure?
    </p>
  </Col>
  <Col sm={12} md={5}>
  <iframe width="450" height="250" src="https://www.youtube.com/embed/SqcY0GlETPk?si=fhQbfaH_ej-aCF1c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </Col>
</Row>
    </div>

    </>
  )
}

export default Landing