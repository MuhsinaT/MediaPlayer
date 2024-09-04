import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

function Header() {
  const nav=useNavigate()

  const lgout=()=>{
    nav('/')
    sessionStorage.removeItem('userData')
  }
  return (
   <>

<Navbar className="bg-body-tertiary" style={{boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}} >
        <Container>
          <Navbar.Brand href="#home">
          <i className="fa-solid fa-video fa-beat" style={{color:"#8B0000",fontSize:"1.5rem"}} />            {' '}
<span style={{fontSize:"1.7rem"}}>
Media Player  
</span>          </Navbar.Brand>
        </Container>
        <button className='btn btn-danger' onClick={lgout}>Logout</button>
      </Navbar>
   
   
   </>
  )
}

export default Header
