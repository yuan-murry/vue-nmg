<template>
  <div class="app-container">
    <Form ref="formItem" :model="formItem" inline>
      <FormItem>
        <Button type="primary" icon="ios-search">上传资源</Button>
      </FormItem>
      <FormItem label-position="left" :label-width="60" label="资源名: ">
        <Input v-model="formItem.input" placeholder="请输入资源名"></Input>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit('formInline')">查询</Button>
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

      <template slot-scope="{ row, index }" slot="action">
        <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)"
          >编辑</Button
        >
        <Button type="error" size="small" @click="remove(index)">删除</Button>
      </template>
    </Table>
    <Page background style="margin-top: 20px; margin-left: 10px" :total="2" show-total />
  </div>
</template>

<script>
import "viewerjs/dist/viewer.css";
// import { delApi, pageListApi } from "@/api/ImgPool";
// import ImgPoolForm from "@/views/manage/form/ImgPoolForm";
// import { fileUrl } from "/env";

export default {
  name: "ImgPool",
  //   components: { ImgPoolForm },
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
          filePath: "/images/antm.png",
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
  //   methods: {
  //     onSearch() {
  //       this.pageConfig.pageNo = 1;
  //       this.pageConfig.pageSize = 10;
  //       this.loadData();
  //     },
  //     loadData() {
  //       pageListApi(Object.assign(this.searchForm, this.pageConfig)).then((res) => {
  //         this.tableData = res.data.records;
  //         this.pageConfig.total = res.data.total;
  //       });
  //     },
  //     handleSizeChange(val) {
  //       this.pageConfig.pageSize = val;
  //       this.loadData();
  //     },
  //     handleCurrentChange(val) {
  //       this.pageConfig.pageNo = val;
  //       this.loadData();
  //     },
  //     showForm(isEdit, row) {
  //       let rowData = {};
  //       if (isEdit) {
  //         rowData = JSON.parse(JSON.stringify(row));
  //       }
  //       this.$refs.imgPoolForm.opened(isEdit, rowData);
  //     },
  //     del(row) {
  //       this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
  //         confirmButtonText: "确定",
  //         cancelButtonText: "取消",
  //         type: "warning",
  //       })
  //         .then(() => {
  //           delApi(row.id).then(() => {
  //             this.$message.success("删除成功");
  //             this.loadData();
  //           });
  //         })
  //         .catch(() => {});
  //     },
  //   },
};
</script>

<style scoped></style>
