import React from 'react';
import { Form, Select } from 'antd';

const { Option } = Select;

const ChannelSelection = props => (
  <Form>
    <Form.Item label="Выберите канал">
      <Select onSelect={props.handleSelectChannel}>
        {props.channelList.map(item => (
          <Option key={item.id} value={item.domain}>{item.name}</Option>
        ))}
      </Select>
    </Form.Item>
  </Form>
)

export default ChannelSelection