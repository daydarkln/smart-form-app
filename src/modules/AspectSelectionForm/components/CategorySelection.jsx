import React from 'react';
import { Cascader } from 'antd';

const CategorySelection = props => (
  <>
    <h4>Выберите категорию:</h4>
    <Cascader
      options={props.categoryList}
      onChange={props.handleSelectCategory}
      placeholder="Choose category"
    />
  </>

);

export default CategorySelection;