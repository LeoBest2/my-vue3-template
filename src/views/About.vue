<template>
    <h1>About</h1>
</template>

<script setup lang="ts">
import request from "~/utils/request";

request.get('/api/test').then((resp) => {
    alert(JSON.stringify(resp.data));
})
</script>