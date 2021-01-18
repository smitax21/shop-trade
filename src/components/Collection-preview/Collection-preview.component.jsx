import React from 'react';

import CollectionItem from '../Collection-item/Collection-item.component';

import './Collection-preview.styles.scss';

const CollectionPreview = ({ tag, items }) => {
    return (
        <div className='collection-preview'>
            <h1 className='title'>{tag}</h1>
            <div className='preview'>
                {
                    items.filter(item => item)
                        .map(({id, ...otherItemProps}) => (
                            <CollectionItem key={id} {...otherItemProps} />
                    ))
                }
            </div>
        </div>
    )
}

export default CollectionPreview;
