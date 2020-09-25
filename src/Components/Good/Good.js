import React, {useState, useEffect} from 'react';
import NavBar from './../NavBar/NavBar';
import './Good.css';
import axios from 'axios';

const Good = () => {

    let [imageSource, updateImageSource] = useState('');
    let [itemName, updateItemName] = useState('');
    let [description, updateDescription] = useState('')
    let [loaded, updateLoaded] = useState(false)

    useEffect(() => {
        if(!loaded){
            getRandomItem();
        }
        updateLoaded(true);
    }, [loaded])

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
                <img src={imageSource} alt={itemName}/>
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

