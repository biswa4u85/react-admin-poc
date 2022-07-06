import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { apiPostCall, apiGetCall } from '../utility/site-apis'
import { message } from 'antd';

const initialState = {
  isFetchingLogin: false,
  isFetching: false,
  error: null,
  user: null,
  token: null,
  userdata: null,
}

export const adminLogin = createAsyncThunk(
  'auth/adminLogin',
  async (params, { rejectWithValue }) => {
    const response = await apiPostCall(`/user/adminLogin`, params)
    if (response.data.status === 'error') {
      return rejectWithValue(response.data)
    }
    response.data.data['roles'] = ['super-admin']
    return response.data
  }
)

export const getProfile = createAsyncThunk(
  'auth/getProfile',
  async (params, { rejectWithValue }) => {
    const response = await apiGetCall(`/user`, params)
    if (response.data.status === 'error') {
      return rejectWithValue(response.data)
    }
    let profile = response.data.profile
    delete profile._id
    let newData = {...response.data, ...profile}
    return newData
  }
)


export const counterSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null
      state.token = null
    },
  },
  extraReducers: {
    // adminLogin
    [adminLogin.pending]: (state) => {
      state.isFetchingLogin = true
      state.error = null
    },
    [adminLogin.rejected]: (state, action) => {
      message.error(action?.payload?.message);
      state.isFetchingLogin = false
      state.error = action?.payload?.message
    },
    [adminLogin.fulfilled]: (state, action) => {
      state.isFetchingLogin = false
      state.error = null
      state.token = action?.payload?.data?.Authorization
      state.user = action?.payload.data
    },
    // getProfile
    [getProfile.pending]: (state) => {
      state.isFetching = true
      state.error = null
    },
    [getProfile.rejected]: (state, action) => {
      message.error(action?.payload?.message);
      state.isFetching = false
      state.error = action?.payload?.message
    },
    [getProfile.fulfilled]: (state, action) => {
      state.isFetching = false
      state.error = null
      state.userdata = action?.payload
    },
  }

})

export const { logout } = counterSlice.actions
export default counterSlice.reducer
