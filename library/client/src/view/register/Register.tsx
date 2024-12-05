import { handleFormData } from "./formData";
import "./register.scss";

const Register: React.FC = () => {
  return (
    <div>
      <form id="registerForm" name="registerForm" onSubmit={handleFormData()}>
        <input type="text" id="firstName" name="firstName" placeholder="firstName" required />

        <input type="text" id="lastName" name="lastName" placeholder="last name" required />

        <input type="text" id="userName" name="userName" placeholder="userName" required />

        <input type="email" id="email" name="email" placeholder="email" required />

        <input type="password" id="password" name="password" placeholder="password" required />

        <button type="submit">register</button>
      </form>
    </div>
  );
};
export default Register;
