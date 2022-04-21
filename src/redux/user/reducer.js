const { createSlice } = require('@reduxjs/toolkit')

const userSlice = createSlice({
    name: 'user',
    initialState: {
        currentUser: {
            name: '',
            email: '',
            pass: '',
        },
    },
    reducers: {
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload
        },
    },
})

export const { setCurrentUser } = userSlice.actions
export default userSlice.reducer
