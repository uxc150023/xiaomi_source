export class AccountInfo {
  accessToken: string;
  // menus: Array<{ authName: string; authUrl: string }> = [];
  // permissions: Array<{
  //   authName: string;
  //   authUrl: string;
  //   id: number;
  //   type: number;
  // }> = [];
  // relationId: number;
  // relationLogo: string;
  // relationName: string;
  // products: any[] = [];
  /**
   * 用户类型 1-机构 2-申办方
   */
  userType: number;

  add_time: string;
  email: string;
  is_super: number;
  mobile: string;
  password: string;
  status: number;
  user_id: number;
  username: string;
}
