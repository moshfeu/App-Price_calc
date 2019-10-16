import React from 'react';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

 function Frontpage(props) {
    return (
        <div style={mainContainer}> 
            <img style={imgStyle} alt='application' src='https://images.unsplash.com/photo-1545138697-45eb2968b249?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1559&q=80'/>
            <h1 style={textStyle1}>Do you want to know how much an app will cost you?</h1>
            <h3 style={textStyle3}> If the answer is YES, click on the start button below!</h3>
            <Link to='/questions/type' style={linkStyle}>
                    <Button variant="contained" style={startButton}>Start!</Button>
            </Link>  
        </div>
    )
}
export default Frontpage;
const mainContainer ={
    marginTop: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100vh',
    width: 'vw',
    alignItems: 'center',
    backgroundColor:'#CBF6F5'

}
const textStyle1 = {
   maxWidth:'80vw',
   fontSize:'2rem',
    textAlign: 'center'
}
const textStyle3 = {
    maxWidth:'60vw',
    fontSize:'0.8rem',
     textAlign: 'center'
 }
const startButton = {
    marginTop: '1em',
    backgroundColor:'rgb(10, 216, 78)',
    borderRadius:'15%',
    width: '11em',
    height: '3em'
};

const imgStyle = { 
    boxShadow: '0px 0px 0px 5px rgba(189,189,189,0.57)',
    borderRadius:'50%',
    width:'12em',
    height:'12em',
    opacity:'0.9'
}
const linkStyle = {
    textDecoration: 'none'
}