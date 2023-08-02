import React from 'react'
import '../components/Card.css'
import img from '../images/ICON.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import { Row } from 'react-bootstrap'

function Card(props) {
  return (
    <div>
     <div className='cardbox rounded-2 p-4 mt-4 w-75 w-md-75'>
    <Row>
        <div className='d-flex flex-row'>
            <div className='col-3'> 
               <div className='p-2'>
                <img src={img} alt="image"></img>
               </div>
            </div>
            <div className='col-9'>
                <div className='content p-2'>
                        <p>{props.icontitle}</p>
                        <h5>{props.variant}</h5>
                </div>
            </div>
        </div>
        
    </Row>
    <Row>
        <div className='d-flex flex-row'>
            <div className='p-2'>
    <p  className="fs-6 texts">{props.details}</p>
            </div>
        </div>
    </Row>
    <Row>
    <div className='d-flex flex-row '>
            <div className='p-2 d-flex duration'>
   <h1 className='pt-3 pt-md-1 fs-1'>${props.price}</h1> <p  className="fs-4 pt-3">/{props.duration}</p>
            </div>
        </div>
    </Row>
    <Row>
    <div className='d-flex flex-row '>
            <div className='pt-2 d-flex flex-column'>
            <div className='col-12'>
            <h6 className='ms-2 text-left whatsh6'>What’s included</h6>
            </div>
            <div className=' ms-2 pt-4 col-12 pt-0'>
                <Row>
                   <div className='d-flex flex-row  mt-2'>
                   <div className='iconw'>
                        <div className='trick text-center'>
                        <FontAwesomeIcon icon={faCheck} style={{color: "#ffffff",backgroundColor:"#7e59fa",padding:'10px',borderRadius: '50%'}} />                        </div>
                    </div>
                    <div className='iconw px-4'>
                        <p>All analytics features</p>
                    </div>
                   </div>
                   <div className='d-flex flex-row  mt-2'>
                   <div className='iconw'>
                        <div className='trick text-center'>
                        <FontAwesomeIcon icon={faCheck} style={{color: "#ffffff",backgroundColor:"#7e59fa",padding:'10px',borderRadius: '50%'}} />                        </div>
                    </div>
                    <div className='iconw px-4'>
                        <p>All analytics features</p>
                    </div>
                   </div>
                   <div className='d-flex flex-row  mt-2'>
                   <div className='iconw'>
                        <div className='trick text-center'>
                        <FontAwesomeIcon icon={faCheck} style={{color: "#ffffff",backgroundColor:"#7e59fa",padding:'10px',borderRadius: '50%'}} />                        </div>
                    </div>
                    <div className='iconw px-4'>
                        <p>All analytics features</p>
                    </div>
                   </div>
                </Row>
                <Row>
    <div className='d-flex flex-row'>
            <div className='p-2 d-flex'>
                <div className='cardbtn text-center mx-auto'>
                <button className='btn'>Choose this Plan</button>
                </div>
            </div>
        </div>
    </Row>
            </div>
            </div>
        </div>
    </Row>


  
    </div>
    </div>
  )
}

export default Card