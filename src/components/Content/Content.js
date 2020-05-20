import React,{useState} from 'react'
import SideBar from '../SideBar'
import Hotel from '../Hotel'

import './Content.scss'

export default function Content(){
    const[ active,setActive ] = useState('Hotel')

    return(
        <div className='content'>
            <SideBar active={active} setActive={setActive} />
            <Hotel />
        </div>
    )
}