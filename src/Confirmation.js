import React from "react";
function Confirmation(details){
    if (!details) {
        return <h3>Working fetching your username&apos;s details...</h3>
  
      }
      console.log(details);


    return (
        <div className='order container'>
          <h2>{details.username}</h2>
            <h3>Your Order is on the way!</h3>  
        </div>
      )

}