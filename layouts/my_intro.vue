<template>
  <div class="h-full w-full pb-10">
    <div class=" flex h-full   justify-around items-center">
      <SlidevElement class="opacity-90"/>
      <div >
        <p class=" font-extrabold text-left     text-50px text-[#30a5bf] relative">
        <div class="mb-15 relative">
          <slot name="title"/> 
        </div> 
        </p>
      </div>
    </div>
    <span class="font-medium font-semibold bg-[#30a5bf] text-left text-white text-shadow opacity-90 py-1 px-3 bottom-42 left-78 text-[20px] absolute block">BY WINNIE WU</span>
    <div class="mx-auto bg-[#30a5bf] h-4 right-0 bottom-0 left-0 absolute"></div>
  </div>
  
</template>

<style scoped>
 
 .titl-stroke-bold {
  -webkit-text-stroke: 12px white;
  z-index: -2;
 }
 .titl-stroke {
  -webkit-text-stroke: 6px white;
  z-index: -1;
 }
</style>

<script setup></script>
