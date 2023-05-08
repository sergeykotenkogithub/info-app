import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage'
import { setFeatureFlag } from '@/shared/features'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { saveJsonSettings } from '../services/saveJsonSettings'
import { JsonSettings } from '../types/jsonSettings'
import { User, UserSchema } from '../types/user'

const initialState: UserSchema = {
  _inited: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload
      setFeatureFlag(action.payload.features)
    },
    initialAuthData: (state) => {
      const user = localStorage.getItem(USER_LOCALSTORAGE_KEY)
      if (user) {
        const json = JSON.parse(user) as User
        state.authData = json
        setFeatureFlag(json.features)
      }
      state._inited = true
    },
    logout: (state) => {
      state.authData = undefined
      localStorage.removeItem(USER_LOCALSTORAGE_KEY)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      saveJsonSettings.fulfilled,
      (state, { payload }: PayloadAction<JsonSettings>) => {
        if (state.authData) state.authData.jsonSettings = payload
      }
    )
  },
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
