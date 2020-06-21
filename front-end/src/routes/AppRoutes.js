import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { RecipeList } from '../pages/Recipe/RecipeList';
import { AppSignIn } from '../components/Authentication/AppSignIn';
import { AppSignUp } from '../components/Authentication/AppSignUp';
import { ForgotPassword } from '../components/Authentication/ForgotPassword';
import { RecipeDetails } from '../pages/Recipe/RecipeDetails';
import { RecipeCreate } from '../pages/Recipe/RecipeCreate';
import { RecipeEdit } from '../pages/Recipe/RecipeEdit';
import { Home } from '../pages/Home/Home';
import ProtectedRoute from '../components/ProtectedRoute';

export const AppRoutes = () => {
  return (
    <Switch>
      <Redirect exact from='/' to='/recipes' />
      <Route exact path='/recipes' component={RecipeList} />
      <Route path='/signup' component={AppSignUp} />
      <Route path='/signin' component={AppSignIn} />
      <Route path='/forgotpassword' component={ForgotPassword} />
      <ProtectedRoute exact path='/recipes/create' component={RecipeCreate} />
      <ProtectedRoute exact path='/recipes/:id/edit' component={RecipeEdit} />
      <Route exact path='/recipes/:id' component={RecipeDetails} />
      <ProtectedRoute path='/home' component={Home} />
    </Switch>
  );
};
