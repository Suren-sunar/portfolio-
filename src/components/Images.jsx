import React from 'react'

 const Images = ({imageurl, title}) => {
  return (
    <>
<div>
<h3>{title}</h3>
<img src={imageurl} alt={title} />
</div>
    </>
  )
}
export default Images