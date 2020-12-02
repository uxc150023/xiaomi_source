import Vue from "vue";
import Component, { mixins } from "vue-class-component";
import { AutowiredService } from "../../../../lib/sg-resource/decorators";
import { PaginationInfo } from "../../../core/domain/PaginationInfo";
import { RoleService } from "../../../core/services/role.serv";
import BasePage from "../../BasePage";

interface IRolelistPage {
  tableKey: number;
  list: any[];
  total: number;
  listLoading: boolean;
  listQuery: any;
  importanceOptions: any[];
  sortOptions: any[];
  statusOptions: any[];
  showReviewer: boolean;
  dialogFormVisible: boolean;
  dialogStatus: string;
  textMap: any;
  dialogPageviewsVisible: boolean;
  pageviewsData: any[];
  downloadLoading: boolean;
  tempArticleData: any;
  /**
   * 获取页面展示所需的远程数据
   */
  fetchData(): void;
}

@Component({
  components: {},
  name: "rolelist",
})
export default class RolelistPage extends mixins(BasePage)
  implements IRolelistPage {
  title: string = "Rolelist";
  @AutowiredService
  roleService: RoleService;

  paginationInfo: PaginationInfo = new PaginationInfo();
  tableKey: number = 0;
  list: any[] = [];
  total: number = 0;
  listLoading: boolean = true;
  listQuery: any = {
    importance: undefined,
    limit: 20,
    page: 1,
    title: undefined,
    type: undefined,
    sort: "+id",
  };
  importanceOptions: any[] = [1, 2, 3];
  sortOptions: any[] = [
    { label: "ID Ascending", key: "+id" },
    { label: "ID Descending", key: "-id" },
  ];
  statusOptions: any[] = ["published", "draft", "deleted"];
  showReviewer: boolean = false;
  dialogFormVisible: boolean = false;
  dialogStatus: string = "";
  textMap: any = {
    update: "Edit",
    create: "Create",
  };
  dialogPageviewsVisible: boolean = false;
  pageviewsData: any[] = [];
  rules = {
    type: [{ required: true, message: "type is required", trigger: "change" }],
    timestamp: [
      { required: true, message: "timestamp is required", trigger: "change" },
    ],
    title: [{ required: true, message: "title is required", trigger: "blur" }],
  };
  downloadLoading: boolean = false;
  tempArticleData: any[] = [];
  dialogVisible: boolean = true;

  fetchData() {
    this.getRoles();
  }

  async getRoles() {
    try {
      const res = await this.roleService.getRoles({ ...this.paginationInfo });
      this.list = res.pageData;
      this.listLoading = false;
      this.total = res.total;
      this.paginationInfo.totalSize = res.totalSize;
    } catch (error) {
      this.listLoading = false;
      this.messageError(error);
    }
  }

  sortChange(data: any) {
    const { prop, order } = data;
    if (prop === "id") {
      this.sortByID(order);
    }
  }

  sortByID(order: string) {
    if (order === "ascending") {
      this.listQuery.sort = "+id";
    } else {
      this.listQuery.sort = "-id";
    }
    this.handleFilter();
  }

  handleFilter() {
    this.listQuery.page = 1;
    this.getRoles();
  }

  getSortClass(key: string) {
    const sort = this.listQuery.sort;
    return sort === `+${key}`
      ? "ascending"
      : sort === `-${key}`
      ? "descending"
      : "";
  }

  handleChangePage(val: number) {
    this.paginationInfo.pages = val;
    this.fetchData();
  }

  handleSizeChange(val: number) {
    this.paginationInfo.pages = 1;
    this.paginationInfo.pageSize = val;
    this.fetchData();
  }

  /* 生命钩子 START */
  mounted() {
    //
    this.fetchData();
  }
}
