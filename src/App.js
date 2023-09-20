import './App.css';
import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import AccountBoxIcon from '@mui/icons-material/AccountBox';


function App() {
    return (
        <div>
            <div>
                <h1>
                    <span className="fire">L</span>
                    <span className="burn">O</span>
                    <span className="burn">N</span>
                    <span className="burn">E</span>
                    <span className="burn">L</span>
                    <span className="fire">Y</span>
                    <span>&nbsp;</span>
                    <span className="fire">P</span>
                    <span className="burn">L</span>
                    <span className="burn">A</span>
                    <span className="burn">N</span>
                    <span className="burn">E</span>
                    <span className="fire">T</span>
                </h1>
                <nav>
                    <MenuIcon/>
                    <AccountBoxIcon className={"accountIcon"}/>
                </nav>
            </div>
            <div>
                <div className="stars"></div>
                <div className="twinkling"></div>
                <div className="clouds"></div>
            </div>
        </div>
    )
}

export default App;