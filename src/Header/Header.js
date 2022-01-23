import React, {useEffect} from 'react'
import { Navbar,Nav, Container, FormControl, Dropdown, Badge, Button } from 'react-bootstrap'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import './Header.css'
import { RiShoppingCart2Fill, RiContactsBook2Line } from 'react-icons/ri'
import { CartState } from '../Context/Contecxt'
import { AiFillDelete, AiFillHome, AiOutlineLogin } from 'react-icons/ai'
import { IoIosContact } from 'react-icons/io'
import { MdProductionQuantityLimits } from 'react-icons/md'
import { SiGnuprivacyguard } from 'react-icons/si'
import {HiShoppingCart} from 'react-icons/hi'
import Profile from '../Profile/Profile'


const Header = () => {
    let location = useLocation();
    useEffect(()=>{
        console.log("location", location, "\nPathName:", location.pathname);
    },[location])
    // const navigate=useNavigate();
    // const Logout=()=>{
    //     window.localStorage.clear();
    //     navigate("/login_page");
    // }

    const {state: {cart},
    dispatch,
    productDispatch
    } = CartState(); 

    return (
        <div>
            <Navbar className='navbar'>
                <Container >
                <Navbar.Brand href="#home" >
                <div className='navb'><font>M</font>arkito</div></Navbar.Brand>
                <Navbar.Text>
                    <FormControl style={{width:260}} placeholder="Search a product"
                        className="m-auto"
                        onChange={(e) => {
                            productDispatch({
                                type: "FILTER_BY_SEARCH",
                                payload: e.target.value,
                            });
                        }}
                    />
                </Navbar.Text>

                <Nav>
                <Dropdown style={{ minWidth:15, margin:20}}>
                <Dropdown.Toggle varient="success">
                    <RiShoppingCart2Fill color="white" fontSize="20px"/>
                    <Badge>{cart.length}</Badge>
                </Dropdown.Toggle>

                <Dropdown.Menu style={{ minWidth:300}}>

                 {cart.length > 0 ? (
                     <>
                       {
                         cart.map(prod => (
                          <span className='headcartitem' key={prod.id}>
                              <img src={prod.image}
                              className="headcartitemimg"
                              alt={prod.name}/>
                              <div className='cartitemdetail'>
                                  <span>{prod.name}</span>
                                  <span> Rs. {prod.price.split(".")[0]}</span>
                              </div>
                              <AiFillDelete fontSize="20px" style={{cursor:"pointer"}}
                              onClick={() => 
                              dispatch({
                                  type:"REMOVE_FROM_CART",
                                  payload: prod,
                              })}/>
                          </span>
                         ))}
                         <Link to="/cart_page">
                             <Button style={{ width: "95%", margin: "0 10px"}}>
                                 Go To Cart
                             </Button>
                         </Link>
                     </>
                 ):(<span style={{padding:15}}>Cart is empty!</span>)}

                </Dropdown.Menu>
                </Dropdown>

                <Nav.Link as={Link} className={`mylink ${location.pathname==="/home_page" ? "active":""}`} to="/home_page"><AiFillHome/>Home</Nav.Link>
                <Nav.Link as={Link} className={`mylink ${location.pathname==="/about_page" ? "active":""}`} to="/about_page"><RiContactsBook2Line/>About</Nav.Link>
                <Nav.Link as={Link} className={`mylink ${location.pathname==="/login_page" ? "active":""}`} to="/login_page"><AiOutlineLogin/>Login</Nav.Link>
                <Nav.Link as={Link} className={`mylink ${location.pathname==="/contact_page" ? "active":""}`} to="/contact_page"><IoIosContact/>Contact </Nav.Link>
                <Nav.Link as={Link} className={`mylink ${location.pathname==="/product_page" ? "active":""}`} to="/product_page"><MdProductionQuantityLimits/>Product</Nav.Link>
                <Nav.Link as={Link} className={`mylink ${location.pathname==="/regis_page" ? "active":""}`} to="/regis_page"><SiGnuprivacyguard/>Sign Up</Nav.Link>
                <Nav.Link as={Link} className={`mylink ${location.pathname==="/cart_page" ? "active":""}`} to="/cart_page"><HiShoppingCart/>Cart</Nav.Link>
                <Nav.Link as={Link} to="/profile_page"><Profile/></Nav.Link>

                {/* <Button onClick={Logout}>Log Out</Button> */}
               
                </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
