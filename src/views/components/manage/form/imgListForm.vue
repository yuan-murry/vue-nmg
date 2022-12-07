<template>
  <Modal
    :title="formData.name ? '编辑' : '添加'"
    v-model="modelShow"
    :mask-closable="false"
    @on-cancel="cancleButton('formData')"
  >
    <Form ref="formData" :model="formData" :label-width="100" :rules="formRules">
      <FormItem label="文件">
        <div class="demo-upload-list" v-for="(item, index) in uploadList" :key="index">
          <template v-if="item.status === 'finished'">
            <img :src="item.url" />
            <div class="demo-upload-list-cover">
              <!-- // 眼睛按钮图标，点击可预览图片 -->
              <Icon type="ios-eye-outline" @click.native="handleView(item.name)"></Icon>
              <!-- // 删除图标，详情时，若不可更改，把删除按钮隐藏 -->
              <Icon
                v-if="!isDisabled"
                type="ios-trash-outline"
                @click.native="handleRemove(item)"
              ></Icon>
            </div>
          </template>
          <template v-else>
            <Progress
              v-if="item.showProgress"
              :percent="item.percentage"
              hide-info
            ></Progress>
          </template>
        </div>
        <Upload
          v-show="!isDisabled"
          ref="upload"
          :show-upload-list="false"
          :default-file-list="defaultList"
          :on-success="handleSuccess"
          :format="['jpg', 'jpeg', 'png']"
          :max-size="10240"
          :on-format-error="handleFormatError"
          :on-exceeded-size="handleMaxSize"
          :on-error="handleError"
          :before-upload="handleBeforeUpload"
          type="drag"
          :action="baseReqUrl + '/upload?dir=yccc'"
          style="display: inline-block; width: 60px"
        >
          <div style="width: 60px; height: 60px; line-height: 60px">
            <Icon type="ios-camera" size="20"></Icon>
          </div>
        </Upload>
        <!-- // 当时详情页且无图片需要回显时显示暂无 -->
        <div v-show="uploadList.length === 0 && isDisabled">暂无</div>
        <div style="color: red; font-size: 12px">*只能上传一张图片</div>
        <Modal title="查看图片" v-model="dialogVisible">
          <img :src="dialogImageUrl" v-if="dialogVisible" style="width: 100%" />
        </Modal>
      </FormItem>
      <FormItem label="资源类别" prop="themeName">
        <Select v-model="formData.themeName" multiple style="width: 260px">
          <Option v-for="item in themeList" :value="item.value" :key="item.value">{{
            item.label
          }}</Option>
        </Select>
      </FormItem>
      <FormItem label="资源标题">
         <Input v-model="formData.titleName" type="textarea" :autosize="{minRows: 1,maxRows: 5}" placeholder="请输入资源标题"></Input>
      </FormItem>
      <FormItem label="资源标题内容">
         <Input v-model="formData.titleText" type="textarea" :autosize="{minRows: 3,maxRows: 6}" placeholder="请输入资源标题内容"></Input>
      </FormItem>
    </Form>
    <div slot="footer">
      <Button type="text" @click="cancleButton('formData')">取消</Button>
      <Button type="primary" @click="handleSubmit('formData')">确定</Button>
    </div>
  </Modal>
</template>

<script>
import Sever from "@/api/selfApi";
import { baseReqUrl } from "@/api/baseUrl";
export default {
  name: "ImgListForm",
  data() {
    return {
      // 根据需要在data中定义以下字段
      isDisabled: false, // 展示详情时为TRUE
      imgName: "",
      uploadList: [], // 上传封面图片数组
      dialogImageUrl: "", // banner
      dialogVisible: false, // 上传图片预览
      defaultList: [],
      formData: {
        themeName: [],
        titleName: "",
        titleText: "",
        filePath: "",
      },
      baseReqUrl,
      modelShow: false,
      formRules: {
        themeName: [
          { required: true, message: "请选择分组", trigger: "blur", type: "array" },
        ],
      },
      groups: [],
      themeList: [
        {
          value: "theme_blue",
          label: "主题1",
        },
        {
          value: "theme_red",
          label: "主题2",
        },
      ],
    };
  },
  mounted() {
    // 从upload实例中获取文件列表
    this.uploadList = this.$refs.upload.fileList;
  },
  methods: {
    opened(isEdit, row) {
      this.formData = {};
      this.filePath = "";
      this.defaultList = [];
      // this.defaultList = [
      //   {
      //     name: "a42bdcc1178e62b4694c830f028db5c0",
      //     url: "/api/api/download?fileId=/yccc/030db57f733f4792831f53912448bad5.png",
      //   },
      // ];
      if (isEdit) {
        this.formData = row;
        this.filePath = this.formData.filePath;
        this.defaultList.push({ url: baseReqUrl + "/download?fileId=" + this.filePath });
        this.dialogImageUrl = baseReqUrl + "/download?fileId=" + this.filePath;
      }
      this.modelShow = true;
      this.$nextTick(() => {
        this.uploadList = this.$refs.upload.fileList;
      });
    },
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          if (!this.formData.filePath) {
            this.$Message.warning("请上传图片");
          } else {
            this.saveOrUpdateImg();
          }
        }
      });
    },
    async saveOrUpdateImg() {
      await Sever.smz
        .saveOrUpdateImg(this.formData)
        .then((res) => {
          if (res.code == 1) {
            this.$Message.success("操作成功！");
            this.$refs.upload.clearFiles();
            this.modelShow = false;
            this.$emit("refreshTable");
          } else {
            this.$Message.error("操作失败！");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    cancleButton(name) {
      this.$refs[name].resetFields();
      this.$refs.upload.clearFiles();
      this.modelShow = false;
    },

    // 预览图片
    handleView(name) {
      this.imgName = name;
      this.dialogVisible = true;
    },
    // 删除图片
    handleRemove(file) {
      // 从 upload 实例删除数据
      const fileList = this.$refs.upload.fileList;
      this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
      // 需要删除imgid，以免调用接口时没有情况，会导致删除失败的bug
      // this.formValidate.imgId = "";
      // 也不需要回显，清空即可
      this.dialogImageUrl = "";
    },
    // 上传成功的钩子
    handleSuccess(res, file) {
      // 拼接完整路由
      file.url = baseReqUrl + "/download?fileId=" + res.data;
      // 回显时会用到
      this.dialogImageUrl = baseReqUrl + "/download?fileId=" + res.data;
      // // 赋值给imgid，新增和编辑的时候会用到
      this.formData.filePath = res.data;
    },
    // 上传失败的钩子
    handleError() {
      this.$Message.error("上传失败，请稍后重试！");
    },
    // 检验文件格式错误的钩子
    handleFormatError(file) {
      this.$Notice.warning({
        title: "文件格式不正确",
        desc: "文件 " + file.name + " 格式不正确，请上传 jpg 或 png 格式的图片。",
      });
    },
    // 限制图片大小的钩子
    handleMaxSize(file) {
      this.$Notice.warning({
        title: "超出文件大小限制",
        desc: "文件 " + file.name + " 太大，不能超过 10M。",
      });
    },
    // 图片上传前调用的钩子
    handleBeforeUpload() {
      const check = this.uploadList.length < 1;
      if (!check) {
        this.$Message.error("最多只能上传 1 张图片,请删除后再上传！");
      }
      return check;
    },
  },
};
</script>

<style scoped>
.demo-upload-list {
  display: inline-block;
  width: 60px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  border: 1px solid transparent;
  border-radius: 4px;
  overflow: hidden;
  background: #fff;
  position: relative;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  margin-right: 4px;
}
.demo-upload-list img {
  width: 100%;
  height: 100%;
}
.demo-upload-list-cover {
  display: none;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
}
.demo-upload-list:hover .demo-upload-list-cover {
  display: block;
}
.demo-upload-list-cover i {
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  margin: 0 2px;
}
</style>
