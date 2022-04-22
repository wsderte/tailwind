const { createSlice } = require('@reduxjs/toolkit')

const userSlice = createSlice({
    name: 'user',
    initialState: {
        currentUser: {
            name: '',
            email: '',
            pass: '',
        },
        authorizedStatus: false,
    },
    reducers: {
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload
        },
        setAuthorizedStatus: (state, action) => {
            if (typeof action.payload === 'boolean') {
                state.authorizedStatus = action.payload
            } else {
                console.log('authorizedStatus type error')
            }
        },
    },
})

export const { setCurrentUser, setAuthorizedStatus } = userSlice.actions
export default userSlice.reducer
