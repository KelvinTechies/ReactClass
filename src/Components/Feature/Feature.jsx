import React from 'react'
import './Feature.css'
// import handShake from '../../Asset/handShake.png'
import datas from '../../data'
import Cards from '../Card/Cards'
function Feature() {
  const  data = datas.map((item)=>{
        return(
            <Cards
            id={item.id}

            img = {item.img}
            desc={item.desc}
        />
            
            
        )
    })
    return (
        <div className='Feature'>
            <div className="featureHead">
                <h3>Featured Products</h3>

             <div className="imgGallery">
{data}
                    
             </div>
            </div>
        </div>
    )
}

export default Feature
