import React from 'react';
import { withRouter } from 'react-router-dom';

import './Menu-item.styles.scss';

const MenuItem = ({ tag, image_src, size, history, linkUrl, match }) => (
        <div className={`${size} menu-item`} onClick={() => history.push(`${match.url} ${linkUrl}`)}>
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


export default withRouter(MenuItem);
