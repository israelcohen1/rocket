import { handleFormData } from "./formData";
import "./LogIn.scss";

const LogIn: React.FC = () => {
    return (
        <div>
            <form id="logInForm" name="logInForm" onSubmit={handleFormData()}>

                <input type="text" id="userName" name="userName" placeholder="userName" required />

                <input type="password" id="password" name="password" placeholder="password" required />

                <button type="submit">log in</button>
            </form>
        </div>
    );
};
export default LogIn;