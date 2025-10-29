import React from 'react'
import NotificationIcon from '../../assets/img/icon/notification.svg'
import UseImg from '../../assets/img/NoPath.png'

export default function User() {
    return (
        <>
            <div className='d-flex'>
                <img src={NotificationIcon} alt="" />
                <img src={UseImg} alt="" className='user_ri' />
            </div>
        </>
    )
}
