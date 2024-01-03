import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

const initialState = {
  msg: "",
  user: "",
  token: "",
  loading: false,
  error: "",
  status: "",
};

export const signUpUser = createAsyncThunk("signupuser", async (body) => {
  const res = await fetch(
    "https://www.admin.sombhaar.com/admin/public/api/user/register",
    {
      method: "post",
      headers: {
        "Content-type": "application/json",
        // Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    }
  );
  return await res.json();
});

export const singInUser = createAsyncThunk("singInUser", async (body) => {
  const res = await fetch(
    "https://www.admin.sombhaar.com/admin/public/api/user/login",
    {
      method: "post",
      headers: {
        "Content-type": "application/json",
        // Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    }
  );
  return await res.json();
});

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addToken: (state, action) => {
      state.token = localStorage.getItem("token");
    },
    addUser: (state, action) => {
      state.user = localStorage.getItem("user");
    },
    logout: (state, action) => {
      state.token = null;
      // state.token = sessionStorage.getItem("token");
      localStorage.clear();
    },
  },
  extraReducers: (builder) => {
    builder.addCase(singInUser.pending, (state) => {
      state.loading = true;
    });
    // adad
    builder.addCase(
      singInUser.fulfilled,
      (state, { payload: { error, msg, access_token, user } }) => {
        state.loading = false;
        if (error) {
          state.error = error;
        } else {
          state.msg = msg;
          state.token = access_token;
          state.user = user;

          // sessionStorage.setItem(msg, msg);
          localStorage.setItem("user", JSON.stringify(user));
          localStorage.setItem("token", JSON.stringify(access_token));
          localStorage.setItem("msg", JSON.stringify(msg));
          // navigate("/dashbord");
        }
      }
    );
    builder.addCase(singInUser.rejected, (state) => {
      state.loading = false;
      state.status = "Something Went Wrong";
    });
    /* sigun up user */
    builder.addCase(signUpUser.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(
      signUpUser.fulfilled,
      (state, { payload: { error, msg } }) => {
        state.loading = false;
        if (error) {
          state.error = error;
        } else {
          state.msg = msg;
        }
      }
    );
    builder.addCase(signUpUser.rejected, (state) => {
      state.status = "Something Went Wrong";
    });
  },
});

export const { addToken, addUser, logout } = authSlice.actions;

export default authSlice.reducer;
