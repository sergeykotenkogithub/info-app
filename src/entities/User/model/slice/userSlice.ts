import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage'
import { setFeatureFlag } from '@/shared/features'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { initAuthData } from '../services/initAuthData'
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
      localStorage.setItem(USER_LOCALSTORAGE_KEY, action.payload.id)
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
    builder.addCase(
      initAuthData.fulfilled,
      (state, { payload }: PayloadAction<User>) => {
        state.authData = payload
        setFeatureFlag(payload.features)
        state._inited = true
      }
    )
    builder.addCase(initAuthData.rejected, (state) => {
      state._inited = true
    })
  },
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
