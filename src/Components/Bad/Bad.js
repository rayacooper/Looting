import React, {useState, useEffect} from 'react';
import NavBar from './../NavBar/NavBar';
import './Bad.css';
import axios from 'axios';

const Bad = () => {

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
            <div className={imageSource ? "ServerWorking" : "ServerNotWorking"}>
                <div className='BadLoot'>
                    <img src={imageSource} alt={itemName}/>
                    <h2>{itemName}</h2>
                    <p>{description}</p>
                </div>
                <div className='ButtonDiv'>
                    <button onClick={() => getRandomItem()}>Roll Again</button>
                </div>
            </div>
            
            <div className={imageSource ? "Ok" : "Whoops"}>
                <h1>Uh oh! Looks like the server is down. Please try again later.</h1>
            </div>
        </div>
    )
}

export default Bad;

