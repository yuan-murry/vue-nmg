<template>
  <div class="app-container">
    <Form ref="formItem" :model="formItem" inline>
      <FormItem>
        <Button
          type="primary"
          icon="md-cloud-upload"
          @click="showForm(false, null)"
          >上传资源</Button
        >
      </FormItem>
      <FormItem label-position="left" :label-width="60" label="资源名: ">
        <Input v-model="formItem.input" placeholder="请输入资源名"></Input>
      </FormItem>
      <FormItem>
        <Button
          type="primary"
          icon="ios-search"
          @click="onSearch"
          >查询</Button
        >
      </FormItem>
    </Form>
    <Table border :columns="Tcolumns" :data="Tdata">
      <template slot-scope="{ row }" slot="name">
        <strong>{{ row.name }}</strong>
      </template>
      <template slot-scope="{ row }" slot="pic">
        <viewer>
          <img style="width: 80px; height: 80px" :src="row.filePath" />
        </viewer>
      </template>

      <template slot-scope="{ row }" slot="action">
        <Button
          type="primary"
          size="small"
          style="margin-right: 5px"
          @click="showForm(true, row)"
          >编辑</Button
        >
        <Button type="error" size="small" @click="del(row)">删除</Button>
      </template>
    </Table>
    <Page
      background
      style="margin-top: 20px; margin-left: 10px"
      :total="2"
      show-total
    />
    <ImgListForm ref="imgListForm" @refreshTable="loadData" />
  </div>
</template>

<script>
import "viewerjs/dist/viewer.css";
// import { delApi, pageListApi } from "@/api/ImgList";
import ImgListForm from "@/views/components/manage/form/imgListForm";
// import { fileUrl } from "/env";

export default {
  components: { ImgListForm },
  data() {
    return {
      formItem: {
        input: "",
      },
      Tcolumns: [
        {
          title: "资源名",
          slot: "name",
          align: "center",
        },
        {
          title: "创建时间",
          key: "create_time",
          align: "center",
        },
        {
          title: "图片",
          slot: "pic",
          align: "center",
        },
        {
          title: "操作",
          slot: "action",
          width: 150,
          align: "center",
        },
      ],
      Tdata: [
        {
          name: "地图",
          create_time: "2022-11-22 16:59:30",
          filePath: "/images/map.png",
        },
        {
          name: "其他图片",
          create_time: "2022-11-22 16:59:15",
          filePath: "/images/middletop1.png",
        },
      ],
      //   imgUrl: fileUrl,
      //   searchForm: { groupName: "" },
      //   pageConfig: {
      //     pageNo: 1,
      //     pageSize: 10,
      //     total: 0,
      //   },
      //   tableData: [],
    };
  },
  created() {
    // this.onSearch();
  },
  methods: {
    onSearch() {
      // this.pageConfig.pageNo = 1;
      // this.pageConfig.pageSize = 10;
      // this.loadData();
      this.$Message.info('正在查询。。。。。。')
    },
    loadData() {
      // pageListApi(Object.assign(this.searchForm, this.pageConfig)).then(
      //   (res) => {
      //     this.tableData = res.data.records;
      //     this.pageConfig.total = res.data.total;
      //   }
      // );
    },
    handleSizeChange(val) {
      this.pageConfig.pageSize = val;
      this.loadData();
    },
    handleCurrentChange(val) {
      this.pageConfig.pageNo = val;
      this.loadData();
    },
    showForm(isEdit, row) {
      console.log(row);
      let rowData = {};
      if (isEdit) {
        rowData = JSON.parse(JSON.stringify(row));
      }
      this.$refs.imgListForm.opened(isEdit, rowData);
    },
    del(row) {
      this.$Modal.confirm({
        title: "提示",
        content: "<p>此操作将永久删除该文件, 是否继续?</p>",
        onOk: () => {
          this.$Message.info("删除成功");
        },
        onCancel: () => {
          this.$Message.info("已取消");
        },
      });
      // this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
      //   confirmButtonText: "确定",
      //   cancelButtonText: "取消",
      //   type: "warning",
      // })
      //   .then(() => {
      //     delApi(row.id).then(() => {
      //       this.$message.success("删除成功");
      //       this.loadData();
      //     });
      //   })
      //   .catch(() => {});
      console.log(row);
    },
  },
};
</script>

<style scoped></style>
