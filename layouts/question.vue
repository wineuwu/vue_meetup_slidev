<template>
  <div class="h-full w-full pb-10 overflow-hidden">
    <div class=" flex h-full   justify-center items-center">
      <SlidevElement class="-left-40"/>
      <div class=" text-center w-450px ">
        <span class="font-medium  p-3 text-[#30a5bf] text-5xl block">
        <slot />
        </span>
      </div>
    </div>
    <div class="mx-auto bg-[#30a5bf] h-4 right-0 bottom-0 left-0 absolute"></div>
  </div>
  
</template>

<style scoped></style>

<script setup></script>
