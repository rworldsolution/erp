import React from 'react'
import NotificationIcon from '../../assets/img/icon/notification.svg'
import UserImg from '../../assets/img/NoPath.png'

export default function User() {
    return (
        <>
            <div className='d-flex'>
                <img src={NotificationIcon} alt="" />

                <div class="dropdown"> 
                     <img src={UserImg} alt="" className='user_ri dropdown-toggle' id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" />
                    <ul class="dropdown-menu dropdown_user_ri" aria-labelledby="dropdownMenuButton1">
                        <div className='user_dropdown'>
                              <img src={UserImg} className='user_dropdown_img' />
                            <div>
                                <p className='user_name'>Devon Lane</p>
                                <p className='user_Inventory'>EDU682 <span className=''>Inventory Manager</span></p>
                            </div>
                        </div>
                    </ul>
                    </div>
               
            </div>
        </>
    )
}
