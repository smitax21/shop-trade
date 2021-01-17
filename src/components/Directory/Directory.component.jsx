import React from 'react'
import MenuItem from '../Menu-item/Menu-item.component';

import './Directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections : [
                {
                    "id": 1,                    
                    "image_src": ["https://cdn.shopify.com/s/files/1/0455/2176/4502/files/Sweater_0.jpg?v=1603266982"],
                    "tag": "T-shirt",
                    "linkUrl": "T-shirt"
                    
                },
             {
                    "id": 2,
                    "image_src": ["https://cdn.shopify.com/s/files/1/0455/2176/4502/files/Denim_0.jpg?v=1603267107"],
                    "tag": "Denim",
                    "linkUrl": "Denim"
                },
             {
                    "id": 3,
                    "image_src": ["https://cdn.shopify.com/s/files/1/0455/2176/4502/files/Shirt_4.jpg?v=1603267306"],
                    "tag": "shirt",
                    "linkUrl": "shirt"
                    
                },
             {
                    "id": 4,
                    "image_src": ["https://cdn.shopify.com/s/files/1/0455/2176/4502/files/Jacket_1.jpg?v=1603267865"],
                    "size" : "large",
                    "tag": "jacket",
                    "linkUrl": "jacket"
                },
             ]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({id, ...otherSectionProps}) => (
                        <MenuItem key={id} {...otherSectionProps}
                        />
                    ))
                }
            </div>
        )
    }
    
}

export default Directory;
