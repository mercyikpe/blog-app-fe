import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import authService from "../../services/authService";


function ResetPassword() {
  const { token } = useParams();
  const navigate = useNavigate();
  const handleResetPassword = async () => {
    try {
      await authService.resetUserPassword({ token });
      navigate("/login");
      toast("Password reset successful");
    } catch (error) {
      toast.error(error.response.data.message);
      navigate("/login");
    }
  };

  return (
    <div className="relative p-4 w-full max-w-md mx-auto mt-[20%] h-full md:h-auto text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
      <p className="mb-4 text-gray-500 dark:text-gray-300">
        Click the button below to reset your password.
      </p>
      <div className="flex justify-center items-center space-x-4">
        <button
          onClick={handleResetPassword}
          type="submit"
          className="py-2 px-3 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-900"
        >
          Reset Password
        </button>
      </div>
    </div>
  );
}

export default ResetPassword;