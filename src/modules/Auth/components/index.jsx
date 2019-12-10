import React from 'react';
import { Card, Form, Input, Button, Spin } from 'antd';

const Auth = props => (
  <Spin spinning={props.isAuthLoading}>
    <Card className="auth-form">
      <Form onSubmit={props.handleAuthSubmit}>
        <Form.Item>
          <Input placeholder="Email*" />
        </Form.Item>
        <Form.Item>
          <Input.Password password placeholder="Password*" />
        </Form.Item>
        <Button className="auth-form__submit" htmlType="submit" type="link">Proceed</Button>
      </Form>
    </Card>
  </Spin>
);

export default Auth;