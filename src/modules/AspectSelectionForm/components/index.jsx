import React from 'react';
import { Form, Select } from 'antd';

const { Option } = Select;

const AspectSelectionForm = props => (
  <Form>
    <Form.Item>
      <Select onSelect={props.handleSelectChannel}>
        {props.channelList.map(item => (
          <Option value={item.id}>{item.name}</Option>
        ))}
      </Select>
    </Form.Item>
  </Form>
);

export default AspectSelectionForm;