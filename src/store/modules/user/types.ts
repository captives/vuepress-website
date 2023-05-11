export type SexType = 0 | 1 | 2;
export interface UserState {
  id: string,
  code: string,
  avatar?: string,
  email?: string,
  localName?: string,
  nickName: string,
  profile?: string,
  sex: SexType,
  token: string;
  platform: string;
}
