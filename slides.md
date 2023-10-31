---
class: text-center
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
transition: slide-left
title: 身為前端工程師，你有想過用 Vue 做簡報嗎？ / Winnie 
mdc: true
monaco: true
colorSchema: "light" 
layout: my_intro
---

  <div class="leading-20 "><span class="text-50px">身為前端工程師</span><br>你有想過用<span class="font-bold  text-center py-.5 px-1 px-10   text-60px w-28 inline-block relative"> 
   <img src="/vue.png" class="-bottom-5 left-5 w-22 absolute"/>
  </span> 做簡報嗎？</div>


---

<div class="flex h-full mx-auto h-350px mx-3  items-center justify-center relative">
  <div class="  text-right mr-120 w-215px inline-block">
    <div class="w-215px">
      <img src ="/ithelp_100.png" class="mx-auto w-full"/>
    </div>
  </div>

   <div class="bg-slidev   font-bold text-center text-white px-2 top-50  right-64  text-[30px] absolute" >
     Winnie Wu 
   </div>
   <div class="font-bold   text-center text-slidev top-50 -right-10  text-[28px]  absolute " v-click="1">
    Frontend Developer 
   </div>
    <div class="bg-slidev   font-bold text-center text-white px-2 top-70 right-52  text-[28px]  absolute " v-click="2">
    主要以 Vue 開發
   </div>
   <div class="font-bold  text-center text-slidev top-70 -right-20  text-[28px]  absolute " v-click="3">
    喜歡研究動態的東西
  </div>
</div>

---
class: flex justify-center font-semibold
---

<div class="font-bold text-slidev  mb-10 p-1 px-2 text-38px">
回歸正題
</div>

---
class: flex justify-center font-semibold
transition: view-transition
---

<div class="font-bold text-slidev  mb-10 p-1 px-2 text-45px">✌️😃✌️</div>

---
class: flex justify-center font-semibold
transition: view-transition
---

<div class="font-bold text-slidev  mb-10 p-1 px-2 text-38px">而且還連續做了30天</div>

---
class: flex justify-center font-semibold
transition: view-transition
---

<div class=" m-auto h-40 shadow transition-all top-0 right-10 bottom-0 left-0 w-1/2 absolute" :class="{
 'opacity-20': $clicks > 0
}" >
  <img src="/ithelp.png" class="w-full">
</div>

<div class="rounded-full font-bold m-auto bg-[#DA4601]  h-7 shadow-md text-center  text-shadow transition-all  top-0 bottom-5 left-56 leading-7 w-24
  absolute" v-click="1">
  <div class="rounded-full bg-[#DA4601] text-white ">影片教學</div>
</div>
<div class="rounded-full font-bold m-auto   h-8 shadow-md   transition-all   right-74 bottom-52 leading-8 w-50 absolute
  " v-click="2">
  <img src="/ithelp_3.png" class="w-full">
</div>

---
preload: false
class: text-slidev
clicks: 2
transition: view-transition
---

<div class=" mx-auto mt-20  transition-all top-0 right-10 bottom-0 left-0 w-1/2 absolute"  >
  <img src="/funny_1.jpeg" class="w-full" v-if=" $clicks === 0 && $page === 7">
</div>

<template v-if=" $clicks === 1 && $page === 7">
  <div class="h-48 ml-70 w-48 relative" >
    <MotionImage :initialOption="{ x: 0, y: -100, scale: 2.1, rotate: -50 }" elSrc="/logo-square.png"/>
    <MotionImage :initialOption="{ y: 100, x: -80, scale: 2.1 }" elSrc="/logo-circle.png"/>
    <MotionImage :initialOption="{ x: 100, y: 100, scale: 2, rotate: 100 }" elSrc="/logo-triangle.png"/>
  </div>
  <div
    class="font-bold mx-auto  right-0 left-0 text-5xl text-[#2B90B6] w-40 -z-1 absolute"
    v-motion
    :initial="{ x: 0,  opacity: 0}"
    :enter="{ x: 55, y:5,  opacity: 1, transition: { delay: 1000, duration: 1000 } }">
    Slidev
  </div>
</template>

<h2 class="font-bold text-center mb-14 w-full" v-if="$clicks === 2 && $page === 7"> 基於 Vue ＆ Vite 的 Markdown 投影片工具 </h2>

---
transition: view-transition
---

<div class=" mx-auto w-full ">
  <div class="flex mx-auto space-x-4 text-center w-80 relative items-center">
    <img src="/unocss.svg" class="w-25"/>
    <span class=" font-bold  tracking-wide text-[44px] text-[#696969CC] inline-block">UNOCSS</span>
  </div>
</div>

---
transition: view-transition
---

<div class=" mx-auto w-full ">
  <div class="flex mx-auto space-x-4 text-center w-80 relative items-center">
    <img src="/vueUse.svg" class="w-25"/>
    <span class=" font-bold text-shadow tracking-wide text-[48px] text-[#41b883] inline-block">VueUse</span>
  </div>
</div>

---

<div class=" mx-auto w-full ">
  <div class="flex mx-auto space-x-4 text-center w-80 relative items-center">
    <img src="/RecordRTC.png" class="w-120"/>
  </div>
</div>

---
layout: content
class: text-slidev p-10
---

## 安裝 Slidev

<div class="bg-[#f1f1f14D] border-l-4 border-[#69696933] my-3 w-full py-2 pl-4 text-[#696969] text-16px">
提醒:  Slidev 需要 Node.js >=18.0 以上
</div>

<div class="w-full" >

<div class="font-semibold  my-3 text-slidev text-left py-.5 px-1 text-22px w-30"> npm </div>

```
 npm init slidev@latest

```
</div>
<div class="w-full" >

<div class="font-semibold  my-3 text-slidev text-left py-.5 px-1 text-22px w-30"> yarn </div>

```
yarn create slidev

```
</div>

<div class="w-full" >

<div class="font-semibold  my-3 text-slidev text-left py-.5 px-1 text-22px w-30"> pnpm </div>

```
pnpm create slidev

```
</div>


---
layout: question
class: text-slidev
---

# 為什麽 Slidev ?

---
class: flex justify-center font-semibold
---

<div class="font-bold text-slidev  mb-10 p-1 px-2 text-40px">Components</div>

---
class: text-slidev p-10
layout: content

---

### Components

<div class="mt-5">

<div class="relative">
  <div class="space-y-6 pt-1 w-1/2">

  <div class="bg-slidev border-slidev  font-medium border-l-3 my-4  text-white text-left pl-5 text-20px w-26 "> Arrow </div>

  ```html
  <Arrow x1="10" y1="20" x2="100" y2="200" />
  ```

  <template v-if="$clicks===1">
  <div class="bg-slidev border-slidev  font-medium border-l-3 my-4  text-white text-left pl-5 text-20px w-26 " > Tweet </div>

  ```html
  <Tweet id="1699058264762376587" scale="0.55"/>
  ```

  </template>

  <Arrow x1="380" y1="80" x2="540" y2="120" color="#696969" class="z-3" v-click='1'/>
  
  </div>

  <div class="-top-16 -right-26 w-1/2 absolute" v-if="$clicks===1">
     <Tweet id="1699058264762376587" scale="0.6" class=" relative"/>
  </div>
</div>
  
</div>



---
class: text-slidev p-10
layout: content
---

### 自定義 Components


<div class="bg-slidev border-slidev  font-medium  my-4  text-white   text-center p-1 text-16px w-20"> 檔案位置 </div>

```
your-slidev/
  ├── ...
  └── components/
      └── Counter.vue
```

<div class="bg-slidev border-slidev  font-medium  my-4  text-white   text-center p-1 text-16px w-30"> 以 Counter 例: </div>

<div class="flex  text-[#696969] items-center">

<div class="w-1/2">

```html

<!--自定義 components -->

<Counter :count="10" />

<!-- 略... -->


```
</div>

<!-- /components/Counter.vue -->
<Counter :count="10" m="l-10" w="1/2"/>

</div>


---
class: flex justify-center font-semibold
---

<div class="font-bold text-slidev  mb-10 p-1 px-2 text-40px">CODE<span class="text-5xl  text-[#40B983]">&lt;/&gt;</span></div>

---
class: text-slidev p-10 space-y-10
layout: content
---

### Highlighting

突顯某部分重要程式碼片段時，可使用 Markdown 中的三個反引號（```）來指定程式碼區塊，同時在後面指定程式碼的語言。

<div class="mt-5">

```ts {all|2-8|10-15|13|all}

interface Users {
  id: number
  firstName: string
  lastName: string
  role: string
}

//...略

function updateUser(id: number, update: User) {
  const user = getUser(id)
  const newUser = { ...user, ...update }
  saveUser(id, newUser)
}

```

<arrow v-click="[3, 4]" x1="450" y1="500" x2="310" y2="420" color="#564" width="3" arrowSize="1" />

</div>

<!--
{lines:true}
-->

---
class: text-slidev p-10 space-y-10
layout: content
---

### Monaco Editor  &  Monaco Diff 

<div class="flex space-x-6 mt-5">

<div class="w-1/2">


```ts {monaco}

interface User {
  id: number
  firstName: string
  lastName: string
  role: string
}

//...略

function updateUser(id: number, update: User) {
  const user = getUser(id)
  const newUser = { ...user, ...update }
  saveUser(id, newUser)
}

```

</div>

<div class="w-1/2" v-click="1">

```ts {monaco-diff}
removed on the right.
just some text
abcd
efgh
Some more text
~~~
just some text
abcz
zzzzefgh
Some more text.
```

</div>


</div>

---
class: flex justify-center font-semibold
---

<div class="font-bold text-slidev  mb-10 p-1 px-2 text-38px">Animations</div>

---
class: text-slidev p-10
layout: content
---

<div class="bg-slidev font-semibold text-white text-center mb-6 py-.5 px-1 text-22px w-20"> v-click </div>
<span class="font font-medium my-1 text-xl text-[#696969] block">DEMO:</span>
<div class="my-5 tracking-wide relative" >
  <div class="bg-[#f1f1f1] p-2 text-[#696969]" >
    <span :class="$clicks === 1? 'opacity-100': 'opacity-0'">我是點擊第 <span class="text-2xl">{{ $clicks }}</span> 次 出現的</span>
    <span class="pl-2" v-if="$clicks >= 2">我是點擊第 <span class="text-2xl">2</span> 次 出現的</span>
    <span class="border border-red bg-[#FFFFFF4D] border-2 h-12 py-2 px-1 top-0 left-0 w-44 scale-110 block absolute" v-if="$clicks === 2"></span>
    <span class="bg-slidev h-12 text-white py-2 px-1  transition-all top-0 ease-linear left-100 w-46 duration-500 block absolute " 
       :class="$clicks === 3? 'opacity-100 -translate-x-0': 'opacity-0 -translate-x-40'" >我是點擊第 <span class="text-2xl">{{ $clicks }}</span> 次 出現的</span>
  
  </div>
</div>

<span class="font font-medium my-1 text-xl text-[#696969] block">程式碼:</span>

<div >

```html {all|4|5|6}

<div class="border my-10 tracking-wide relative">
  <div class="bg-[#f1f1f1] p-2 text-[#696969]" >
    <span v-click="[1,2]">我.. <span class="text-2xl">{{ $clicks }}</span> ..出現的</span>
    <span v-click="2">我是點擊第 <span class="text-2xl">2</span> 次 出現的</span>
    <span class="transition-all ease-linear duration-500" :class="$clicks === 3? 'opacity-100': 'opacity-0'" >...{{ $clicks }}...</span>
  </div>
</div>
```
</div>


---
class: text-slidev p-10
layout: content
preload: false
---

<div class="bg-slidev font-semibold text-white text-center mb-6 py-.5 px-1 text-22px w-30"> v-motion </div>

<div class="flex h-full ">

<div class="pt-14 w-1/2">

```html{all|2|3-6|7-12|all}
  <img
    v-motion
    :initial="{
      x:-380,  
      opacity: 0
    }"
    :enter="{ 
      x:-160 ,
      y:120,  
      opacity: 1, 
      transition: { delay: 1000, duration: 1000 } 
    }"
    class="top-0 right-0 bottom-0 left-0 absolute"
    :src="elSrc"
  />

```
</div>

<div class="w-1/2 " v-if="$clicks > 3">
  <div class="h-48 mt-24 ml-8 w-48 relative" >
    <MotionImage :initialOption="{ x: 0, y: 0, scale: 2.1, rotate: -50 }" elSrc="logo-square.png"/>
    <MotionImage :initialOption="{ y: 0, x: 0, scale: 2.1 }" elSrc="logo-circle.png"/>
    <MotionImage :initialOption="{ x: 0, y: 0, scale: 2, rotate: 100 }" elSrc="logo-triangle.png"/>
  </div>
  <div
    class="font-bold mx-auto  right-0 left-0 text-5xl text-[#2B90B6] w-40 -z-1 absolute"
    v-motion
    :initial="{ x:230,  opacity: 0}"
    :enter="{ x:280 , y:-120,  opacity: 1, transition: { delay: 1000, duration: 1000 } }">
    Slidev
  </div>
</div>

</div>

---
class: flex justify-center font-semibold
---

<div class="font-bold text-slidev  mb-10 p-1 px-2 text-38px">Recording 🎥</div>

---
class: flex justify-center font-semibold
---

<div class="font-bold text-slidev  mb-10 p-1 px-2 text-38px">Export  📤</div>

---
class: flex-wrap px-10 space-y-10 text-slidev pt-10
layout: content
---

### 安裝 playwright-chromium

<div class="mt-10">

```
npm i -D playwright-chromium

```
</div>

<div class="w-full" v-click="1">

<div class="font-semibold  my-6 text-slidev text-left py-.5 px-1 text-24px w-30"> PDF </div>

```
slidev export --with-clicks --output my-pdf-export

```
</div>

<div class="w-full" v-click="2">
<div class="font-semibold my-6 text-slidev text-left py-.5 px-1 text-24px  w-30"> PNG </div>

```
slidev export --format png

```
</div>


---
layout: center
class: text-center text-slidev
---


# 更多功能

[Documentations](https://sli.dev) · [GitHub](https://github.com/slidevjs/slidev) · [Showcases](https://sli.dev/showcases.html)

<div class="bg-slidev mx-auto h-4 right-0 bottom-0 left-0 absolute">
</div>

---
layout: question
class: text-slidev 
---

# 相較其他『簡報工具』優勢 

---
class: text-slidev  text-center text-35px font-semibold
---

<div class="h-full w-full ">
  <div class="flex h-46 mt-35 w-full items-center  justify-center relative">
    <div class="rounded-full mx-auto bg-[#CEDCEC66] h-60 text-center  opacity-90 top-5 right-100 left-0 w-60 -z-3 absolute" ></div>
    <div class="rounded-full mx-auto bg-[#CAD8E64D] h-60 text-center top-2 right-0 left-0 w-60  -z-1 absolute" ></div>
    <div class="rounded-full mx-auto bg-[#C4E1FF33] h-62 text-center top-5 right-0 left-100 w-62 -z-2 absolute " ></div>
  </div>
  <div class="font-bold mx-auto  h-10  text-center text-slidev top-60 left-42   text-26px w-58 absolute " >
    HMR <br>即時更新
  </div>
    <div class="font-bold m-auto h-20 left-  text-center text-slidev top-0 right-0 bottom-0 left-0 text-26px  w-55 absolute ">
     程式碼 <br>Highlighting
    </div>
    <div class="font-bold h-20  text-center text-slidev   top-60  right-40 bottom-0  text-26px  w-60   absolute">主題樣式<br>彈性客製化
    </div>
</div>


---
class: flex justify-center font-semibold
transition: view-transition
---

<div class="bg-slidev text-white mb-10 p-1 px-3 text-25px"> 最後想跟大家分享 ...</div>

---
class: flex justify-center font-semibold
transition: view-transition
---

<div class="text-slidev  mb-10 p-1 px-2 text-30px"> 焦慮有一天會變成規律 </div>

---
class: flex justify-center font-semibold
---

<div class="text-slidev  mb-10 p-1 px-2 text-30px"> 先做做看就知道了 </div>

---
class: flex justify-center font-semibold
---

<div class="text-slidev  mb-10 p-1 px-2 text-30px">小小工商</div>

---
transition: view-transition
---

<div class=" mx-auto   transition-all top-40 right-10 bottom-0 left-0 w-2/3 absolute"  >
  <img src="/self3.png" class="w-full">
</div>
---
class: flex justify-center font-semibold
---

<div class="text-slidev  mb-10 p-1 px-2 text-30px">以上，謝謝大家</div>

---
