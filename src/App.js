//import React from "react";
//sree
import { Route, Link, Switch } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import Form from './Form'
import Home from './Home'
import axios from 'axios'
import schema from './formSchema'
import * as yup from 'yup'
//sree

const initialFormValues = {
  username: "",
  size: "",
  pepperoni: false,
  cheese: false,
  chicken: false,
  veggies: false,
  comments:""
  
};

const initialFormErrors = {
  username: "",
  size: "",
  pepperoni: false,
  cheese: false,
  chicken: false,
  veggies: false,
  comments:"",
};
const initialDisabled = true;

const App = () => {
  //states
 const [orders, setOrders] = useState([{username:"", size:"", pepperoni:false, cheese:false, chicken:false, veggies:false,comments:""}]); // array of user objects
const [formValues, setFormValues] = useState(initialFormValues); // object
 const [formErrors, setFormErrors] = useState(initialFormErrors); // object
 const [disabled, setDisabled] = useState(initialDisabled); // boolean

 const inputChange = (name, value) =>{
  yup
  .reach(schema, name) 
  .validate(value) 
  .then(() => {
    setFormErrors({
      ...formErrors,
      [name]: "",
    });
  })
  .catch((err) => {
    setFormErrors({
      ...formErrors,
      [name]: err.errors[0],
    });
  });

  setFormValues({
    ...formValues, [name]:value,
  });
 }

 const postNewOrder = (newOrder) => {
  axios
    .post("https://reqres.in/api/orders", newOrder)
    .then((res) => {
      console.log(res.data);
      setOrders([res.data, ...orders]);
      setFormValues(initialFormValues);
    })
    .catch((err) => {
      console.log(err);
      debugger;
    });
};

const formSubmit = () => {
  const newOrder = {
    username: formValues.username.trim(),
    size: formValues.size,
    comments: formValues.comments.trim(),
    toppings: ["pepperoni", "cheese", "chicken", "veggies"].filter(
      (topping) => formValues[topping]
    ),
  };
  postNewOrder(newOrder);
};

useEffect(() => {
  // debugger
  schema.isValid(formValues).then((valid) => {
    setDisabled(!valid);
  });
}, [formValues]);

  <Switch>
        <Route path={'/:id'}>
          <Home />
          </Route>

          <Route path='/confirmation'>
          <confirmation />
        </Route>
          
          <Route path='/pizza'>
          <Form />
          </Route>
  </Switch>



  return (
    <>
      {/* <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p> */}
      <div className="container">
      <header>
        <h1>Pizza App</h1>
        {/* <button id="submitBtn" >Pizza?</button> */}
        
      </header>
      <Form  id="pizza-form" 
         values ={formValues}
         change={inputChange}
         submit={formSubmit}
         disabled={disabled}
         errors={formErrors}
      />
      </div>
     
    </>
  );
};
export default App;
