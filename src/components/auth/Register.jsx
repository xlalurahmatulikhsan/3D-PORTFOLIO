import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const apiUrl = import.meta.env.VITE_APP_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${apiUrl}/api/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (response.ok) {
        navigate("/login");
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert("Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-black-100 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h3 className="text-3xl font-bold text-white mb-6 text-center">
          Register
        </h3>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <label className="flex flex-col">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              placeholder="Username?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Password?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-full text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
