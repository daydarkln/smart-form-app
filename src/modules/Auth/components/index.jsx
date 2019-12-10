import React from 'react';
import { Card, Form, Input, Button } from 'antd';

const Auth = props => (
  <Card className="auth-form">
    <Form onSubmit={props.handleAuthSubmit}>
      <Form.Item>
        <Input placeholder="Email*" />
      </Form.Item>
      <Form.Item>
        <Input placeholder="Password*" />
      </Form.Item>
      <Button className="auth-form__submit" htmlType="submit" type="link">Proceed</Button>
    </Form>
  </Card>
);

export default Auth;