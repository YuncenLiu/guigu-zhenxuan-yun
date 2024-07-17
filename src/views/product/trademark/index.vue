<template>
  <el-card class="box-card">
    <el-button type="primary" size="default" icon="Plus">添加品牌</el-button>

    <!-- 表格组件：用于展示已有得平台数据 -->
    <!-- table:---border:可以设置表格纵向是否有边框
              table-column:---label:某一个列表 ---width:设置这列宽度 ---align:设置这一列对齐方式
          -->
    <el-table style="margin: 10px 0" border :data="trademarkArr">
      <el-table-column
        label="序号"
        width="80px"
        align="center"
        type="index"
      ></el-table-column>
      <!-- 可以在 el-table-column 上直接加 prop 也可以使用 template 自定义插槽 -->
      <el-table-column label="品牌名称" prop="tmName">
        <template #="{ row, $index }">
          <pre style="color: #e6a23c; text-align: center">{{ row.tmName }}</pre>
        </template>
      </el-table-column>
      <el-table-column label="品牌logo">
        <template #="{ row, $index }">
          <img :src="row.logoUrl" style="width: 100px; height: 100px" />
        </template>
      </el-table-column>
      <el-table-column label="创建时间" prop="createTime"></el-table-column>
      <el-table-column label="修改时间" prop="updateTime"></el-table-column>
      <el-table-column label="品牌操作">
        <template #="{ row, $index }">
          <el-button type="primary" size="small" icon="Edit">修改</el-button>
          <el-button type="danger" size="small" icon="Delete">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页器组件
               pagination
                  v-model:current-page:设置分页器当前页码
                  v-model:page-size:设置每一个展示数据条数
                  page-sizes:用于设置下拉菜单数据
                  background:设置分页器按钮的背景颜色
                  layout:可以设置分页器六个子组件布局调整
           -->
    <el-pagination
      @size-change="sizeChange"
      @current-change="getHasTrademark"
      :pager-count="9"
      v-model:current-page="pageNo"
      v-model:page-size="limit"
      :page-sizes="[10, 30, 50, 100]"
      :background="true"
      layout="prev, pager, next, jumper,->,sizes,total"
      :total="total"
    />
  </el-card>
</template>

<script setup lang="ts">
import { ElMessage, UploadProps, formEmits } from 'element-plus'
// 引入组合式API函数ref
import { ref, onMounted, reactive, nextTick } from 'vue'
// 引入接口函数
import { reqHasTrademark } from '@/api/product/trademark'
// 当前页码
let pageNo = ref<number>(1)
// 每一页展示多少条数据
let limit = ref<number>(10)
// 存储已有品牌数据总数
let total = ref<number>(0)
// 存储已有品牌的数据
let trademarkArr = ref<any>([])

// 这个自定义事件,分页器组件会将下拉菜单选中数据返回
const sizeChange = () => {
  getHasTrademark()
}

// 获取已有品牌的接口封装为一个函数:在任何情况下向获取数据,调用次函数即可
const getHasTrademark = async (pager = 1) => {
  pageNo.value = pager
  let result = await reqHasTrademark(pageNo.value, limit.value)
  console.log('trademark', result)
  if (result.code === 200) {
    total.value = result.data.total
    trademarkArr.value = result.data.records
  }
}

onMounted(() => {
  getHasTrademark()
})
</script>

<style scoped></style>
