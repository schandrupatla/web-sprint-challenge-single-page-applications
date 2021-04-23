import React from 'react'
import { useHistory } from "react-router-dom";
import Form from './Form'

    export default function Home(props){
        const { values, submit, change, disabled, errors } = props;
    

        const routeToShop = () => {
            // navigate to localhost:1234/items-list
            // history.push('/Form')
        }


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
        <div className='home-wrapper'>
            <img
                className='home-image'
                src='https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGl6emF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                alt=''
            />

            <div>
            <button
                onClick={routeToShop}
                className='md-button shop-button'
            >
                Pizza?
            </button>
            </div>

            <Form/>
      </div>

    )
}