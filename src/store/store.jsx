import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
// import customizedMiddleware from '../reducers/getDefaultMiddleware'
import MetroListSlice from '../reducers/MetroListSlice'
import MetroPostSlice from '../reducers/MetroPostSlice'
import SearchApiSlice from '../reducers/SearchSlice'


const store = configureStore({
    reducer: {
        metroList: MetroListSlice,
        metroPost: MetroPostSlice,
        metroSearch: SearchApiSlice,

    },
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    }),
})

export default store