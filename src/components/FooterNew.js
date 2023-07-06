import React from 'react'
import './FooterNew.css'
import FooterNewCol from './FooterNewCol'

const FooterNew = () => {
  return (
<div>
    <div className='background'></div>
    <div className='FF__Container'>
        <div className='Main__Footer__Containerf'>
            <div className="footer__col1">
            <h1 className="footer__col1__title">Bharath</h1>
            <div className='Footer__Paraf'>
                A Professional UI developer from Dindigul, TamilNadu, India.
                I always make websites that have unique designs and also has a good performance rate.
            </div>
            </div>
            <div className="footer__col2">
                <FooterNewCol
                    heading="Important Links"
                    links={[
                      {
                        title: 'Home',
                        path: '/',
                        type: 'Link',
                      },
                      {
                        type: 'Link',
                        title: 'About',
                        path: '/about',
                      },
                      {
                        type: 'Link',
                        title: 'Skills',
                        path: '/skills',
                      },
                      {
                        type: 'Link',
                        title: 'Projects',
                        path: '/projects',
                      },
                      {
                        type: 'Link',
                        title: 'Contact',
                        path: '/contact',
                      },
                    ]}
                />
            </div>
            <div className="footer__col3">
                <FooterNewCol
                     heading="Contact Info"
                     links={[
                       {
                         title: '+919080945108',
                         path: 'tel:+919080945108',
                       },
                       {
                         title: 'bharathkarnan199@gmail.com',
                         path: 'mailto:bharathkarnan199@gmail.com',
                       },
                       {
                         title: 'Dindigul,TmailNadu,India',
                         path: 'http://google.com/maps',
                       },
                     ]}
                /> 
            </div>
            <div className="footer__col4">
                <FooterNewCol
                    heading="Social Links"
                    links={[
                      {
                        title: 'LinkedIn',
                        path: 'http://facebook.com',
                      },
                      {
                        title: 'Facebook',
                        path: 'http://facebook.com',
                      },
                      {
                        title: 'Instagram',
                        path: 'http://instagram.com',
                      },
                    ]}
                />
            </div>
        </div>
    </div>
</div>
  )
}

export default FooterNew