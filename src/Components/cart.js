import React, { useEffect, useState } from 'react'
import { Navbar,Nav, Container, ListGroup, Button, Row, Col, Form, Image } from 'react-bootstrap'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { CartState } from '../Context/Contecxt'
import { MdDelete } from 'react-icons/md'
import Rating from '../Components/Rating'
import { MdPlace } from 'react-icons/md'
import {MdEmail} from 'react-icons/md'
import {MdWifiCalling3} from 'react-icons/md'
import './cart.css'

const Cart = (props) => {
      const {
        state: {cart},
        dispatch,
      } = CartState();

      const [total,setTotal] = useState();

      useEffect(() => {
        setTotal(cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0));
      },[cart]);

    return (
        <div>
          <h4 className='carthead'>My Cart</h4>
          <div className='prodcato'>
            <div className='prodcontainer'>
           
              <ListGroup>
                {
                  cart.map((prod) => (
                    <ListGroup.Item key={prod.id}>
                   <Row>
                     <Col md={2}>
                       <Image src={prod.image} alt={prod.name} fluid rounded/>
                     </Col>
                     <Col md={2}><span>{prod.name}</span></Col>
                     <Col md={2}><span>Rs. {prod.price}</span></Col>
                     <Col md={2}><Rating rating={prod.ratings}/></Col>
                     <Col md={2}><Form.Control as="select" value={prod.qty}
                     onChange={(e) =>
                     dispatch({
                       type: "CHANGE_CART_QTY",
                       payload: {
                         id: prod.id,
                         qty: e.target.value,
                       }
                     })}>
                       {[...Array(prod.inStock).keys()].map((x)=> (
                         <option key={x + 1}>{x + 1}</option>
                       ))}
                     </Form.Control></Col>
                     <Col md={2}>
                       <button type="button" className='cartbtn'
                       varient="success"
                       onClick={()=>
                       dispatch({
                         type:"REMOVE_FROM_CART",
                         payload: prod,
                       })
                       }><MdDelete fontSize="20px"/>
                       </button>
                     </Col>
                   </Row>
                   </ListGroup.Item>
                  ))
                }
              </ListGroup>
            </div>
            <div className='filter summary'>
              <span className='title'>SubTotal ({cart.length}) items</span>
              <span style={{fontWeigth:700,fontSize:20}}>Total : Rs. {total}</span>
              <Button type='button' disabled={cart.length === 0}>
                Proceed to Checkout
              </Button>
            </div>
          </div>
      

            {/* start socialmedia */}
            <div>
             <Navbar className='bar'>
                <Container>
                <Navbar.Brand>
                <div className='hed'>Get Connected with us on Social Networks!</div></Navbar.Brand>
                <Nav className="link">
                <Nav.Link href="https://www.facebook.com/"><FacebookIcon/></Nav.Link>
                <Nav.Link href="https://twitter.com/"><TwitterIcon/></Nav.Link>
                <Nav.Link href="https://www.mail.com/mail/u/0/#inbox"><EmailIcon/></Nav.Link>
                <Nav.Link href="https://linkddin.com/"><LinkedInIcon/></Nav.Link>
                <Nav.Link href="https://www.instagram.com/"><InstagramIcon/></Nav.Link>
                </Nav>
                </Container>
            </Navbar>
            {/* end socialmedia */}

        {/* start footer */}
        <footer>
            <div className='fhead'>
            <div className='row'>
                <div className='col-12 col-lg-10 mx-auto'>
                    <div className='row'>
                    <div className='col-6 col-lg-3'>
                            <h5>GENERAL</h5>
                            <ul>
                             <li>
                               <a href='#'>FAQ</a>
                             </li>
                             <li>
                               <a href='#'>Size charts</a>
                             </li>
                             <li>
                               <a href='#'>Return and delivery</a>
                             </li>
                         </ul>
                        </div>
                        <div className='col-6 col-lg-3'>
                            <h5>COLLECTIONS</h5>
                            <ul>
                             <li>
                               <a href='#'>Men spring-summer</a>
                             </li>
                             <li>
                               <a href='#'>Women spring-summer</a>
                             </li>
                             <li>
                               <a href='#'>Girls summer-autumn</a>
                             </li>
                             <li>
                               <a href='#'>Boys summer-autumn</a>
                             </li>
                             <li>
                               <a href='#'>Women autumn-winter</a>
                             </li>
                             <li>
                               <a href='#'>Men autumn-winter</a>
                             </li>
                            </ul>
                        </div>
                        <div className='col-6 col-lg-3'>
                            <h5>ABOUT US</h5>
                            <ul>
                             <li>
                               <a href='#'>Company</a>
                             </li>
                             <li>
                               <a href='#'>Career</a>
                             </li>
                             <li>
                               <a href='#'>Terms and conditions</a>
                             </li>
                            </ul>
                        </div>
                        <div className='col-6 col-lg-3'>
                            <h5>CONTACTS</h5>
                            <ul>
                             <li>
                               <a href='#'><MdPlace/>Chittaranjan, West Bangal, IND</a>
                             </li>
                             <li>
                               <a href='#'><MdEmail/>shilpikumaricrj@gmail.com</a>
                             </li>
                             <li>
                               <a href='#'><MdWifiCalling3/>+91 9002018614</a>
                             </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr/>
                <div>
                  <p>Copyright @ 2021 Markito.All right reserved </p>
                </div>
            </div>
            </div>
        </footer>
        </div>
        {/* end footer */}
        </div>
    )
}

export default Cart
