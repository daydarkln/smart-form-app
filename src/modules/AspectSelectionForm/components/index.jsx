import React from 'react';

import ChannelSelection from './ChannelSelection';
import CategorySelection from './CategorySelection';
import AspectList from './AspectList';

const AspectSelectionForm = props => (
  <div className="aspect-selection__wrapper fade-in">
    <ChannelSelection
      handleSelectChannel={props.handleSelectChannel}
      channelList={props.channelList}
    />
    {props.isChannelSelected &&
      <CategorySelection
        handleSelectCategory={props.handleSelectCategory}
        categoryList={props.categoryList}
      />
    }
    {props.isCategorySelected && <AspectList list={props.aspectList} />}

  </div>

);

export default AspectSelectionForm;