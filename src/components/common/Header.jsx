import React from 'react'
import SearchGlobal from './SearchGlobal'
import User from './User'
export default function Header() {
    return (
        <div className='header_ri'>
            <SearchGlobal />
            <User />
        </div>
    )
}
