import React from 'react';

import './Menu-item.styles.scss';

const MenuItem = ({ tag, image_src, size }) => {
    return (
        <div className={`${size} menu-item`}>
                <div className='background-image'
                    style={{
                        backgroundImage: `url(${image_src})`
                }}/>
                <div className='content'>
                    <h1 className='title'>{tag.toUpperCase()}</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
    )
}

export default MenuItem
