<template>
    <el-row>
        <el-button type="primary" @click="handleMock">点击获取Mock数据</el-button>
        <el-button type="success" @click="counter.increment()">点击增加Count</el-button>
        <el-divider direction="vertical" />
        <el-text class="mx-1" type="primary"> {{ counter.count }}</el-text>
    </el-row>
    <el-row>
        <el-table :data="tableData">
            <el-table-column prop="name" label="组件名" />
        </el-table>
    </el-row>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useCounterStore } from '~/stores/couter'
import { request } from '~/utils/request'

const counter = useCounterStore()
const tableData = ref([])

const handleMock = () =>
    request.get('/api/table').then((resp) => {
        tableData.value = resp.data
    })
</script>
