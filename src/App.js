import './App.css';
import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';
import Header from './components/header/header.component';
import {auth,createUserDoc} from './firebase/firebase.utils';
import {connect} from 'react-redux'
import { setCurrentUser } from './redux/user/user.actions';


 
class App extends React.Component {
  
  unsubscribeFromAuth=null;

  componentDidMount(){

    // get dispatch from props
    const {setCurrentUser}= this.props;

     this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth=>{
      if(userAuth){

        const userRef =await createUserDoc(userAuth);
        userRef.onSnapshot((snapShot)=>{
          setCurrentUser({
                id : snapShot.id,
                ...snapShot.data()
            })
        })
      }
      console.log(userAuth);

      // action trigger -> setCurrentUser : null
      setCurrentUser(userAuth);
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  
  render(){
    return (
      <div className={'App'}>
        <Header/>
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/signin' component={SignInSignUpPage}/>
        </Switch>
       
      </div>
    );
  }
  
}

const mapDispatchToProps = dispatch =>( {
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null,mapDispatchToProps)(App);
