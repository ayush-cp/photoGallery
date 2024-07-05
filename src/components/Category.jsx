import React from 'react'
// import wallpaper from '../assets/wallpaper.png'
export default function Category(props) {
  const categoryStyle = {
    backgroundImage : `url(${props.backImage})`,
    backgroundSize : 'cover',
    backgroundPosition : 'center',
    
  }
  // console.log(`url(${props.backImage})`)
  return (
    
    <div className='category' style={categoryStyle}>
      <h2 className='wallpaper' >{props.name}</h2>
      {/* <img src={wallpaper} alt="" className='wallpaper'/> */}
    </div>
  )
}
