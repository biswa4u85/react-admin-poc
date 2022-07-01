import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import utils from '../utility/frappe-apis'
import { message } from 'antd';

window.frappe = new utils.Frappe();

const initialState = {
  isFetching: false,
  error: null,
  user: null,
  token: null,
}

export const siteLogin = createAsyncThunk(
  'auth/siteLogin',
  async (params, { rejectWithValue }) => {
    let response = await window.frappe.login(params)
    if (response.data.status === 'error') {
      return rejectWithValue(response.data)
    }
    return response
  }
)

export const counterSlice = createSlice({
  name: 'auth-frappe',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null
      state.token = null
    },
  },
  extraReducers: {
    // siteLogin
    [siteLogin.pending]: (state) => {
      state.isFetching = true
      state.error = null
    },
    [siteLogin.rejected]: (state, action) => {
      message.error(action?.payload?.message);
      state.isFetching = false
      state.error = action?.payload?.message
    },
    [siteLogin.fulfilled]: (state, action) => {
      state.isFetching = false
      state.error = null
      state.token = action?.payload?.token
      state.user = action?.payload?.data
    },
  }

})

export const { logout } = counterSlice.actions
export default counterSlice.reducer
