import React from 'react'
import { Navigate} from 'react-router-dom'
import * as ROUTES from '../constants/routes'



export const RedirectRoute = ({ user, children, redirectPath, ...rest }) => {
  if (!user) {
    return children;
  }
  if(user){
    console.log('i am a user', redirectPath)
    return <Navigate to={redirectPath} />;
  }

  return 
}; 

export const ProtectedRoute = ({ user, children, ...rest }) => {
    if (!user) {
        console.log("i am not a user")
      return <Navigate to={ROUTES.SIGN_IN} />;
    }
    if(user){
      return children;
    }
  
    return 
  }; 


