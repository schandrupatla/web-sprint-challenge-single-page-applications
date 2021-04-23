import React from "react";
export default function Home(props){
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
    <form className="form container" onSubmit={onSubmit}>
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

        <button id="submitBtn" disabled={disabled}>Pizza?</button>

        <div className="errors">
          {/* 🔥 RENDER THE VALIDATION ERRORS HERE */}
          <div>{errors.username}</div>
          <div>{errors.email}</div>
          <div>{errors.role}</div>
          <div>{errors.civil}</div>
        </div>
      </div>

      <div className="form-group inputs">
        <header>
        <h4>Build your own Pizza</h4>
        </header>
        <label>
          Username&nbsp;
          <input
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
          <select onChange={onChange} value={values.size} name="size">
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
            placeholder="Anything else you'd like to add?"
            value={values.comments}
            onChange={onChange}
            name="comments"
            type="text"
          />
        </label>
       </div>
       <div>
          <button>Order</button>
        </div>
      </div>
    </form>


    );
}