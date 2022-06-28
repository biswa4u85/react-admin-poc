import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { apiPutCall, apiGetCall, apiPostCall  } from '../utility/site-apis'
import { message } from 'antd';

const initialState = {
    isFetching: false,
    error: null,
    Promo: [],
    singlePromoDetails: {}
}

export const getPromo = createAsyncThunk(
    'Promo/getPromo',
    async (params, { rejectWithValue }) => {
        const response = await apiGetCall(`/Promo`, params)
        if (response.data.status === 'error') {
            return rejectWithValue(response.data)
        }
        return response.data
    }
)

export const singlePromo = createAsyncThunk(
    'Promo/singleUser',
    async (params, { rejectWithValue }) => {
        const response = await apiGetCall(`/Promo/${params.id}`, params)
        if (response.data.status === 'error') {
            return rejectWithValue(response.data)
        }
        return response.data
    }
)

export const updatepromo = createAsyncThunk(
    'user/updateUser',
    async (params, { rejectWithValue }) => {
      const response = await apiPutCall(`/user/profile`, params)
      if (response.data.status === 'error') {
        return rejectWithValue(response.data)
      }
      return response.data
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
        // getPromo
        [getPromo.pending]: (state, action) => {
            state.isFetching = true
            state.error = null
            state.Promo = []
        },
        [getPromo.rejected]: (state, action) => {
            state.isFetching = false
            state.error = action?.payload?.message
        },
        [getPromo.fulfilled]: (state, action) => {
            state.isFetching = false
            state.error = null
            state.Promo = action.payload.data
        },
        // singlePromo
        [singlePromo.pending]: (state, action) => {
            state.isFetching = true
            state.error = null
        },
        [singlePromo.rejected]: (state, action) => {
            state.isFetching = false
            state.error = action?.payload?.message
        },
        [singlePromo.fulfilled]: (state, action) => {
            state.isFetching = false
            state.error = null
            state.singlePromoDetails = action.payload.data
        },
    }

})

export const { logout } = counterSlice.actions
export default counterSlice.reducer
