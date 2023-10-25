<template>
  <div class=" h-40 w-40 relative">
    <img
    v-motion
    :initial="{ x: 0, y: -100, scale: 1.5, rotate: -50 }"
    class="top-0 right-0 bottom-0 left-0 absolute"
    src="logo-square.png"
    alt=""
    />
    <img
    v-motion
    :initial="{ y: 100, x: -100, scale: 2 }"
    class="top-0 right-0 bottom-0 left-0 absolute"
    src="logo-circle.png"
    alt=""
    />
    <img
    v-motion
    :initial="{ x: 100, y: 100, scale: 2, rotate: 100 }"
    class="top-0 right-0 bottom-0 left-0 absolute"
    src="logo-triangle.png"
    alt=""
    />
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
</style>
