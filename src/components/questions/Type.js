import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faAndroid, faAngellist  } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

 function Type() {
    return (
        <div style={mainContainer}>
            <h1>What platform you want your app to be built on?</h1>
                <Link to='/questions/social' style={linkStyle}>
                    <IconButton>
                        <FontAwesomeIcon icon={faApple}/>
                    </IconButton>
                </Link>
                <h6>Apple</h6>
                <Link to='/questions/social' style={linkStyle}>
                    <IconButton>
                        <FontAwesomeIcon icon={faAndroid}/>
                    </IconButton>
                </Link>
                <h6>Android</h6>
                <Link to='/questions/social' style={linkStyle}>
                    <IconButton>
                        <FontAwesomeIcon icon={faAngellist}/>
                    </IconButton>
                </Link>
                <h6>Both</h6> 
        </div>
    )
}
export default Type;

const linkStyle = {
    textDecoration: 'none'
}
const mainContainer ={
    marginTop: 'auto',
    display: 'grid',
    gridTemplateColumns: '1fr, 1fr, 1fr',
    gridTemplateRows: '1fr, 1fr',
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