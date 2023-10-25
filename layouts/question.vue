<template>
  <div class="h-full w-full pb-10 overflow-hidden">
    <div class=" flex h-full  justify-center items-center">
      <SlidevElement class="-left-10 scale-105"/>
      <div class=" text-center w-600px ">
        <slot />
      </div>
    </div>
    <div class="mx-auto bg-[#30a5bf] h-4 right-0 bottom-0 left-0 absolute"></div>
  </div>
  
</template>

<style >
</style>

<script setup></script>
