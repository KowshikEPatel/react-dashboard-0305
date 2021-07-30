import React from 'react'
import Sidebar from './Sidebar'
import MainContent from './MainContent'

export default function HomePage() {
    return (
        <>
          <Sidebar/>  
          <div id="content-wrapper" class="d-flex flex-column">
            <MainContent/>
          </div>
        </>
    )
}
