<!--
 * @Author: yuanyelv 287142032@qq.com
 * @Date: 2022-06-16 15:24:19
 * @LastEditors: yuanyelv 287142032@qq.com
 * @LastEditTime: 2022-06-20 09:26:20
 * @FilePath: \pcVue1\src\views\Control\user\user.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div style=" margin-bottom: 20px;">
    <div class="mt">
      <el-input
        class="ml-5"
        style="width: 200px"
        suffix-icon="Search"
        placeholder="请输入id"
        v-model="tableDataX.id"
      />
      <el-input
        class="ml-5"
        style="width: 200px"
        suffix-icon="Avatar"
        placeholder="请输入name"
        v-model="tableDataX.username"
      /><el-input
        class="ml-5"
        style="width: 200px"
        suffix-icon="Phone"
        placeholder="请输入phone"
        v-model="tableDataX.phone"
      />
      <el-button
        class="ml-5"
        type="primary"
        @click="UserTotalS"
      >
        搜索
      </el-button>
      <el-button
        style="margin-left: 100px;"
        class="ml-5"
        type="success"
        icon="CirclePlus"
        round
      >
        新增
      </el-button>
      <el-button
        class="ml-5"
        type="danger"
        icon="Close"
        round
      >
        批量删除
      </el-button>
    </div>
  </div>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%; height: 100%;"
    >
      <el-table-column
        fixed
        prop="id"
        label="id"
        width="80"
      />
      <el-table-column
        fixed
        prop="username"
        label="name"
        width="150"
      />
      <el-table-column
        prop="grade"
        label="grade"
        width="120"
      />
      <el-table-column
        prop="college"
        label="college"
        width="120"
      />
      <el-table-column
        prop="major"
        label="major"
        width="180"
      />
      <el-table-column
        prop="phone"
        label="phone"
        width="600"
      />
      <el-table-column
        prop="school"
        label="school"
        width="120"
      />
      <el-table-column
        prop="address"
        label="address"
        width="600"
      />
      <el-table-column
        fixed="right"
        label="Operations"
        width="120"
      >
        <template #default>
          <el-button
            link
            type="primary"
            size="small"
          >
            修改
          </el-button>
          <el-button
            link
            type="primary"
            size="small"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
  <div>
    <div class="demo-pagination-block">
      <el-pagination
        v-model:currentPage="tableDataX.pageNumS"
        v-model:page-size="tableDataX.pageSize"
        :page-sizes="[10, 20, 30, 50]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="UserTotal"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getUserManage } from '@/api/common'
import { UserData } from '@/api/types/common'
import { onMounted, reactive, ref } from 'vue'
import { useStore } from '@/store'

const store = useStore()
// const pageNumS = ref(1)
// const pageSizeS = ref(10)
const UserTotal = ref(0)
const tableData = ref<UserData>()
const tableDataX = reactive({
  pageSize: 10,
  pageNumS: 1,
  username: '',
  id: '',
  phone: ''
})
// const username = ref('')

onMounted(() => {
  UserTotalS()
})
onMounted(() => {
  tableDataS()
})
const UserTotalS = async () => {
  const data = await getUserManage(tableDataX.username, tableDataX.id, tableDataX.phone)
  UserTotal.value = data.total
  tableData.value = data.records
  store.state.username = tableDataX.username
}

const handleSizeChange = (pageSizeS:number) => {
  store.state.pageSize = tableDataX.pageSize
  store.state.username = tableDataX.username
  console.log(pageSizeS)
  UserTotalS()
}
const handleCurrentChange = (pageNumS:number) => {
  store.state.pageNum = tableDataX.pageNumS
  store.state.username = tableDataX.username
  console.log(pageNumS)
  UserTotalS()
}

const tableDataS = async () => {
  const data = await getUserManage(tableDataX.username, tableDataX.id, tableDataX.phone)
  console.log(data)
  tableData.value = data.records
}
</script>

<style scoped lang='scss'>
.demo-pagination-block + .demo-pagination-block {
  margin-top: 10px;
}
.demo-pagination-block .demonstration {
  margin-bottom: 16px;
}
</style>
