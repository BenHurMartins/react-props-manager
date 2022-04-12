import React from 'react'
import { Link } from 'react-router-dom'
import './HeaderMenu.css'
const styles = {
  navContainer: {
    display: 'flex',
    justifyContent: 'flex-start'
  } as React.CSSProperties
}
const HeaderMenu: React.FC = () => {
  return (
    <div style={styles.navContainer}>
      <nav>
        <ul className='header'>
          <li>
            <Link className='link' to='/home'>
              Home
            </Link>
          </li>
          <li>
            <Link className={'link'} to='/about'>
              About
            </Link>
          </li>
          <li>
            <Link className={'link'} to='/docs'>
              Docs
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default HeaderMenu
