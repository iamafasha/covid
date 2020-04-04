import React from 'react'
import News from './components/News';
import Stats from './components/Stats';
import Data from './context/Data';

function App() {
    return (
        <div>
            <Data>
                <News />
                <Stats />
            </Data>
        </div>
    )
}

export default App