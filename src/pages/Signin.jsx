import { message } from "antd";
import { supabase } from "../lib/supabase";
import { Button, Card, Form, Input } from "antd";
import { FiMail, FiLock } from "react-icons/fi";
import { FaSignInAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react"; 


export default function Signin() {
  const [form] = Form.useForm();
 const [loading, setLoading] = useState(false);
   const navigate = useNavigate();

  const onFinish = async (values) => {
    setLoading(true);
    const { email, password } = values;

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      message.error(error.message);
      return;
    }

    message.success("Login successfully");
    navigate("/dashboard");
  };
  return (
    <div
      className="relative h-screen w-full overflow-hidden flex items-center justify-center px-4 py-4"
      style={{ backgroundColor: "#e4e4e4" }}
    >
      <div
        aria-hidden
        className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-[45%_55%_60%_40%/50%_40%_60%_50%]"
        style={{ backgroundColor: "#55B592" }}
      />
      <div
        aria-hidden
        className="absolute -bottom-40 -right-40 w-[560px] h-[560px] rounded-[55%_45%_40%_60%/40%_60%_50%_50%]"
        style={{ backgroundColor: "#55B592" }}
      />

      <Card
        className="relative z-10 w-full shadow-xl border-0"
        style={{ maxWidth: 400, borderRadius: 24 }}
        styles={{ body: { padding: 20 } }}
      >
        <div className="flex flex-col items-center text-center mb-3">
          <div
            className="w-11 h-11 rounded-full flex items-center justify-center mb-2"
            style={{ backgroundColor: "#e6f4ee" }}
          >
            <FaSignInAlt size={20} color="#55B592" />
          </div>
          <h1
            className="m-0 leading-tight"
            style={{ fontSize: 26, fontWeight: 700, color: "#55B592" }}
          >
            Sign In
          </h1>
          <p className="mt-0.5 mb-0 text-sm" style={{ color: "#888" }}>
            Welcome back! Please login to your account
          </p>
        </div>

        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          requiredMark={false}
          className="[&_.ant-form-item]:!mb-3"
        >
          <Form.Item
            label={<span className="font-semibold">Email</span>}
            name="email"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Please enter a valid email" },
            ]}
          >
            <Input
              size="large"
              prefix={<FiMail className="text-gray-400" />}
              placeholder="Enter your email address"
              style={{ borderRadius: 10, height: 44 }}
            />
          </Form.Item>

          <Form.Item
            label={<span className="font-semibold">Password</span>}
            name="password"
            rules={[{ required: true, message: "Please enter your password" }]}
          >
            <Input.Password
              size="large"
              prefix={<FiLock className="text-gray-400" />}
              placeholder="Enter your password"
              style={{ borderRadius: 10, height: 44 }}
            />
          </Form.Item>

          <Form.Item className="mb-2">
            <Button
              htmlType="submit"
              block
              loading={loading} 
              className="border-0 font-semibold tracking-wide text-white hover:opacity-90"
              style={{ height: 48, borderRadius: 10, backgroundColor: "#55B592" }}
            >
              SIGN IN
            </Button>
          </Form.Item>
        </Form>

        <p className="text-center text-sm mt-2" style={{ color: "#666" }}>
          Don't have an account?{" "}
          <Link to="/signup" style={{ color: "#55B592", fontWeight: 600 }}>
            sign up
           </Link>
        </p>
      </Card>
    </div>
  );
}
   