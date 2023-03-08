/* eslint-disable @typescript-eslint/indent */
import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm'
import { Profile } from '../../types/profile'

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<string>
>('profile/updateProfileData', async (_, thunkAPI) => {
  const { extra, rejectWithValue, getState } = thunkAPI

  const formData = getProfileForm(getState())

  try {
    const response = await extra.api.put<Profile>('/profile', formData)
    return response.data
  } catch (e) {
    console.log(e)
    // return thunkAPI.rejectWithValue(i18n.t('wrong-login-or-password'))
    return rejectWithValue('error')
  }
})
