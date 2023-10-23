---
class: text-center
highlighter: shiki
lineNumbers: false
drawings:
  persist: false

transition: slide-left
title: 身為前端工程師，你有想過用 Vue 做簡報嗎？ / Winnie 
mdc: true
colorSchema: "light" 
layout: my_intro
---
<template v-slot:title> 
  <div class="leading-24 "><span class="text-50px">身為前端工程師</span><br>你有想過用<span class="font-bold  text-center py-.5 px-1 px-10   text-60px w-28 inline-block relative"> 
   <img src="Vue.js_Logo_2.svg.png" class="-bottom-5 left-5 w-22 absolute"/>
  </span> 做簡報嗎？</div>
</template>

---

<div class="bg-slidev font-bold mx-auto text-white text-shadow p-3 text-4xl">OS : 為什麼這麼想不開？</div>
<div></div>

---

  <div class="h-50 ml-70 w-50 relative" >
    <img
      v-motion
      :initial="{ x: 0, y: -100, scale: 2.1, rotate: -50 }"
      :enter="final"
      class="mx-auto top-0 right-0 bottom-0 left-0 absolute"
      src="logo-square.png"
      alt=""
    />
    <img
      v-motion
      :initial="{ y: 100, x: -80, scale: 2.1 }"
      :enter="final"
      class="top-0 right-0 bottom-0 left-0 absolute"
      src="logo-circle.png"
      alt=""
    />
    <img
      v-motion
      :initial="{ x: 100, y: 100, scale: 2.1, rotate: 100 }"
      :enter="final"
      class="top-0 right-0 bottom-0 left-0 absolute"
      src="logo-triangle.png"
      alt=""
    />
  </div>
  <div
    class="font-bold mx-auto  right-0 left-0 text-5xl text-[#2B90B6] w-40 -z-1 absolute"
    v-motion
    :initial="{ x: 0, opacity: 0}"
    :enter="{ x: 80, opacity: 1, transition: { delay: 1000, duration: 1000 } }">
    Slidev
  </div>

  <script setup lang="ts">

  const final = {
    x: 0,
    y: 0,
    rotate: 0,
    scale: 1,
    
    transition: {
      type: 'spring',
      damping: 10,
      stiffness: 20,
      mass: 2,
      duration: 4000,
      delay: 100
    }
  }
  </script>

---
layout: question
---



---









