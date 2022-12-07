<template>
  <div class="app-container">
    <Form ref="formItem" :model="formItem" inline>
      <FormItem>
        <Button type="primary" icon="md-cloud-upload" @click="showForm(false, null)"
          >上传资源</Button
        >
      </FormItem>
      <FormItem label-position="left" :label-width="60" label="分组名: ">
        <Select
          v-model="searchForm.groupName"
          style="width: 200px"
          placeholder="查询分组名"
          :transfer="true"
        >
          <Option v-for="item in ThemeList" :value="item.value" :key="item.value">{{
            item.label
          }}</Option>
        </Select>
      </FormItem>
      <FormItem>
        <Button type="primary" icon="ios-search" @click="onSearch">查询</Button>
      </FormItem>
    </Form>
    <Table
      border
      :columns="Tcolumns"
      :data="Tdata"
      @on-drag-drop="onDragDrop"
      :draggable="true"
    >
      <template slot-scope="{ row }" slot="titleName">
        <strong>{{ row.titleName }}</strong>
      </template>
      <template slot-scope="{ row }" slot="pic">
        <viewer>
          <img
            style="width: 80px; height: 80px"
            :src="baseReqUrl + '/download?fileId=' + row.filePath"
          />
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
      :total="AllData.length"
      :page-size="pageConfig.pagePieces"
      show-total
      show-elevator
      @on-change="pageChange"
    />
    <ImgListForm ref="imgListForm" @refreshTable="loadData" />
  </div>
</template>

<script>
import "viewerjs/dist/viewer.css";
import Sever from "@/api/selfApi";
import { baseReqUrl } from "@/api/baseUrl";
import formatDate from "@/common/communal";
import ImgListForm from "@/views/components/manage/form/imgListForm";
export default {
  components: { ImgListForm },
  data() {
    return {
      formItem: {
        input: "",
      },
      ThemeList: [
        {
          value: "",
          label: "查询所有",
        },
        {
          value: "theme_blue",
          label: "主题1",
        },
        {
          value: "theme_red",
          label: "主题2",
        },
      ],
      Tcolumns: [
        {
          title: "分组",
          key: "themeName",
          align: "center",
          render: (h, params) => {
            const themeNames = [];
            params.row.themeName.forEach((item) => {
              let nameTemp = "";
              if (item == "theme_blue") {
                nameTemp = "主题1";
              } else if (item == "theme_red") {
                nameTemp = "主题2";
              }
              const nameBox = h(
                "span",
                { style: { color: "#0D90E0", marginRight: "15px" } },
                nameTemp
              );
              themeNames.push(nameBox);
            });
            return h("div", themeNames);
          },
        },
        {
          title: "资源名",
          slot: "titleName",
          align: "center",
        },
        {
          title: "创建时间",
          key: "updateTime",
          align: "center",
          sortable: true,
          render: (h, params) => {
            return h(
              "div",
              formatDate(new Date(params.row.updateTime), "yyyy-MM-dd hh:mm:ss")
            );
          },
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
        // {
        //   name: "地图",
        //   create_time: "2022-11-22 16:59:30",
        //   filePath: "/images/map.png",
        // },
      ],
      AllData: [],
      baseReqUrl,
      searchForm: { groupName: "" },
      pageConfig: {
        pagePieces: 10,
      },
      tableData: [],
    };
  },
  created() {
    this.onSearch();
  },
  methods: {
    onSearch() {
      this.loadData();
      this.$Message.info("正在查询数据");
    },
    async loadData() {
      await Sever.smz
        .getAllImg(this.searchForm)
        .then((res) => {
          if (res.code == 1) {
            this.AllData = res.data;
            //首页内容展示
            this.Tdata = this.AllData.slice(0, this.pageConfig.pagePieces);
            // this.Tdata = [
            //   {
            //     filePath: "/yccc/35a1c323ec5040aa82e36b62c1180697.png",
            //     themeName: ["theme_red"],
            //     titleName: "测试测试主题内容名称",
            //     imgId: "d9292bae-6d80-47c6-9dcd-6c5e3ce4f32e",
            //     updateTime: 1669971228735,
            //   },
            // ];
          } else {
            this.$Message.error("获取数据失败");
          }
        })
        .catch((err) => {
          console.log(err);
        });
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
          this.delImg(row.imgId);
        },
        onCancel: () => {
          this.$Message.info("已取消");
        },
      });
    },
    async delImg(imgId) {
      await Sever.smz
        .delImg(imgId)
        .then((res) => {
          if (res.code == 1) {
            this.$Message.success("删除成功");
            this.loadData();
          } else {
            this.$Message.error("删除失败");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    pageChange(page) {
      // 开始节点
      let startPage = page * this.pageConfig.pagePieces - this.pageConfig.pagePieces;
      // 结束节点
      let endPage = page * this.pageConfig.pagePieces;
      // 获取n页的数据
      this.Tdata = this.AllData.slice(startPage, endPage);
    },
    onDragDrop(first, end) {
      first = parseInt(first);
      end = parseInt(end);

      let tmp = this.Tdata[first];

      if (first < end) {
        for (var i = first + 1; i <= end; i++) {
          this.Tdata.splice(i - 1, 1, this.Tdata[i]);
        }
        this.Tdata.splice(end, 1, tmp);
      }

      if (first > end) {
        for (var k = first; k > end; k--) {
          this.Tdata.splice(k, 1, this.Tdata[k - 1]);
        }
        this.Tdata.splice(end, 1, tmp);
      }

      //重置排序值
      let index = 1;
      this.Tdata.forEach((e) => {
        e.sortNum = index;
        index++;
      });
      this.saveSort();
    },
    async saveSort() {
      await Sever.smz
        .saveSort({ imgList: this.Tdata })
        .then((res) => {
          if (res.code == 1) {
            console.log("12312312");
          } else {
            this.$Message.error("获取数据失败");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.ivu-table-body {
  position: fixed !important;
}
</style>
