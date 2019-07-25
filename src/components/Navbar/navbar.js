import React, { useState, useEffect, useRef } from 'react';
import logo from '../../logo.svg';
import Dropdown from '../dropdown/dropdown';
import UseeToggle from '../../hooks/Usetoggle';
import DropdownItem from '../dropdown/dropDownItem';
import '../dropdown/dropdown.css';



export default function () {
    //define states for navbar links to use it for toggle it
    const [flag, setflag, hide] = UseeToggle(false);
    const [flag1, setflag1, hide1] = UseeToggle(false);
    const [flag2, setflag2, hide2] = UseeToggle(false);

    const hideDropmenu = () => {
        hide();
        hide1();
        hide2();
    };


    return (

        <div>
            <nav className="navbar"  >
                <img src={logo} alt="City Tour Conpoany" />
                <ul className="nav-links"  >
                    <li onClick={() => {
                        hide1();
                        hide2();
                        setflag();
                    }}  > <a href="javascript:void(0)" className="nav-link" >Home</a>{flag ?
                        <Dropdown hide={hideDropmenu}  >
                            <DropdownItem link="#" text="AmrOyounes" type="link" />
                            <DropdownItem link="#" text="Killer" type="link" />
                            <DropdownItem link="https://randomuser.me/api/portraits/med/men/96.jpg" type="img" />
                        </Dropdown> : <div></div>} </li>

                    <li onClick={() => {
                        hide();
                        hide2();
                        setflag1();
                    }} > <a href="javascript:void(0)" className="nav-link" >about</a>{flag1 ?
                        <Dropdown hide={hideDropmenu}  >
                            <DropdownItem link="#" text="Company" type="link" />
                            <DropdownItem link="#" text="Employee" type="link" />
                        </Dropdown> : <div></div>}</li>

                    <li onClick={() => {
                        hide();
                        hide1();
                        setflag2();
                    }} > <a href="javascript:void(0)" className="nav-link active" >React</a> {flag2 ?
                        <Dropdown hide={hideDropmenu}  >
                            <DropdownItem link="#" text="React" type="link" />
                            <DropdownItem link="#" text="Hooks" type="link" />
                            <DropdownItem link="#" text="routing" type="link" />
                            <DropdownItem link="#" text="lifeSycle" type="link" />
                            <DropdownItem text="Logout" type="btn" />

                        </Dropdown> : <div></div>} </li>
                </ul>
            </nav>
            <br />

        </div>
    );
}
