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
                    "vendor": "Gap",
                    "name": "Men's Pullover Sweatshirt",
                    "image_src": ["https://cdn.shopify.com/s/files/1/0455/2176/4502/files/Sweater_0.jpg?v=1603266982"],
                    "price": "74",
                    "tag": "T-shirt",
                    "compare_at_price": "200",
                    
                },
             {
                    "id": 2,
                    "vendor": "Puma",
                    "name": "Solid Polo Collar Grey T-shirt",
                    "image_src": ["https://cdn.shopify.com/s/files/1/0455/2176/4502/files/Denim_0.jpg?v=1603267107"],
                    "price": "74",
                    "compare_at_price": "200",
                    "tag": "Denim",
                    
                },
             {
                    "id": 3,
                    "vendor": "U.S Polo Assn.",
                    "name": "men Blue Regular Fit Striped Casual Shirt",
                    "image_src": ["https://cdn.shopify.com/s/files/1/0455/2176/4502/files/Shirt_4.jpg?v=1603267306"],
                    "price": "50",
                    "compare_at_price": "100",
                    "tag": "shirt",
                    
                },
             {
                    "id": 4,
                    "vendor": "Here & Now",
                    "name": "Men Blue Solid Biker jacket",
                    "image_src": ["https://cdn.shopify.com/s/files/1/0455/2176/4502/files/Jacket_1.jpg?v=1603267865"],
                    "price": "40",
                    "size" : "large",
                    "compare_at_price": "80",
                    "tag": "jacket",
                  
                },
             ]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({id, image_src, tag, size}) => (
                        <MenuItem key={id} image_src={image_src} tag={tag} size={size} />
                    ))
                }
            </div>
        )
    }
    
}

export default Directory;
