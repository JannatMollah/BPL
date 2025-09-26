import React from 'react';
import NavImg from '../../assets/logo.png'
import DollarImg from '../../assets/dollar.png'
const Navbar = () => {
    return (
        <div>
            <div className="navbar max-w-[1200px] mx-auto">
                <div className="flex-1">
                    <a className="">
                        <img className="w-[60px] h-[60px]" src={NavImg} alt="" />
                    </a>
                </div>
                <div className="flex items-center">
                    <span className="mr-1">6000000000000</span>
                    <span className="mr-1">Coin</span>
                    <img src={DollarImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;