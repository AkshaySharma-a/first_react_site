import React from 'react'


function Alert(prop) {
  return (
    <div style={{height:"40px"}} >
  { prop.alert && <div className={`alert w-100 d-inline-block alert-${prop.alert.type}`} style={{color:prop.textColor}} role="alert">
  {prop.alert.msg} 
  </div>}
  </div>
  )
}

export default Alert



