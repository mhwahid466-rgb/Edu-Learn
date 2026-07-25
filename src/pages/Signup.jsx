import { useState } from "react"; 
import { message } from "antd";
import { supabase } from "../lib/supabase";
import { Button, Card, Form, Input } from "antd";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { FaUserPlus } from "react-icons/fa";
// import { Link } from "react-router";

function Signup() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false); 

  const onFinish = async (values) => {
    setLoading(true); 
    const { fullName, email, password } = values;

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        },
      },
    });

    setLoading(false); 

    if (error) {
      message.error(error.message);
      return;
    }

    message.success("Account created successfully!");

    console.log(data);
  };

  return (
    <div
      className="relative h-screen w-full overflow-hidden flex items-center justify-center px-4 py-4"
      style={{ backgroundColor: "#e4e4e4" }}
    >
      {/* Organic blobs */}
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
            <FaUserPlus size={20} color="#55B592" />
          </div>
          <h1
            className="m-0 leading-tight"
            style={{ fontSize: 26, fontWeight: 700, color: "#55B592" }}
          >
            Sign Up
          </h1>
          <p className="mt-0.5 mb-0 text-sm" style={{ color: "#888" }}>
            Create your account to get started
          </p>
        </div>

        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          requiredMark={false}
          className="[&_.ant-form-item]:!mb-2"
        >
          <Form.Item
            label={<span className="font-semibold">Full Name</span>}
            name="fullName"
            rules={[{ required: true, message: "Please enter your full name" }]}
          >
            <Input
              size="large"
              prefix={<FiUser className="text-gray-400" />}
              placeholder="Enter your full name"
              style={{ borderRadius: 10, height: 44 }}
            />
          </Form.Item>

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
            rules={[{ required: true, message: "Please enter a password" }]}
          >
            <Input.Password
              size="large"
              prefix={<FiLock className="text-gray-400" />}
              placeholder="Enter your password"
              style={{ borderRadius: 10, height: 44 }}
            />
          </Form.Item>

          <Form.Item
            label={<span className="font-semibold">Confirm Password</span>}
            name="confirmPassword"
            dependencies={["password"]}
            rules={[
              { required: true, message: "Please confirm your password" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value)
                    return Promise.resolve();
                  return Promise.reject(new Error("Passwords do not match"));
                },
              }),
            ]}
          >
            <Input.Password
              size="large"
              prefix={<FiLock className="text-gray-400" />}
              placeholder="Confirm your password"
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
              CREATE ACCOUNT
            </Button>
          </Form.Item>
        </Form>

        <p className="text-center text-sm mt-2" style={{ color: "#666" }}>
          Already have an account?{" "}
          <a href="/signin" style={{ color: "#55B592", fontWeight: 600 }}>
            Sign in
          </a>
        </p>
      </Card>
    </div>
  );
}

export default Signup;
// import { useState } from "react";
// import { message, Button, Card, Form, Input, Divider } from "antd";
// import { supabase } from "../lib/supabase";
// import { FiMail, FiLock, FiUser } from "react-icons/fi";
// import { FaGoogle, FaUserPlus } from "react-icons/fa";
// import { Link, useNavigate } from "react-router";

// export default function Signup() {
//   const [form] = Form.useForm();
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const onFinish = async (values) => {
//     setLoading(true);
//     const { fullName, email, password } = values;

//     const { data, error } = await supabase.auth.signUp({
//       email,
//       password,
//       options: {
//         data: { full_name: fullName },
//       },
//     });

//     setLoading(false);

//     if (error) {
//       message.error(error.message);
//       return;
//     }

//     message.success("Account created successfully!");
//     navigate("/signin");
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
//             <FaUserPlus size={24} className="text-emerald-600" />
//           </div>
//           <h1 className="text-2xl font-bold text-gray-800 tracking-tight">
//             Create an Account
//           </h1>
//           <p className="text-xs text-gray-500 mt-1">
//             Start managing your workspace in minutes
//           </p>
//         </div>

//         {/* Form */}
//         <Form
//           form={form}
//           layout="vertical"
//           onFinish={onFinish}
//           requiredMark={false}
//           size="large"
//           className="space-y-1"
//         >
//           <Form.Item
//             label={<span className="text-xs font-semibold text-gray-700">Full Name</span>}
//             name="fullName"
//             rules={[{ required: true, message: "Please enter your full name" }]}
//           >
//             <Input
//               prefix={<FiUser className="text-gray-400 mr-1" />}
//               placeholder="John Doe"
//               className="rounded-xl border-gray-200 hover:border-emerald-500 focus:border-emerald-500"
//             />
//           </Form.Item>

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
//             rules={[
//               { required: true, message: "Please enter a password" },
//               { min: 6, message: "Password must be at least 6 characters" }
//             ]}
//           >
//             <Input.Password
//               prefix={<FiLock className="text-gray-400 mr-1" />}
//               placeholder="••••••••"
//               className="rounded-xl border-gray-200 hover:border-emerald-500 focus:border-emerald-500"
//             />
//           </Form.Item>

//           <Form.Item
//             label={<span className="text-xs font-semibold text-gray-700">Confirm Password</span>}
//             name="confirmPassword"
//             dependencies={["password"]}
//             rules={[
//               { required: true, message: "Please confirm your password" },
//               ({ getFieldValue }) => ({
//                 validator(_, value) {
//                   if (!value || getFieldValue("password") === value) {
//                     return Promise.resolve();
//                   }
//                   return Promise.reject(new Error("Passwords do not match"));
//                 },
//               }),
//             ]}
//           >
//             <Input.Password
//               prefix={<FiLock className="text-gray-400 mr-1" />}
//               placeholder="••••••••"
//               className="rounded-xl border-gray-200 hover:border-emerald-500 focus:border-emerald-500"
//             />
//           </Form.Item>

//           <Form.Item className="pt-2">
//             <Button
//               type="primary"
//               htmlType="submit"
//               loading={loading}
//               block
//               className="h-12 rounded-xl font-bold tracking-wide bg-emerald-600 hover:!bg-emerald-500 border-0 shadow-lg shadow-emerald-600/30 text-white"
//             >
//               GET STARTED
//             </Button>
//           </Form.Item>
//         </Form>

//         <Divider className="my-4 text-xs text-gray-400">OR</Divider>

//         {/* Social Auth Option */}
//         <Button
//           block
//           icon={<FaGoogle className="text-red-500" />}
//           className="h-11 rounded-xl font-medium border-gray-200 hover:border-gray-300 flex items-center justify-center gap-2"
//         >
//           Sign up with Google
//         </Button>

//         {/* Footer Link */}
//         <p className="text-center text-xs text-gray-500 mt-6">
//           Already have an account?{" "}
//           <Link to="/signin" className="text-emerald-600 font-semibold hover:underline">
//             Sign in
//           </Link>
//         </p>
//       </Card>
//     </div>
//   );
// }
