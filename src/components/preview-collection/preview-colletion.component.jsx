import React from 'react';
import CollectionItem from '../colletion-item/collection-item.component';
import './preview-colletion.styles.scss';

const PreviewCollection = ({ title, items }) => (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {items
      .filter((item, idx) => idx < 4)
      .map(({id, ...otherItemProps}) => (
        <CollectionItem key={id} {...otherItemProps} />
      ))}
    </div>
  </div>
)

export default PreviewCollection;