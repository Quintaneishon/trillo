import React from 'react'
import SideBar from '../SideBar'

import './Content.scss'

export default function Content(){
    return(
        <div className='content'>
            <SideBar />
            <main className='hotel-view'>
                hotel view
            </main>
        </div>
    )
}