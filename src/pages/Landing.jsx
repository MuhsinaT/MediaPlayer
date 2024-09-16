import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

function Landing() {
    return (
        <>
            {/* Section 1 */}
            <div className='container-fluid d-flex align-items-center' >
                <Row className='align-items-center' >
                    <Col sm={12} md={6}  className='p-5' style={{marginTop:'80px'}}>
                        <h2 style={{ color: 'black', textAlign: 'center' }}>MEDIA PLAYER 2024</h2>
                        <p style={{ textAlign: 'justify' }}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam facilis dolorem vel commodi id iure hic, recusandae eligendi asperiores et impedit corrupti, voluptatibus veniam libero perferendis earum ipsa placeat. Maxime.
                        </p>
                        <div className='d-grid'>
                            <Link to={'/login'} className='btn btn-outline-danger'>Let's Go</Link>
                        </div>
                    </Col>
                    <Col sm={12} md={6} className='text-center'>
                        <img src="https://niceillustrations.com/wp-content/uploads/2020/12/Youtube-Studio-color-800px.png" alt="" className='img-fluid rounded' style={{ maxHeight: '400px' }} />
                    </Col>
                </Row>
            </div>

            {/* Features Section */}
            <div className='container-fluid mt-5'>
                <h3 className='text-center mb-3'>FEATURES</h3>
                <Row className='d-flex justify-content-around'>
                    <Col xs={12} sm={6} md={4} lg={3} className='mb-4'>
                        <Card style={{ width: '100%',backgroundColor:'white',color:'black', boxShadow:' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
 }}>
                            <Card.Img variant="top" height={'200px'} src="https://cdn.dribbble.com/users/759392/screenshots/9201914/media/6432c05968a1592b64b8feaccc2a7280.gif" />
                            <Card.Body>
                                <Card.Title >Upload Videos</Card.Title>
                                <Card.Text style={{fontSize:'0.95rem',marginTop:'10px',fontWeight:'lighter'}}>
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={3} className='mb-4' >
                        <Card style={{ width: '100%',backgroundColor:'white' ,color:'black', boxShadow:' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                            <Card.Img variant="top" height={'200px'} src="https://cdn.dribbble.com/users/2395254/screenshots/4954611/youtube-mobile.gif" />
                            <Card.Body>
                                <Card.Title>Add Categories</Card.Title>
                                <Card.Text style={{fontSize:'0.95rem',marginTop:'10px',fontWeight:'lighter'}}>
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={3} className='mb-4'>
                        <Card style={{ width: '100%',backgroundColor:'white',color:'black', boxShadow:' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                            <Card.Img variant="top" height={'200px'} src="https://i.pinimg.com/originals/fb/d9/4d/fbd94d180ba459f67cff65dbba88c6fa.gif" />
                            <Card.Body>
                                <Card.Title>Watch History</Card.Title>
                                <Card.Text style={{fontSize:'0.95rem',marginTop:'10px',fontWeight:'lighter'}}>
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>

            {/* Video Section */}
            <div className='p-5 container-fluid' style={{marginTop:'100px'}}>
                <Row>
                    <Col sm={12} md={7} >
                        <h3 style={{color:'black'}}>Simple and Faster</h3>
                        <p style={{ textAlign: 'justify' }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum beatae ea modi dolores sed magnam illo voluptate similique quae quis veniam quo repellendus incidunt exercitationem, omnis, alias nisi magni aliquid!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repellendus impedit quae! Consequuntur laborum, fugit, unde aut maiores voluptatibus mollitia asperiores molestias non odio doloribus totam, consectetur labore voluptatem placeat.
                        </p>
                    </Col>
                    <Col sm={12} md={5} className='text-center'>
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/Tn6-PIqc4UM?si=NO7L89zq5Ukyzonu" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default Landing;
