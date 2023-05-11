import { defineStore } from 'pinia';
import type { UserState, SexType } from './types';

const useUserStore = defineStore('user', {
  state: (): UserState => ({
    id: "",
    code: "",
    avatar: undefined,
    email: undefined,
    localName: undefined,
    nickName: "",
    profile: undefined,
    sex: 0,
    token: "",
    platform: ""
  }),

  getters: {
    userInfo(state: UserState): UserState {
      return { ...state };
    }
  },
  actions: {
    setToken(token: string | null) {
      this.token = "Bearer " + token;
    },
    // Set user's information
    setInfo(partial: Partial<UserState>) {
      this.$patch(partial);
    }
  }
});

export default useUserStore;
