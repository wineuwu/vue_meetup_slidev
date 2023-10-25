<template>
  <div class=" h-full mx-auto  w-full overflow-hidden">
    <div class="h-full ">
      <slot />
    </div> 
    <div class="bg-slidev mx-auto h-4 right-0 bottom-0 left-0 absolute">
    </div>
  </div>
</template>

<style >  

  h1 {
    font-size: 3rem;
    font-weight: bold;
    line-height: 1.2;
    margin-bottom: 1rem;
  }
  
  h2 {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
  }
  ul {
    list-style:disc;
    font-size: 30px;
    text-align: left;
  }
</style>

<script setup></script>
