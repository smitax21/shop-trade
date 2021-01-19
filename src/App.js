import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from './Pages/Homepage/HomePage.component';
import ShopPage from './Pages/Shop/Shop.component';
import Header from './components/Header/Header.component';
import SignInAndSignUp from './Pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './Firebase/Firebase.utils';
import { setCurrentUser } from './redux/user/user.action';

class App extends React.Component{

  unsubscribeFromAuth = null

  componentDidMount(){
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            
              id: snapShot.id,
              ...snapShot.data()
            
          })
        })
        
      }
        setCurrentUser(userAuth);      
    })
    
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' 
            render={() => this.props.currentUser ? (
              <Redirect to='/'/>
              ) : (
              <SignInAndSignUp />
            )} />
        </Switch>
      </div>
  );
};
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
