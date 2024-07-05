import React from 'react'
import Category from './Category'
import cars from '../assets/cars.jpg'
import city from '../assets/city.jpg'
import fish from '../assets/fish.jpg'
import flowers from '../assets/flowers.jpg'
import mountains from '../assets/mountains.jpg'
import { Link } from 'react-router-dom'
export default function CategoryCollection() {
 
  return (
    <div className='categoryCollection'>
      <div className="categories">
        <Link to='/images'>
      <Category backImage={cars} name ='Cars'/>
        </Link>
        <Link to='/images'>
        <Category backImage={city} name ='Cityscapes'/>
        </Link>
        <Link to='/images'>
        <Category backImage={fish} name ='Ocean Life'/>
        </Link>
        <Link to='/images'>
        <Category backImage={flowers} name='Flowers'/>
        </Link>
        <Link to='/images'>
        <Category backImage={mountains} name='Peaks'/>
        </Link>
        
        {/* <img src={flowers} alt="" /> */}
      </div>
    </div>
  )
}
