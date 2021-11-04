import React from 'react';
import './App.css';

import { Route, withRouter, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import store from './redux/reduxStore';
import { compose } from 'redux';


import HeaderContainer from './components/Header/HeaderContainer';

import Login from "./components/Login"
import PrivateRoute from "./components/PrivateRoute"
import ForgotPassword from './components/ForgotPassword';
import UpdateProfile from "./components/UpdateProfile"
import { AuthProvider } from './contexts/authContext';
import withSuspense from './hoc/withSuspence';
import Test from './components/Test';
import MainPage from './components/MainPage';
import Movies from './components/Movies';




const Signup = React.lazy(() => import('./components/SignUp'));
//const Login = React.lazy(() => import('./components/Login'));


class App extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
  }

  render() {
    return (
      <div className="app-wrapper">
        <header className="header"><HeaderContainer /></header>
        <div className="content">

          {/* <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)} /> */}
          <PrivateRoute path="/update-profile" component={UpdateProfile} />
          <Route path="/signup" component={withSuspense(Signup)} />
          <Route path="/login" component={Login} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/test" component={Test}></Route>

          <PrivateRoute path="/main" component={MainPage}></PrivateRoute>
          <PrivateRoute path="/movies" component={Movies}></PrivateRoute>
        </div>
      </div>

    )
  }
}


let AppContainer = compose(
  withRouter,
)(App);

let MainApp = (props) => {
  return (
    <BrowserRouter basename='/netflix'>
      <Provider store={store}>
        <AuthProvider>
          <AppContainer />
        </AuthProvider>
      </Provider>
    </BrowserRouter>
  )
}


export default MainApp;