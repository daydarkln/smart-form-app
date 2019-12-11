import React from 'react';
import { Cascader } from 'antd';

const CategorySelection = props => (
  <Cascader
    options={props.categoryList}
    onChange={props.handleSelectCategory}
    placeholder="Choose category"
  />
);

export default CategorySelection;