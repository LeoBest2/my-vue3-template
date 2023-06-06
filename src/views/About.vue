<template>
    <ul>
        <li>Count值为: {{ counter.count }}</li>
        <li><el-text class="mx-1" type="primary">vite</el-text></li>
        <li><el-text class="mx-1" type="primary">vue-router4</el-text></li>
        <li><el-text class="mx-1" type="primary">vue3</el-text></li>
        <li><el-text class="mx-1" type="primary">pinia</el-text></li>
        <li><el-text class="mx-1" type="primary">vite-mock</el-text></li>
        <li><el-text class="mx-1" type="primary">element-plus</el-text></li>
    </ul>
</template>

<script setup lang="ts">
import { useCounterStore } from '~/stores/couter'

const counter = useCounterStore()
</script>
