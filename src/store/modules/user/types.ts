export type RoleType = '' | '*' | 'admin' | 'user';
export interface UserState {
  id: string,
  code: string,
  avatar?: string,
  certificateNumber?: number,
  certificateType?: string,
  contactAddress?: string,
  contactNumber?: string,
  email?: string,
  emailReal?: string,
  isComplete?: string,
  isTeamOwner: Number,
  isReal?: string,
  labels?: Array<any>,
  nationCode?: string,
  remark?: string,
  localName?: string,
  nickName: string,
  numberReal?: string,
  otherName?: string,
  profile?: string,
  regionCode?: string,
  tin?: string,
  wechartNo?: string,
  whatsapp?: string,
  sex: number,
  token: string;
  platform: string;
  teamCode: string | null;
  teamName: string | null;
  teams: Array<any>;
}
