import React from 'react';
import { Button } from 'antd';

import ChannelSelection from './ChannelSelection';
import CategorySelection from './CategorySelection';
import AspectList from './AspectList';
import appStorage from '../../../utils/storage';

const buttonStyles = { color: 'white', position: 'absolute', right: 10, top: 10 }

const logOut = push => {
  appStorage.removeItem("tokens/refresh");
  appStorage.removeItem("tokens/access");
  window.location.pathname = "/auth";
}

const AspectSelectionForm = props => (
  <>
    <Button onClick={() => logOut(props.push)} type="link" style={buttonStyles}>Выйти</Button>
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
  </>
);

export default AspectSelectionForm;