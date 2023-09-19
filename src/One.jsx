import React from 'react'


function One({someobject}) {
  return (
    <div>
      <h1>{someobject.username}</h1>
      <h1>{someobject.age}</h1>
      <img src={someobject.image} alt="" />
    </div>
  )
}

export default One
