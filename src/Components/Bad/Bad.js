import React, {useState} from 'react';
import NavBar from './../NavBar/NavBar';
import './Bad.css';
import axios from 'axios';

const Bad = () => {

    let [imageSource, updateImageSource] = useState('https://theroomfillswithwater.files.wordpress.com/2015/11/rc-treasure.jpg?w=415&h=316');
    let [itemName, updateItemName] = useState('Bowl of Misery');
    let [description, updateDescription] = useState('No matter what you fill this bowl with, whether it be food, drink, or a potion, the recipient will get a nasty case of nausea and not know where it came from.')

    let getRandomItem = function(){
        console.log('Clicked')
        let count = 0;
        axios.get('/countBad')
            .then(response => {
                count = Number(response.data.count)
                console.log(count) 
                let random = Math.floor(Math.random() * count) + 1
                console.log(random)
                axios.get(`/randomBadItem/${random}`)
                    .then(response => {
                        console.log(response.data.item)
                        const {item_name, item_description, image_url} = response.data.item;
                        updateImageSource(image_url);
                        console.log(image_url)
                        updateItemName(item_name);
                        updateDescription(item_description);
                    })           
            })
        
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
                <button onClick={() => getRandomItem()}>Roll Again</button>
            </div>
        </div>
    )
}

export default Bad;

