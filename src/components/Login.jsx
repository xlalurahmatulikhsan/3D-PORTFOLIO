import React, { useRef, useState } from "react";

const Login = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { username, value } = target;

    setForm({
      ...form,
      [username]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-black-100 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h3 className="text-3xl font-bold text-white mb-6 text-center">
          Login
        </h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-6"
        >
          <label className="flex flex-col">
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              placeholder="Username"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Password"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-full text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
