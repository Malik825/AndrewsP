import React from 'react';
import Box from '@mui/material/Box';
import './ContactUs.css';
import Contact from './contact.jpg';
import { UserOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';


function ContactUs() {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        form.resetFields();
    };

    return (
        <>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'left' }}>
                <Box
                    sx={{
                        width: '52rem',
                        justifyContent: 'center',
                    }}
                >
                    <img
                        width='100%'
                        height='100%'
                        alt='image of a statue'
                        src={Contact}
                    />
                </Box>

                <Box
                    sx={{
                        width: '32rem',
                        paddingBottom: 2,
                        paddingTop: 3,
                        justifyContent: 'center',
                        paddingLeft: 5,
                        paddingRight: 5,
                    }}
                >
                    <section className='consult'>
                        CONSULTATION IS FREE
                    </section>

                    <h2 className='title'>Schedule Consultation</h2>

                    <Form
                        form={form}
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            style={{ marginBottom: "20px",  }}
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your name!',
                                },
                            ]}
                        >
                            <Input prefix={<UserOutlined />} placeholder="Name" />
                        </Form.Item>

                        <Form.Item
                            style={{ marginBottom: "20px" }}
                            name="email"
                            rules={[
                                {
                                    type: 'email',
                                    message: 'The input is not valid E-mail!',
                                },
                                {
                                    required: true,
                                    message: 'Please input your E-mail!',
                                },
                            ]}
                        >
                            <Input prefix={<MailOutlined />} placeholder="Email ID" />
                        </Form.Item>

                        <Form.Item
                            style={{ marginBottom: "20px" }}
                            name="phone"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your phone number!',
                                },
                            ]}
                        >
                            <Input prefix={<PhoneOutlined />} placeholder="Phone Number" />
                        </Form.Item>

                        <Form.Item
                            style={{ marginBottom: "30px" }}
                            name="comment"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input a message',
                                },
                            ]}
                        >
                            <Input.TextArea showCount maxLength={500} placeholder="Comment" />
                        </Form.Item>

                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="login-form-button"
                                style={{ background: "#2b6777", color: "whitesmoke", fontWeight: 600, marginBottom: "40px" }}
                                
                            >
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Box>
            </Box>
        </>
    );
}

export default ContactUs;