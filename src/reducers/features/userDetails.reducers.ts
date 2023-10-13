import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
  value: UserDetailsState;
};

export type UserDetailsState = {
  email: string;
  username: string;
  profileImage: string;
  isMfaEnabled: boolean;
};

const initialState: InitialState = {
  value: {
    email: '',
    username: '',
    profileImage: '',
    isMfaEnabled: false
  },
};

export const UserDetailsReducers = createSlice({
  name: 'userDetails',
  initialState,
  reducers: {
    userLogout: () => {
      return initialState;
    },
    addUserDetails: (state, action: PayloadAction<any>) => {
      return {
        value: {
          ...action.payload
        },
      };
    },
  },
});

export const { userLogout, addUserDetails } = UserDetailsReducers.actions;
export default UserDetailsReducers.reducer;
