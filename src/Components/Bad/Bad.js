import React, {useState} from 'react';
import NavBar from './../NavBar/NavBar';
import './Bad.css';

const Bad = () => {

    let [imageSource, updateImageSource] = useState('url(https://theroomfillswithwater.files.wordpress.com/2015/11/rc-treasure.jpg?w=415&h=316)');
    let [itemName, updateItemName] = useState('Bowl of Misery');
    let [description, updateDescription] = useState('No matter what you fill this bowl with, whether it be food, drink, or a potion, the recipient will get a nasty case of nausea and not know where it came from.')

    const buttonClick = () => {
        console.log('You clicked me!')
    }

    return(
        <div className='BadMain'>
            <NavBar />
            <div className='BadLoot'>
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

export default Bad;

