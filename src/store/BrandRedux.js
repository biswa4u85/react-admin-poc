import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { apiPostCall, apiGetCall } from '../utility/site-apis'
import { message } from 'antd';

const initialState = {
    isFetchingLogin: false,
    isFetching: false,
    error: null,
    brandlist: [],

}

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





export const counterSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        singledata: (state, action) => {
            state.singleres = action.payload
        },
    },
    extraReducers: {
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
