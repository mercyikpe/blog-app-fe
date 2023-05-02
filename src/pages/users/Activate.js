import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { activateEmail, reset } from "../../features/authSlice";

import LoadingSpinner from "../../components/LoadingSpinner";

function Activate() {
  const { token } = useParams(); 
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
      navigate('/login')
    }
    if (isSuccess) {
      toast.success(message);
      navigate('/profile')
    }
    dispatch(reset());
  }, [isError, isSuccess, message, navigate, dispatch]);


  const handleActivateUser = async (e) => {
    e.preventDefault();
    dispatch(activateEmail(token)); // <-- pass the token to the activate action
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <div className="relative p-4 w-full max-w-md mx-auto mt-[20%] h-full md:h-auto text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
      <p className="mb-4 text-gray-500 dark:text-gray-300">
        Click the button below to activate your account.
      </p>
      <div className="flex justify-center items-center space-x-4">
        <button
          onClick={handleActivateUser}
          type="submit"
          className="py-2 px-3 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-900"
        >
          Activate Account
        </button>
      </div>
    </div>
  );
}

export default Activate;
