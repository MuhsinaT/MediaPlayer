import React from 'react'
import {Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <>
    <div className='bg-light py-2 container-fluid'>
     <Row className='p-5'>
    <Col sm={12} md={5}>
      <h3 style={{fontSize:"1.5rem"}}>Media Player 2024</h3>
      <p style={{textAlign:'justify',fontSize:"0.9rem"}}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita dolorem molestiae corporis quasi? Minus consectetur mollitia obcaecati
         repellendus cupiditate ducimus, sunt vitae dolore dicta perspiciatis quibusdam modi, iste quis officia.
      </p>
    </Col>
    <Col sm={12} md={2}>
      <h3 style={{fontSize:"1.5rem"}}>Links</h3>
      <div className='d-flex flex-column'>
           <Link to={'/'}>Landing </Link>
           <Link to={'/home'}>Home </Link>
           <Link to={'/history'}>History</Link>

      </div>
    </Col>
    <Col sm={12} md={5}>
      <h3 style={{fontSize:"1.5rem"}}>FeedBack</h3>
      <textarea name='' id='' className='form-control'></textarea>
      <button className='btn btn-info mt-4'>send</button>
    </Col>
      </Row> 

    </div>
    </>
  )
}

export default Footer