<template>
  <el-config-provider
    size="default"
    :locale="zhCn"
    :button="{ autoInsertSpace: true }"
    :message="{ max: 3 }"
  >
    <Permission>
      <Suspense>
        <router-view />
      </Suspense>
    </Permission>
  </el-config-provider>
</template>

<script setup lang="ts">
import zhCn from 'element-plus/es/locale/lang/zh-cn'
</script>
