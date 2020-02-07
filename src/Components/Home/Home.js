import React from 'react';

const Home = () => {
    return(
        <div className='HomeMain'>
            <div className='HomeIntro'>
                <h1>Loot the Room!</h1>
            </div>

            <div className='HomeOptions'>
                <div className='HomeButtons'>
                    <img />
                    <p>Bad Roll</p>
                </div>

                <div className='HomeButtons'>
                    <img />
                    <p>Good Roll</p>
                </div>

                <div className='HomeButtons'>
                    <img />
                    <p>Make Your Own Loot</p>
                </div>
            </div>

        </div>
    )
}

export default Home;