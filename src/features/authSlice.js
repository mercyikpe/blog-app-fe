import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import authService from "../services/authService";

// save user data from the backend to localStorage
const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

// Register user
export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      return await authService.registerRequest(user);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.error.message) ||
        error.message ||
        error.toSring();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Activate user email
export const activateEmail = createAsyncThunk(
  "auth/activate",
  async (token, thunkAPI) => {
    try {
      const response = await authService.activateEmailRequest(token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Logout user
export const logout = createAsyncThunk("auth/logout", async () => {
  await authService.logout();
});

// Login user
export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  try {
    return await authService.loginRequest(user);
  } catch (error) {
    const message = error.response.data.error.message;
    return thunkAPI.rejectWithValue(message);
  }
});

// Forget Password
export const forgetPassword = createAsyncThunk(
  "auth/forgetPasswordRequest",
  async (user, thunkAPI) => {
    try {
      return await authService.forgetPasswordRequest(user);
    } catch (error) {
      const message = error.response.data.error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;

        // state.message = action.payload.message;
        state.message = action.payload;
        state.user = null;
      })

      .addCase(activateEmail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(activateEmail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
        state.user = action.payload;
      })
      .addCase(activateEmail.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      // forget password
      .addCase(forgetPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(forgetPassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(forgetPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })

      // logout
      .addCase(logout.fulfilled, (state) => {
        state.user = null
      })

      // login
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        // state.message = action.payload.error.message;
        state.message = action.payload;
        state.user = null
      })
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
