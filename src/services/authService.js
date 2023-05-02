import axios from "axios";

// make http request, send the data back and set the data in the localhost
const API_URL = "http://127.0.0.1:8080/api/users";

// Register user
const registerRequest = async (userData) => {
    const response = await axios.post(`${API_URL}`, userData)
    return response.data;
};

// Activate Email
const activateEmailRequest = async (token) => {
    const response = await axios.post(`${API_URL}/activate`, { token });
  
    if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  };


//   const logout = async () => {
//     const response = await axios.post(`${API_URL}`,)
//     return response.data;
// };
  const logout = async () => {
    localStorage.removeItem('user')
};

const loginRequest = async (userData) => {
    const response = await axios.post(`${API_URL}/login`, userData);
  
    if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  };

// Forget user password
const forgetPasswordRequest = async (userData) => {
    const response = await axios.post(`${API_URL}/forget-password`, userData);
    return response.data;
};

// Reset user
const resetUserPassword = async (token) => {
    const response = await axios.post(`${API_URL}/reset-password`, token);
    return response.data;
};


const authService = {
    registerRequest,
    activateEmailRequest,
    forgetPasswordRequest,
    resetUserPassword,
    logout,
    loginRequest
};

export default authService;
