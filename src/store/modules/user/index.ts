import { defineStore } from 'pinia';
import type { UserState } from './types';

const useUserStore = defineStore('user', {
  state: (): UserState => ({
    id: "",
    isTeamOwner: 0,
    nickName: "默认姓名",
    remark: undefined,
    avatar: undefined,
    email: undefined,
    contactNumber: undefined,
    certificateNumber: undefined,
    certificateType: undefined,
    contactAddress: undefined,
    sex: 0,
    platform: "",
    token: "",
    code: "",
    teamCode: null,
    teamName: null,
    teams: [] //当前团队内的所有成员
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
    },
    setTeams(list: Array<UserState>) {
      this.teams.splice(0, this.teams.length, ...list);
    }
  }
});

export default useUserStore;
