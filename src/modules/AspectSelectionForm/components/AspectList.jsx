import React from 'react';
import { Form, Select, Input, Col, Spin } from 'antd';
import { pathOr } from 'ramda';

const { Option } = Select;

const AspectList = props => {
  const list = pathOr([], ['list'], props);
  return (
    <div className="aspect-list__wrapper">
      <h4>Список аспектов:</h4>
      <Spin spinning={!list.length}>
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
      </Spin>

    </div>
  )
}

export default AspectList;