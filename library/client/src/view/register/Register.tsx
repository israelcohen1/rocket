import { handleFormData } from "./formData";
import "./register.scss";

const Register: React.FC = () => {
  return (
    <div>
      <form id="registerForm" name="registerForm" onSubmit={handleFormData()}>
        <label htmlFor="firstName">first name</label>
        <input type="text" id="firstName" name="firstName" required />

        <label htmlFor="lastName">last name</label>
        <input type="text" id="lastName" name="lastName" required />

        <label htmlFor="userName">user name</label>
        <input type="text" id="userName" name="userName" required />

        <label htmlFor="email">email</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="password">password</label>
        <input type="password" id="password" name="password" required />
        <button type="submit">aaa</button>
      </form>
    </div>
  );
};
export default Register;
