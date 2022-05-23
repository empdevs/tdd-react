import React, { useEffect } from 'react'

export default function UserDetail(props) {

  
  useEffect(()=>{

    console.log(props);

  },[]);

  return (
    <div>
      <h1>UserDetail</h1>
      <ul>
        { props.details !== undefined &&
          props.details.map((item)=>{
            return(

              <li key={item.id.toString()}>{item.name} - {item.email}</li>

            );
          })
        }
      </ul>
    </div>
  )
}


