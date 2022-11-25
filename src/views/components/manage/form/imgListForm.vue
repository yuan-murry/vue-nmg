<template>
  <Modal :title="formData.name ? '编辑' : '添加'" v-model="modelShow">
    <Form
      ref="modelForm"
      :model="formData"
      :label-width="100"
      :rules="formRules"
    >
      <FormItem label="文件">
        <Upload
          multiple
          type="drag"
          :format="['jpg', 'jpeg', 'png']"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
          action="//jsonplaceholder.typicode.com/posts/"
        >
          <div v-if="!formData.name" style="padding: 20px 0">
            <Icon
              type="ios-cloud-upload"
              size="52"
              style="color: #3399ff"
            ></Icon>
            <p>点击或拖拽上传文件</p>
          </div>
          <img v-else style="width: 100%; height: 100%" :src="formData.filePath" />
        </Upload>
      </FormItem>
      <FormItem label="资源名称">
        <Input v-model="formData.imgName" placeholder="请输入资源名称" />
      </FormItem>
    </Form>
  </Modal>
</template>

<script>
// import { saveOrUpdateApi } from "@/api/ImgPool";
// import { listGroupAllApi } from "@/api/ImgGroupApi";
// import { baseUrl, fileUrl } from "/env";
// import { getToken } from "@/utils/auth";

export default {
  name: "ImgListForm",
  data() {
    return {
      uploadHeaders: { "X-Token": "getToken()" },
      fileUrl: "fileUrl",
      //   baseUrl,
      filePath: "",
      formData: {},
      modelShow: false,
      formRules: {
        groupId: [{ required: true, message: "请选择分组", trigger: "blur" }],
      },
      groups: [],
    };
  },
  methods: {
    opened(isEdit, row) {
      //   listGroupAllApi().then((res) => {
      //     this.groups = res.data;
      //   });

      this.formData = {};
      this.filePath = "";
      if (isEdit) {
        this.formData = row;
        this.filePath = this.formData.filePath;
      }
      this.modelShow = true;
    },
    submitForm() {
      this.$refs["modelForm"].validate((valid) => {
        if (valid) {
          if (!this.filePath) {
            this.$message.error("请上传图片");
          }
          this.formData.filePath = this.filePath;
          //   saveOrUpdateApi(this.formData).then(() => {
          //     this.modelShow = false;
          //     this.$emit("refreshTable");
          //   });
        }
      });
    },
    handleAvatarSuccess(res, file) {
      if (res.code !== 1) {
        this.$message.error(res.msg);
      }
      this.filePath = res.data;
      this.formData.imgName = file.name.substr(0, file.name.lastIndexOf("."));
    },
    beforeAvatarUpload(file) {
      const isIMG = file.type.substr(0, 5) === "image";
      const isLt2M = file.size / 1024 / 1024 < 10;
      if (!isIMG) {
        this.$message.error("上传资源只能是图片格式!");
      }
      if (!isIMG) {
        this.$message.error("上传图片大小不能超过 10MB!");
      }
      return isIMG && isLt2M;
    },
  },
};
</script>

<style scoped>
</style>
