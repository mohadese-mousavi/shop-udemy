import React from 'react';
import './header.style.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import  CardIcon  from '../card-icon/card-icon.component';
import  CardDropDown  from '../card-dropdown/card-dropdown.component';
import { Link } from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';


const Header = ({currentUser,hidden}) => (
   
    <div className="header">
       
        <Link className="logo-container" to='/'>
            <Logo className="logo"/>
        </Link>
        <div className="options">
            <Link className="option" to="/shop">SHOP</Link>
            <Link className="option" to="/shop">CONTACT</Link>
            {
                currentUser ?
                (<div className="option" onClick={ ()=> auth.signOut()}>SIGN OUT</div> )
                :
                (<Link className="option" to='/signin' onClick={()=> console.error(`user signed out!!!`) }>SIGN IN</Link>)
            }

            <CardIcon/>
        </div>

            {
                hidden?null:
                <CardDropDown/>

            }
    </div>
)


// get states from root-reducer in redux
const mapStateToProps= ({card:{hidden},user:{currentUser}}) =>({
    currentUser,
    hidden
})
export default connect(mapStateToProps)(Header);