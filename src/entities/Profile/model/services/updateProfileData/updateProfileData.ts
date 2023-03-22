/* eslint-disable @typescript-eslint/indent */
import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm'
import { Profile, ValidateProfileError } from '../../types/profile'
import { validateProfileData } from '../validateProfileData/validateProfileData'

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<ValidateProfileError[]>
>('profile/updateProfileData', async (_, thunkAPI) => {
  const { extra, rejectWithValue, getState } = thunkAPI

  const formData = getProfileForm(getState())

  const errors = validateProfileData(formData)

  if (errors.length) {
    return rejectWithValue(errors)
  }

  try {
    const response = await extra.api.put<Profile>(
      `/profile/${formData?.id}`,
      formData
    )

    if (!response.data) {
      throw new Error()
    }

    return response.data
  } catch (e) {
    console.log(e)
    // return thunkAPI.rejectWithValue(i18n.t('wrong-login-or-password'))
    return rejectWithValue([ValidateProfileError.SERVER_ERROR])
  }
})
