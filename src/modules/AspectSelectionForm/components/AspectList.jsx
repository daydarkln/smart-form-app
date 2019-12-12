import React from 'react';
import { Form, Select, Input, Col } from 'antd';

const { Option } = Select;

const AspectList = props => {
  return (
    <>
      <h4>Список аспектов</h4>
      <Form className="aspect-list__form">
        {props.list.map(item => {
          if (item.aspectEnabledForVariations) {
            return (
              <Col span={6} style={{ marginRight: '20px' }}>
                <Form.Item label={item.localizedAspectName}>
                  <Select>
                    {item.aspect_values.map(({ id, value }) => {
                      return <Option value={id}>{value}</Option>
                    })}
                  </Select>
                </Form.Item>
              </Col>
            )
          }
          return (
            <Col span={6} style={{ marginRight: '20px' }}>
              <Form.Item label={item.localizedAspectName}>
                <Input placeholder={`Enter ${item.localizedAspectName}`} />
              </Form.Item>
            </Col>
          )
        })}
      </Form>
    </>
  )
}

export default AspectList;