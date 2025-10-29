import React from 'react'
import InstituteSettings from './Institute/InstituteSettings'

export default function Content() {
    return (
        <div className='content-wrapper'>
            <div className='container-full'>
                <p className='heding_ri'>Institute Settings</p>
                <section className='content'>
                    <InstituteSettings />
                </section>
            </div>
        </div>
    )
}
