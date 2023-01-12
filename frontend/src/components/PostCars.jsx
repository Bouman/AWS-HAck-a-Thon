import {
  Alert,
  Button,
  Card,
  Col,
  DatePicker,
  Form,
  Input,
  InputNumber,
  message,
  Row,
  Spin,
  Rate,
  Upload,
} from "antd";
import React, { useState } from "react";
import { BiMessageSquareAdd } from "react-icons/bi";
import { useAuthContext } from "../contexts/AuthContext";
import useScreenSize from "../hooks/useScreenSize";
import { getToken } from "../hooks/helpers";

function PostCars() {
  const { isDesktopView } = useScreenSize();
  const { setUser } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAddCar = async (data) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `http://${import.meta.env.VITE_API}/api/cars`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // set the auth token to the user's jwt
            Authorization: `Bearer ${getToken()}`,
          },
          body: JSON.stringify(data),
        }
      );
      const responseData = await response.json();
      setUser(responseData);
      message.success("Data saved successfully!");
    } catch (err) {
      console.error(Error);
      message.error("Error when adding car !");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-rose-800">
      <div className="h-full min-h-screen bg-gray-800 rounded-br-[25%] pt-12 border-b-4 border-rose-500">
        <Row align="middle">
          <Col span={isDesktopView ? 19 : 24} offset={isDesktopView ? 3 : 3}>
            <Card title="Add Car">
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
                name="postcars"
                layout="vertical"
                onFinish={handleAddCar}
                autoComplete="on"
              >
                <Form.Item label="Title" name="title">
                  <Input placeholder="Title" />
                </Form.Item>

                <Form.Item label="Upload" valuePropName="photo">
                  <Upload action="/upload.do" listType="picture-card">
                    <div>
                      <BiMessageSquareAdd />
                      <div
                        style={{
                          marginTop: 5,
                        }}
                      >
                        Upload
                      </div>
                    </div>
                  </Upload>
                </Form.Item>

                <Form.Item label="Rating" name="rating">
                  <Rate placeholder="Rating" />
                </Form.Item>

                <Form.Item label="Model" name="model">
                  <Input placeholder="Model" />
                </Form.Item>

                <Form.Item label="Desciption" name="body">
                  <Input.TextArea placeholder="Desciption" />
                </Form.Item>

                <Form.Item label="Price" name="price">
                  <InputNumber placeholder="Price" />
                </Form.Item>

                <Form.Item label="Year" name="year">
                  <InputNumber placeholder="Year" />
                </Form.Item>

                <Form.Item label="Seats" name="seats">
                  <InputNumber placeholder="Seats" />
                </Form.Item>

                <Form.Item label="Km" name="km">
                  <InputNumber placeholder="Kilometres" />
                </Form.Item>

                <Form.Item label="Date de Debut" name="date_debut">
                  <DatePicker placeholder="Date de Debut" />
                </Form.Item>

                <Form.Item label="Date de Fin" name="date_fin">
                  <DatePicker placeholder="Date de fin" />
                </Form.Item>

                <Form.Item label="Ville" name="ville">
                  <Input placeholder="Ville" />
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login_submit_btn"
                  >
                    Submit {isLoading && <Spin size="small" />}
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default PostCars;
