import { BaseService } from "./base.serv";

export interface IRoleService {
  // SGV-BUILD-SERVICE-INTERFACE # NOT DELETE
  login(userName: string, password: string): Promise<any>;
  getRoles(params: any): Promise<any>;
}

type IRoleServiceConstructor = new () => IRoleService;

export function createSystemService(
  ctor: IRoleServiceConstructor,
): IRoleService {
  return new ctor();
}

export class RoleService extends BaseService implements IRoleService {
  constructor() {
    super();
  }
  // SGV-BUILD-SERVICE-FUNCTION # NOT DELETE
  public login(userName: string, password: string): Promise<any> {
    return this.proxyHttp.post("login", { userName, password });
  }
  public getRoles(params: any): Promise<any> {
    return this.proxyHttp.post("getRoles", params);
  }
}
