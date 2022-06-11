import { useState } from "react";
import validator from "validator";

function Form() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confirm_password: "",
  });
  const [error, setError] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (!validator.isEmail(inputs.email)) {
      setError("Invalid Email");
      return;
    }
    if (inputs.password.length < 4) {
      setError("Password must be at least 4 characters");
      return;
    }
  };
  return (
    <div className="container my-5">
      <form>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            name="email"
            onChange={handleChange}
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            value={inputs.email}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            password
          </label>
          <input
            name="password"
            onChange={handleChange}
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter password"
            value={inputs.password}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="confirm-password" className="form-label">
            Confirm Password
          </label>
          <input
            name="confirm_password"
            onChange={handleChange}
            type="password"
            className="form-control"
            id="confirm-password"
            placeholder="Enter password"
            value={inputs.confirm_password}
          />
        </div>
        {error && <p className="text-danger">{error}</p>}
        <button
          className="btn btn-primary"
          type="submit"
          name="submit"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
