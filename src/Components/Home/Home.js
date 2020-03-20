import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import './Home.css'

const badDice = 'https://i.imgur.com/pQBtZ76.png';
const goodDice = 'https://i.imgur.com/TU2TBeR.png'

const Home = () => {
    return(
        <div className='HomeMain'>
            <div className='HomeIntro'>
                <h1>Loot the Room!</h1>
            </div>

            <div className='HomeOptions'>
                <Link to='/Bad'>
                    <div className='HomeButtons'>
                        <img src={badDice} alt='Dice'/>
                        <h3>Bad Roll</h3>
                    </div>
                </Link>
                
                <Link to='/Good'>
                    <div className='HomeButtons'>
                        <img src={goodDice} alt='Dice'/>
                        <h3>Good Roll</h3>
                    </div>
                </Link>
                
                {/* <Link to='/DIY'>
                    <div className='HomeButtons'>
                        <img src={DiceImage} alt='Dice'/>
                        <h3>Make Your Own Loot</h3>
                    </div>
                </Link> */}
                
            </div>

        </div>
    )
}

export default withRouter(Home);