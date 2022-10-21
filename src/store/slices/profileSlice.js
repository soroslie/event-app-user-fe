import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  membershipType: '',
  email: '',
  balance: 0,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,

  reducers: {
    setProfile: (state, action) => ({
      membershipType: action.payload.membershipType,
      email: action.payload.email,
      balance: action.payload.balance,
    }),
    updateMembershipType: (state, action) => ({
      ...state,
      membershipType: action.payload.membershipType,
    }),
  },
});

export const { setProfile, updateMembershipType } = profileSlice.actions;
export default profileSlice.reducer;
