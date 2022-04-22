import { configureStore } from '@reduxjs/toolkit'
import courseReducer from './course/reducer'
import userReducer from './user/reducer'

export const store = configureStore({
    reducer: {
        course: courseReducer,
        user: userReducer,
    },
})
