import React from 'react'
import './Cards.css'
// import handShake from '../../../public/Asset/handShake.png'
// import money from '../../../publicAsset/money.png'
// import transfer from '../../../publicAsset/transfer.png'
// import wallet from '../../../publicAsset/wallet.png'



function Cards(prps) {
    // console.log(prps)
    return (

        <div className="imgBx">
            <div className="img">
                <img src={`../Asset/${prps.img}`} style={{ width: '100px' }} alt="" />
            </div>
            <span>{prps.desc}</span>
        </div>
    )
}

export default Cards
