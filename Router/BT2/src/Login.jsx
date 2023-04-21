import React,{ useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { useNavigate } from 'react-router-dom';
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
}
function Login (){
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const[password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const onsubmit = (e)=>{
    e.preventDefault();
    if(username.trim()!==''&& password!==''){
      setIsLoggedIn(true)
      localStorage.setItem('isLoggedIn', 'true')
    }
    else{
      alert('hay nhap thong tin')
    }
  }
  if(isLoggedIn){
    navigate('/')
  }
  return(
<Form 
    name="basic"
    labelCol={{
      span: 8, 
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: "Please input your username!",
        },
      ]}
    >
      <Input onChange={e=> setUsername(e.target.value)} />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: "Please input your password!",
        },
      ]}
    >
      <Input.Password  onChange={e => setPassword(e.target.value)} />
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button onClick={onsubmit} type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
  )
  
};
export default Login;
