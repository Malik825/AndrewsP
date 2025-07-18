import React from "react";
import Box from "@mui/material/Box";
import { Form, Input, Button } from "antd";
import { UserOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";
import Contact from "./contact.jpg";
import "./ContactUs.css";

function ContactUs() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values: ", values);
    form.resetFields();
  };

  return (
    <Box className="contact-container">
      <Box className="contact-image">
        <img
          src={Contact}
          alt="image of a statue"
          width="100%"
          height="100%"
        />
      </Box>

      <Box className="contact-form-section">
        <section className="consult">CONSULTATION IS FREE</section>
        <h2 className="title">Schedule Consultation</h2>

        <Form
          form={form}
          name="normal_login"
          className="contact-form"
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Name" />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[
              { type: "email", message: "Invalid email!" },
              { required: true, message: "Please input your E-mail!" },
            ]}
          >
            <Input prefix={<MailOutlined />} placeholder="Email ID" />
          </Form.Item>

          <Form.Item
            name="phone"
            rules={[{ required: true, message: "Please input your phone number!" }]}
          >
            <Input prefix={<PhoneOutlined />} placeholder="Phone Number" />
          </Form.Item>

          <Form.Item
            name="comment"
            rules={[{ required: true, message: "Please input a message" }]}
          >
            <Input.TextArea
              showCount
              maxLength={500}
              placeholder="Comment"
              autoSize={{ minRows: 3 }}
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="submit-button"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Box>
    </Box>
  );
}

export default ContactUs;
