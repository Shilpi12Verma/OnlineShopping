import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './ProductCategory.css'
import { CartState } from '../../Context/Contecxt';
import SingleProduct from '../../Components/SingleProduct';
import Filters from '../../Components/filters';
import { MdPlace } from 'react-icons/md'
import {MdEmail} from 'react-icons/md'
import {MdWifiCalling3} from 'react-icons/md'



const ProductCategory = () => {
  const {
    state: {products},
  productState: {sort, byStock, byFastDelivery, byRating, searchQuery}
} = CartState();
// console.log("products",products);

const transformProducts = () => {
  let sortedProducts = products;
  if ( sort ) {
    sortedProducts = sortedProducts.sort((a, b) =>
      sort === "lowToHigh" ? a.price - b.price : b.price - a.price);
  }
  return sortedProducts;
};
    return (

        <div>
        <div className='prodcato'>
        <Filters/>
         <div className='prodcontainer'>
         {
          transformProducts().map((prod)=>{
             return <SingleProduct prod={prod} key={prod.id}/>
           })
         }
          </div>
          </div>


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

export default ProductCategory
