import React from 'react'
import { Navbar,Nav, Container, Carousel, Card, CardGroup } from 'react-bootstrap'
import './Home.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ImageAvatars from './Avtar';
import ImageAvatars1 from './Avtar1';
import { MdPlace } from 'react-icons/md'
import {MdEmail} from 'react-icons/md'
import {MdWifiCalling3} from 'react-icons/md'


const Home = () => {
   
    return (
        //  start Carousel
        <div>
            <Carousel variant="dark">
            <Carousel.Item>
                <img
                className="home_img"
                src="image/img1.jpg"
                alt="First slide"
                />
                <Carousel.Caption>
                <h2 className='hurry'>Hurry Up..Sale Is Live</h2><br/>
                <button className='but'><b>Shop Now</b></button>
                </Carousel.Caption><br/>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="home_img"
                src="image/img2.jpg"
                alt="Second slide"
                />
                <Carousel.Caption >
                <h5 className='hurry'>Hurry Up..Sale Is Live</h5><br/>
                <button className='but'><b>Shop Now</b></button>
                </Carousel.Caption><br/>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="home_img"
                src="image/img3.jpg"
                alt="Third slide"
                />
                <Carousel.Caption>
                <h5 className='hurry'>Hurry Up..Sale Is Live</h5><br/>
                <button className='but'><b>Shop Now</b></button>
                </Carousel.Caption><br/>
            </Carousel.Item>
            </Carousel>
         {/* end Carousel */}
        
            <div><br/>
              <ImageAvatars/>
            </div><br/>
            
            {/* start card */}
            <CardGroup>
                <Card className='class'>
                  <Card.Body>
                    <Card.Title className='word'></Card.Title> <Card.Img variant="top" className='pic'
                    src="image/women1.jpg" />
                    <p className='para1'>Get 50% OFF</p>
                    <p className='para2'> On Women Collection</p>
                    <p className='para3'> <b>Shop Now</b></p>
                  </Card.Body>
                </Card>
                <Card className='class'>
                <Card.Body>
                <Card.Title className='word'></Card.Title> <Card.Img variant="top" className='pic'
                src="image/homeman.jpg" />
                <p className='para1'>Get 50% OFF</p>
                <p className='para2'>On Men Collection</p>
                <p className='para3'> <b>Shop Now</b></p>
                  </Card.Body>
                </Card>
            </CardGroup><br/>
            {/* end card */}

            {/* <start product feature */}
            <div>
            <p className='paragraph'><span>N</span>ew<span>A</span>rrivals <img className='simg' src='image/s8.jpg' />
            Price:Rs.500<br/>
            <button type='button' className='feature'>Add to cart</button></p><br/>
            <img className='simg' src='image/s1.jpg' />
            <img className='simg' src='image/s4.jpg' /><br/>
            <img className='simg' src='image/s5.jpg' />
            <img className='simg' src='image/s6.jpg' />
            <img className='simg' src='image/s7.jpg' />
            </div>
            {/* <end product feature */}

            <div className='DIV'>
            <p className='discount'>Get 60% Discount On Best Price & Great Quality</p><img className='simg1' src='image/ring1.jpg' /><br/>
            <p></p>
            <button type='button' className='homebut'>Shop Now</button><br/>
            </div><br/>

             <div><ImageAvatars1/></div><br/>

          {/* start socialmedia */}
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
        {/* end footer */}

        </div>
    )
}

export default Home
