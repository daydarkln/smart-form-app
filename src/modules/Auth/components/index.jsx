import React from 'react';
import { Card, Form, Input, Button, Spin } from 'antd';

const Auth = props => (
  <div className="auth__wrapper">
    <Spin spinning={props.isAuthLoading}>
      <Card className="auth__form">
        <h2>Login</h2>
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
  </div>
);

export default Auth;