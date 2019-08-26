import React from 'react';
import Navbar from './Navbar.js';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Content from './Content.js';

function App() {
    document.body.style.backgroundColor = "rgb(39, 47, 65)";
    return (
        <div>
            <Navbar/>
            <div className='row mt-5'>
                <div className='col-1'>
                </div>
                <div className='col container'>
                    <Content textHeader="PRODUCT"/>
                    <Content textHeader="DESIGN"/>
                </div>
            </div>
            <div className='row'>
                <div className='col-1'>
                </div>
                <div className='col'>
                  <Content image="https://collagecrafting.com/uploads/home2.jpg" />
                </div>
            </div>
        </div>

    );
}

export default App;
