<template>
    <h1>Home</h1>
    <div>Current Count: {{ counter.count }}</div>
</template>

<script setup lang="ts">
import { useCounterStore } from '~/stores/couter';
const counter = useCounterStore();
counter.increment();
</script>