import { BaseService } from "./base.serv";

export interface IRoleService {
  // SGV-BUILD-SERVICE-INTERFACE # NOT DELETE
  login(userName: string, password: string): Promise<any>;
  getRoles(params: any): Promise<any>;
  addRole(params: any): Promise<any>;
  editorRole(params: any): Promise<any>;
  removeRole(id: string): Promise<any>;
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
  public addRole(params: any): Promise<any> {
    return this.proxyHttp.post("addRole", params);
  }
  public editorRole(params: any): Promise<any> {
    return this.proxyHttp.post("editorRole", params);
  }
  public removeRole(id: string): Promise<any> {
    return this.proxyHttp.delete("removeRole", [id]);
  }
}
