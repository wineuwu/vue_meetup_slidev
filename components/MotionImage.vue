<template>
  <img
    v-motion
    :initial="initialOption"
    :enter="final"
    class="top-0 right-0 bottom-0 left-0 absolute"
    :src="IMAGE_PATHS+elSrc"
    alt=""
  />
</template>

<script setup>

let props = defineProps ({
  initialOption : {
    type: Object,
    default: () => ({ x: 0, y: 0, scale: 1, rotate: 0 })
  },
  elSrc: {
    type: String,
  },
});

const IMAGE_PATHS  =  import.meta.env.MODE !== 'development' ? '/slides/1025-vue-tw-slidev/' : '';


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
