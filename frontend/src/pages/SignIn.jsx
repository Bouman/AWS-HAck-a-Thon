import {
  Alert,
  Button,
  Card,
  Col,
  Form,
  Input,
  message,
  Row,
  Spin,
  Typography,
} from "antd";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";
import useScreenSize from "../hooks/useScreenSize";
import { setToken } from "../hooks/helpers";

function SignIn() {
  const { isDesktopView } = useScreenSize();
  const navigate = useNavigate();
  const { setUser } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const onFinish = async (values) => {
    setIsLoading(true);
    try {
      const value = {
        identifier: values.email,
        password: values.password,
      };
      const response = await fetch(
        `http://${import.meta.env.VITE_API}/auth/local`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(value),
        }
      );

      const data = await response.json();
      if (data?.error) {
        throw data?.error;
      } else {
        // set the token
        setToken(data.jwt);

        // set the user
        setUser(data.user);

        message.success(`Welcome back ${data.user.username}!`);

        navigate("/profile", { replace: true });
      }
    } catch (messerror) {
      console.error(messerror);
      setError(messerror?.message ?? "Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Row align="middle">
      <Col span={isDesktopView ? 8 : 24} offset={isDesktopView ? 8 : 0}>
        <Card title="SignIn">
          {error ? (
            <Alert
              className="alert_error"
              message={error}
              type="error"
              closable
              afterClose={() => setError("")}
            />
          ) : null}
          <Form
            name="basic"
            layout="vertical"
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  type: "email",
                },
              ]}
            >
              <Input placeholder="Email address" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true }]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login_submit_btn"
              >
                Login {isLoading && <Spin size="small" />}
              </Button>
            </Form.Item>
          </Form>
          <Typography.Paragraph className="form_help_text">
            New to Social Cards? <Link to="/signup">Sign Up</Link>
          </Typography.Paragraph>
        </Card>
      </Col>
    </Row>
  );
}

export default SignIn;
