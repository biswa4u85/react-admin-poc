import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { apiPutCall, apiGetCall, apiPostCall } from '../utility/site-apis'
import { message } from 'antd';

const initialState = {
    isFetching: false,
    error: null,
    Promolist: [],
    issuccess: false,
    singledata:{}
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

export const addPromo = createAsyncThunk(
    'Promo/addPromo',
    async (params, { rejectWithValue }) => {
        const response = await apiGetCall(`/Promo`, params)
        if (response.data.status === 'error') {
            return rejectWithValue(response.data)
        }
        return response.data
    }
)

export const updatepromo = createAsyncThunk(
    'Promo/updatepromo',
    async (params, { rejectWithValue }) => {
        const response = await apiPutCall(`/Promo/${params.id}`, params)
        if (response.data.status === 'error') {
            return rejectWithValue(response.data)
        }
        return response.data
    }
)

export const deletpromo = createAsyncThunk(
    'Promo/deletpromo',
    async (params, { rejectWithValue }) => {
        // console.log(params)
        const response = await apiDeleteCall(`/Promo/${params.id}`, params)
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
        singleid: (state, action) => {
            // console.log(action)
            state.singledata = action.payload
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
            state.Promolist = action.payload.data
        },
        // addPromo
        [addPromo.pending]: (state, action) => {
            state.isFetching = true
            state.error = null
            state.issuccess = false
        },
        [addPromo.rejected]: (state, action) => {
            state.isFetching = false
            state.error = action.payload
        },
        [addPromo.fulfilled]: (state, action) => {
            state.isFetching = false
            state.error = null
            state.issuccess = true
        },
        // updatepromo
        [updatepromo.pending]: (state, action) => {
            state.isFetching = true
            state.error = null
            state.issuccess = false
        },
        [updatepromo.rejected]: (state, action) => {
            // alert(action.payload);
            state.isFetching = false
            state.error = action.payload
        },
        [updatepromo.fulfilled]: (state, action) => {
            state.isFetching = false
            state.error = null
            // console.log(action.payload)
            state.issuccess = true
        },
        // deletpromo
        [deletpromo.pending]: (state, action) => {
            state.isFetching = true
            state.error = null
            state.issuccess = false
        },
        [deletpromo.rejected]: (state, action) => {
            state.isFetching = false
            state.error = action.payload
        },
        [deletpromo.fulfilled]: (state, action) => {
            state.isFetching = false
            state.error = null
            state.issuccess = true
        },
    }

})

export const { logout,singleid } = counterSlice.actions
export default counterSlice.reducer
