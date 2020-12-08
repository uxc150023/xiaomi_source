import { ElForm } from "element-ui/types/form";
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
    description: [{ required: true, message: "必填", trigger: "blur" }],
    status: [{ required: true, message: "必填", trigger: "change" }],
    title: [{ required: true, message: "必填", trigger: "blur" }],
  };
  downloadLoading: boolean = false;
  tempArticleData: any[] = [];
  dialogVisible: boolean = false;
  add: boolean = true;

  roleInfo: any = {};

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

  handleAdd() {
    this.dialogVisible = true;
  }

  /**
   * 新增
   */
  async handleCommit() {
    try {
      await this.roleService.addRole(this.roleInfo);
      this.$message.success("角色添加成功");
      this.fetchData();
      this.dialogVisible = false;
      (this.$refs.roleInfo as ElForm).resetFields();
    } catch (error) {
      this.messageError(error);
    }
  }

  /**
   * 编辑保存
   */
  async handleSave() {
    try {
      await this.roleService.editorRole(this.roleInfo);
      this.$message.success("角色编辑成功");
      this.fetchData();
      this.dialogVisible = false;
      (this.$refs.roleInfo as ElForm).resetFields();
    } catch (error) {
      this.messageError(error);
    }
  }

  /**
   * 删除
   * @param row
   */
  async removeRole(row: any) {
    try {
      await this.roleService.removeRole(row._id);
      this.$message.success("删除成功");
      this.fetchData();
    } catch (error) {
      this.messageError(error);
    }
  }

  editor(row: any) {
    this.roleInfo = row;
    this.dialogVisible = true;
    this.add = false;
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
