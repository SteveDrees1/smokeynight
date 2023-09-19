import './App.css';
import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import AccountBoxIcon from '@mui/icons-material/AccountBox';


function App() {
    return (
        <div>
            <div>
                <h1>
                    <span className="fire">S</span>
                    <span className="burn">T</span>
                    <span className="burn">E</span>
                    <span className="burn">V</span>
                    <span className="fire">E</span>
                    <span>&nbsp;</span>
                    <span className="fire">D</span>
                    <span className="burn">R</span>
                    <span className="burn">E</span>
                    <span className="burn">E</span>
                    <span className="fire">S</span>

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