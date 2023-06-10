<template>
    <el-button type="primary" @click="handleClick">点击获取组件值</el-button>
    <MyDialog />
    <h1>弹窗结果是: {{ dialogValue }}</h1>
</template>

<script setup>
import { ref, provide } from "vue";
import MyDialog from "~/components/MyDialog.vue";

const dialogValue = ref({ name: '', email: '', visible: false })
provide('dialogValue', dialogValue)

const handleClick = () => {
    dialogValue.value.visible = true
}

</script>
