import React from 'react'


function Alert(prop) {
  return (
   prop.alert && <div className={`alert alert-${prop.alert.type}`} style={{color:prop.textColor}} role="alert">
  {prop.alert.msg} 
  </div>
  )
}

export default Alert



