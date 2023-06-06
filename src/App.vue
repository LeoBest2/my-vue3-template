<script setup lang="ts"></script>

<template>
    <el-container>
        <el-header>
            <el-menu default-active="/home" mode="horizontal" router>
                <el-menu-item index="/">My Vue3 Template</el-menu-item>
                <el-menu-item index="/home">主页</el-menu-item>
                <el-menu-item index="/about">关于</el-menu-item>
            </el-menu>
        </el-header>
        <el-main>
            <RouterView />
        </el-main>
    </el-container>
</template>
