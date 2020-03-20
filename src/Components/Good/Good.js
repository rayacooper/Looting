import React, {useState} from 'react';
import NavBar from './../NavBar/NavBar';
import './Good.css';
import axios from 'axios';

const Good = () => {

    let [imageSource, updateImageSource] = useState('https://theroomfillswithwater.files.wordpress.com/2015/11/rc-treasure.jpg?w=415&h=316');
    let [itemName, updateItemName] = useState('Japanese Grapes');
    let [description, updateDescription] = useState('Why do these grapes cost $2k? Take a taste and find out. But do it quickly, because it will summon 3 common rats after 2 turns of not being eaten.')

    let getRandomItem = function(){
        console.log('Clicked')
        let count = 0;
        axios.get('/countGood')
            .then(response => {
                count = Number(response.data.count)
                console.log(count) 
                let random = Math.floor(Math.random() * count) + 1
                console.log(random)
                axios.get(`/randomGoodItem/${random}`)
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
        <div className='GoodMain'>
            <NavBar />
            <div className='GoodLoot'>
                <img src={imageSource} alt=''/>
                <h2>{itemName}</h2>
                <p>{description}</p>
            </div>
            <div className='ButtonDiv'>
                <button onClick={() => getRandomItem()}>Roll Again</button>
            </div>
        </div>
    )
}

export default Good;

