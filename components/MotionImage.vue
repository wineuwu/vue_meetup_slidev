<template>
  <img
    v-motion
    :initial="initialOption"
    :enter="final"
    class="top-0 right-0 bottom-0 left-0 absolute"
    :src="elSrc"
    alt=""
  />
</template>

<script setup>

defineProps ({
  initialOption : {
    type: Object,
    default: () => ({ x: 0, y: 0, scale: 1, rotate: 0 })
  },
  elSrc: {
    type: String,
  },
});


const final = {
  x: 0,
  y: 0,
  rotate: 0,
  scale: 1,
  transition: {
    type: 'spring',
    damping: 10,
    stiffness: 20,
    mass: 2
  }
}

</script>
