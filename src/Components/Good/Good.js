import React, {useState} from 'react';
import NavBar from './../NavBar/NavBar';
import './Good.css';

const Good = () => {

    let [imageSource, updateImageSource] = useState('url(https://theroomfillswithwater.files.wordpress.com/2015/11/rc-treasure.jpg?w=415&h=316)');
    let [itemName, updateItemName] = useState('Japanese Grapes');
    let [description, updateDescription] = useState('Why do these grapes cost $2k? Take a taste and find out. But do it quickly, because it will summon 3 common rats after 2 turns of not being eaten.')

    const buttonClick = () => {
        console.log('You clicked me!')
    }

    return(
        <div className='GoodMain'>
            <NavBar />
            <div className='GoodLoot'>
                <img src={imageSource}/>
                <h2>{itemName}</h2>
                <p>{description}</p>
            </div>
            <div className='ButtonDiv'>
                <button onClick={() => buttonClick}>Roll Again</button>
            </div>
        </div>
    )
}

export default Good;

