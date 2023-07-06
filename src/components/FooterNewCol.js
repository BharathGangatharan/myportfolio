import React from 'react'
import './FooterNew.css'
import { Link } from 'react-router-dom';

const FooterNewCol = ({
  heading = 'Col Heading',
  links = [
    {
      type: 'Link',
      title: 'Home',
      path: '/home',
    },
    {
      type: 'Link',
      title: 'About',
      path: '/about',
    },
  ],
}) => {
  return (
    <div className='FooterCol__Container'>
        <h2 className="Footer__heading">{heading}</h2>
        <ul>
        {links.map((item, index) => (
          <li key={index}>
            {item.type === 'Link' ? (
              <Link to={item.path}>{item.title}</Link>
            ) : (
              <a href={item.path} target="_blank" rel="noreferrer">
                {item.title}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FooterNewCol;