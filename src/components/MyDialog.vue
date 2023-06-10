<template>
    <el-dialog v-model="dialogValue.visible" title="用户录入">
        <el-form>
            <el-form-item label="姓名">
                <el-input v-model="name" autocomplete="off" />
            </el-form-item>
            <el-form-item label="邮箱">
                <el-input v-model="email" autocomplete="off" />
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogValue.visible = false">取消</el-button>
                <el-button type="primary" @click="handleClick">确认</el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script setup>
import { inject, ref } from 'vue';
const dialogValue = inject('dialogValue')

// 不直接修改dialogValue.name等属性，确定时再提交
const name = ref('')
const email = ref('')

const handleClick = () => {
    dialogValue.value.visible = false
    dialogValue.value.name = name
    dialogValue.value.email = email
}
</script>
