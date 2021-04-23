import React from "react";
import {Link}  from 'react-router-dom'
export default function Form(props){
    const { values, submit, change, disabled, errors } = props;

    const onSubmit = (evt) => {
      evt.preventDefault();
      submit(evt);
    };

    const onChange = (evt) => {
      const { name, value, checked, type } = evt.target;
      const valueToUse = type === "checkbox" ? checked : value;
      change(name, valueToUse);
    }


    return(
    <form id="pizza-form" onSubmit={onSubmit}>
      <div className="form-group submit">
        <header>
        <h2>Order a Pizza</h2>
        <div className='home-wrapper'>
      <img
        className='home-image'
        src='https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGl6emF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        alt=''
      />
    </div>
        </header>

        {/* <button id="submitBtn" disabled={disabled}>Pizza?</button> */}
        {/* <button id="submitBtn">Pizza?
        </button> */}
           <Link to="./Form">
              <button id="submitBtn"> Pizza?</button>
        </Link >
        <div className="errors">
          {/* 🔥 RENDER THE VALIDATION ERRORS HERE */}
          <div>{errors.username}</div>
          <div>{errors.size}</div>
          <div>{errors.hobbies}</div>
        </div>
      </div>

      <div className="form-group inputs">
        <header>
        <h4>Build your own Pizza</h4>
        </header>
        <label>
          Username&nbsp;
          <input
            id="name-input"
            value={values.username}
            onChange={onChange}
            name="username"
            type="text"
          />
        </label>
      </div>
        
        <label>
          {/* //role */}
          Choice of size(required)&nbsp;
          <select id="size-dropdown" onChange={onChange} value={values.size} name="size">
            <option value="">- Select an option -</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </label>

      <div className="form-group checkboxes">
        <h4>Add Toppings</h4>
        {/* ////////// CHECKBOXES ////////// */}
        <label>
          Pepperoni
          <input
            type="checkbox"
            name="pepperoni"
            checked={values.pepperoni}
            onChange={onChange}
          />
        </label>

        <label>
          Cheese
          <input
            type="checkbox"
            name="cheese"
            checked={values.cheese}
            onChange={onChange}
          />
        </label>

        <label>
          Grilled chicken
          <input
            type="checkbox"
            name="chicken"
            checked={values.chicken}
            onChange={onChange}
          />
        </label>

        <label>
          Veggies
          <input
            type="checkbox"
            name="veggies"
            checked={values.veggies}
            onChange={onChange}
          />
        </label>
        <div>
        <label>
          Special Instructions&nbsp;
          <input
            id="special-text"
            placeholder="Anything else you'd like to add?"
            value={values.comments}
            onChange={onChange}
            name="comments"
            type="text"
          />
        </label>
       </div>
       <div>
          {/* <button>Order</button> */}
          <button id="order-button" disabled={disabled}>Order Pizza</button>
        </div>
      </div>
    </form>


    );
}