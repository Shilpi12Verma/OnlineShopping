import React from 'react'
import { useFormik } from 'formik'
import axios from 'axios'
import { Navbar,Nav, Container, Carousel, Card, CardGroup } from 'react-bootstrap'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { MdPlace } from 'react-icons/md'
import {MdEmail} from 'react-icons/md'
import {MdWifiCalling3} from 'react-icons/md'
import './Contact.css'


const validateContact = (formValue) => {
const errors = {};
 
 if(!formValue.FirstName){
     errors.FirstName="Please enter first name";
 }else if(!/^[a-zA-Z\s]+$/.test(formValue.FirstName)){
     errors.FirstName="Invalid firstname";
 }else if(formValue.FirstName.length<5){
     errors.FirstName="Minimum 5 character required"
 }

 if(!formValue.LastNmame){
     errors.LastNmame="Please enter last name";
 }else if(!/^[a-zA-Z\s]+$/.test(formValue.LastNmame)){
     errors.LastNmame="Invalid lastname";
 }else if(formValue.LastNmame.length<5){
  errors.LastNmame="Minimum 5 character required"
}

 if(!formValue.Number){
    errors.Number="Please enter number";
}else if(!/^[0-9]*$/.test(formValue.Number)){
    errors.Number="Invalid number";
}

if(!formValue.PincOde){
    errors.PincOde="Please enter pincode";
}else if(!/^[0-9]*$/.test(formValue.PincOde)){
    errors.PincOde="Invalid pincode";
}else if(formValue.PincOde.length<6){
  errors.PincOde="Minimum 6 character required"
}

console.log("error",errors);
return errors;

};

const Contact = () => {
   const formik=useFormik({
       initialValues:{
        FirstName:'',
        LastNmame:'',
        Number:'',
        City:'',
        PincOde:''
       },
       validate:validateContact,
       onSubmit:(values)=>{
           console.log("received value",values);
           axios.post('https://jsonplaceholder.typicode.com/users',values)
           .then(res=>{
               console.log("responce",res);
           })
           .catch(err=>{
               console.log("error",err);
           })
       }
   })

    return (
        <div className='form'>
        <div className='contact1'>
        <h2 className='span'><span>C</span>ontast <span>U</span>s</h2>
            <form onSubmit={formik.handleSubmit}>
                <input className='input' type="text" name='FirstName' placeholder='Enter firstname..' value={formik.values.FirstName} onChange={formik.handleChange} onBlur={formik.handleBlur}></input><br/>
                {formik.touched.FirstName && formik.errors.FirstName ? <div className='error'>{formik.errors.FirstName}</div>: null}<br/>

                <input className='input' type="text" name='LastNmame' placeholder="Enter lastname.." value={formik.values.LastNmame} onChange={formik.handleChange} onBlur={formik.handleBlur}></input><br/>
                {formik.touched.LastNmame && formik.errors.LastNmame ? <div className='error'>{formik.errors.LastNmame}</div>: null}<br/>

                <input className='input' type="Number" name='Number' placeholder='Enter number..' value={formik.values.Number} onChange={formik.handleChange} onBlur={formik.handleBlur}></input><br/>
                {formik.touched.Number && formik.errors.Number ? <div className='error'>{formik.errors.Number}</div>: null}<br/>

                <select className='select' type="City" name='City' placeholder='select your city..' value={formik.values.City} onChange={formik.handleChange} onBlur={formik.handleBlur}>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Kolkata">Kolkata</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Pune">Pune</option>
                    <option value="Surat">Surat</option>
                </select><br/><br/>

                <input className='input' type="text" name='PincOde' placeholder='Enter pincode..' maxLength="6" value={formik.values.PincOde} onChange={formik.handleChange} onBlur={formik.handleBlur}></input><br/>
                {formik.touched.PincOde && formik.errors.PincOde ? <div className='error'>{formik.errors.PincOde}</div>: null}<br/>

                <input className='input' type="textarea" name='text' placeholder='Enter message..' onChange={formik.handleChange} onBlur={formik.handleBlur}></input><br/><br/>


                <button className='button' type='submit' disabled={!(formik.isValid && formik.dirty)}><b>Send Message</b></button><br/><br/>
              

            </form>
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
        {/* end footer */}

        </div>
        </div>
    )
}

export default Contact

