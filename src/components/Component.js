import React, { useState } from 'react';


const Component = (props) => {
  const [error, setError] = useState(false);
  props.change(setError);
  if(error){
    throw new Error("My error");
  }
  return 
    <div>
      {error && <div>{""}</div>}
    </div>
  
}

export default Component;
