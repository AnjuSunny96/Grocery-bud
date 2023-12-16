import React, { useEffect } from 'react';

function Alert({msg,type,removeAlert,list}) {

  useEffect(()=>{
    const timerOut=setTimeout(() => {
      removeAlert()
    }, 3000)
    return()=>timerOut
  },[list])

  return (
    <p className={`alert alert-${type}`}>{msg}</p>
  )
}

export default Alert