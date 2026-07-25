import { message } from "antd";
import { supabase } from "../lib/supabase";
import { Button, Card, Form, Input } from "antd";
import { FiMail, FiLock } from "react-icons/fi";
import { FaSignInAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
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
          <Link to="/" style={{ color: "#55B592", fontWeight: 600 }}>
            sign up
           </Link>
        </p>
      </Card>
    </div>
  );
}

// import { useState } from "react";
// import { message, Button, Card, Form, Input, Checkbox, Divider } from "antd";
// import { supabase } from "../lib/supabase";
// import { FiMail, FiLock } from "react-icons/fi";
// import { FaSignInAlt, FaGoogle } from "react-icons/fa";
// import { Link, useNavigate } from "react-router";

// export default function Signin() {
//   const [form] = Form.useForm();
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const onFinish = async (values) => {
//     setLoading(true);
//     const { email, password } = values;

//     const { data, error } = await supabase.auth.signInWithPassword({
//       email,
//       password,
//     });

//     setLoading(false);

//     if (error) {
//       message.error(error.message);
//       return;
//     }

//     message.success("Login Successful!");
//     navigate("/dashboard");
//   };

//   return (
//     <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-emerald-50 via-slate-100 to-teal-50 px-4 py-8">
//       <Card
//         className="w-full max-w-md shadow-2xl border-0 rounded-3xl overflow-hidden backdrop-blur-md bg-white/90"
//         styles={{ body: { padding: "32px 28px" } }}
//       >
//         {/* Header */}
//         <div className="flex flex-col items-center text-center mb-6">
//           <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-3 bg-emerald-100/80 shadow-inner">
//             <FaSignInAlt size={22} className="text-emerald-600" />
//           </div>
//           <h1 className="text-2xl font-bold text-gray-800 tracking-tight">
//             Welcome Back
//           </h1>
//           <p className="text-xs text-gray-500 mt-1">
//             Please enter your details to sign in
//           </p>
//         </div>

//         {/* Form */}
//         <Form
//           form={form}
//           layout="vertical"
//           onFinish={onFinish}
//           requiredMark={false}
//           size="large"
//         >
//           <Form.Item
//             label={<span className="text-xs font-semibold text-gray-700">Email Address</span>}
//             name="email"
//             rules={[
//               { required: true, message: "Please enter your email" },
//               { type: "email", message: "Please enter a valid email" },
//             ]}
//           >
//             <Input
//               prefix={<FiMail className="text-gray-400 mr-1" />}
//               placeholder="name@company.com"
//               className="rounded-xl border-gray-200 hover:border-emerald-500 focus:border-emerald-500"
//             />
//           </Form.Item>

//           <Form.Item
//             label={<span className="text-xs font-semibold text-gray-700">Password</span>}
//             name="password"
//             rules={[{ required: true, message: "Please enter your password" }]}
//           >
//             <Input.Password
//               prefix={<FiLock className="text-gray-400 mr-1" />}
//               placeholder="••••••••"
//               className="rounded-xl border-gray-200 hover:border-emerald-500 focus:border-emerald-500"
//             />
//           </Form.Item>

//           {/* Remember Me & Forgot Password */}
//           <div className="flex items-center justify-between mb-5 text-xs">
//             <Form.Item name="remember" valuePropName="checked" noStyle>
//               <Checkbox className="text-gray-500">Remember me</Checkbox>
//             </Form.Item>
//             <a href="#forgot" className="text-emerald-600 font-semibold hover:underline">
//               Forgot password?
//             </a>
//           </div>

//           <Form.Item className="mb-0">
//             <Button
//               type="primary"
//               htmlType="submit"
//               loading={loading}
//               block
//               className="h-12 rounded-xl font-bold tracking-wide bg-emerald-600 hover:!bg-emerald-500 border-0 shadow-lg shadow-emerald-600/30 text-white"
//             >
//               SIGN IN
//             </Button>
//           </Form.Item>
//         </Form>

//         <Divider className="my-5 text-xs text-gray-400">OR</Divider>

//         {/* Social Auth Option */}
//         <Button
//           block
//           icon={<FaGoogle className="text-red-500" />}
//           className="h-11 rounded-xl font-medium border-gray-200 hover:border-gray-300 flex items-center justify-center gap-2"
//         >
//           Sign in with Google
//         </Button>

//         {/* Footer Link */}
//         <p className="text-center text-xs text-gray-500 mt-6">
//           Don't have an account?{" "}
//           <Link to="/" className="text-emerald-600 font-semibold hover:underline">
//             Sign up for free
//           </Link>
//         </p>
//       </Card>
//     </div>
//   );
// }