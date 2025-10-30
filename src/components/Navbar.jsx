import React from 'react'
import DashboardIcon from'../assets/img/navicon/Dashboard.svg'
import StudentInformatioIcon from'../assets/img/navicon/StudentInformatio.svg'

export default function Navbar() {
    return (
        <>
            <ul className='sidebar-menu'>
                <li className='nav-item-ri'>
                    <a className='nav-link-ri' href="#"><img src={DashboardIcon} alt="Dashboard" /> Dashboard</a>
                    </li>
                    <li className='nav-item-ri'>
                    <a className='nav-link-ri' href="#"><img src={StudentInformatioIcon} alt="Student Informatio" /> Student Informatio...</a>
                    </li>
            </ul>
        </>
    )
}
