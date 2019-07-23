import React from 'react'
import logo from '../../logo.svg';
import './navbar.scss';
import Dropdown from '../dropdown/dropdown';
import UseeToggle from '../../hooks/Usetoggle';
import DropdownItem from '../dropdown/dropDownItem';

export default function () {
    //define states for navbar links to use it for toggle it
    const [flag, setflag] = UseeToggle(false);
    const [flag1, setflag1] = UseeToggle(false);
    const [flag2, setflag2] = UseeToggle(false);
    return (
        <nav className="navbar">
            <img src={logo} alt="City Tour Conpoany" />
            <ul className="nav-links">
                <li > <a href="/" className="nav-link" onClick={setflag}>Home{flag ?
                    <Dropdown >
                        <DropdownItem link="#" text="link1" />
                        <DropdownItem link="#" text="link2" />
                    </Dropdown> : <div></div>}</a> </li>

                <li> <a href="/" className="nav-link" onClick={setflag1}>about{flag1 ?
                    <Dropdown >
                        <DropdownItem link="#" text="Company" />
                        <DropdownItem link="#" text="Employee" />
                    </Dropdown> : <div></div>}</a></li>

                <li> <a href="/" className="nav-link active" onClick={setflag2}>React {flag2 ?
                    <Dropdown >
                        <DropdownItem link="#" text="React" />
                        <DropdownItem link="#" text="Hooks" />
                        <DropdownItem link="#" text="routing" />
                        <DropdownItem link="#" text="lifeSycle" />
                    </Dropdown> : <div></div>} </a></li>
            </ul>
        </nav>
    );
}
