import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { apiPostCall, apiGetCall,apiDeleteCall } from '../utility/site-apis'
import { message } from 'antd';

const initialState = {
    isFetchingLogin: false,
    isFetching: false,
    error: null,
    brandlist: [],
    // addbrand:true,

}
export const addbrand = createAsyncThunk(
    'brand/addbrand',
    async (params, { rejectWithValue }) => {
        const response = await apiPostCall(`/brands`, params)
        if (response.data.status === 'error') {
            return rejectWithValue(response.data)
        }
        return response.data
    }
)

export const getbrand = createAsyncThunk(
    'brand/getbrand',
    async (params, { rejectWithValue }) => {
        const response = await apiGetCall(`/brands`, params)
        if (response.data.status === 'error') {
            return rejectWithValue(response.data)
        }
        return response.data
    }
)

export const deletData = createAsyncThunk(
    'brand/deletData',
    async (params, { rejectWithValue }) => {
        // debugger
      const response = await apiDeleteCall(`/brands/${params.id}`, params)
    //   console.log(response)
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
        singledata: (state, action) => {
            state.singleres = action.payload
        },
    },
    extraReducers: {
         // addbrand
         [addbrand.pending]: (state) => {
            state.isFetching = true
            state.error = null
        },
        [addbrand.rejected]: (state, action) => {
            message.error(action?.payload?.message);
            state.isFetching = false
            state.error = action?.payload?.message
        },
        [addbrand.fulfilled]: (state, action) => {
            state.isFetching = false
            state.error = null
            state.adddata = action?.payload
        },
        // getbrand
        [getbrand.pending]: (state) => {
            state.isFetching = true
            state.error = null
        },
        [getbrand.rejected]: (state, action) => {
            message.error(action?.payload?.message);
            state.isFetching = false
            state.error = action?.payload?.message
        },
        [getbrand.fulfilled]: (state, action) => {
            state.isFetching = false
            state.error = null
            state.brandlist = action?.payload.data
        },

    }

})

export const { logout, singledata } = counterSlice.actions
export default counterSlice.reducer
