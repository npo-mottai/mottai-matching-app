<template>
  <div>
    <div class="absolute flex w-full h-80">
      <div class="hero-image-1 bg-cover bg-center w-full md:w-1/2 lg:w-1/3">
        <div
          class="w-full h-full"
          style="background-color: rgba(0, 0, 0, 0.25)"
        ></div>
      </div>
      <div
        class="
          hero-image-2
          bg-cover bg-center
          invisible
          md:visible
          md:w-1/2
          lg:w-1/3
        "
      >
        <div
          class="w-full h-full"
          style="background-color: rgba(0, 0, 0, 0.25)"
        ></div>
      </div>
      <div
        class="hero-image-3 bg-cover bg-center invisible lg:visible lg:w-1/3"
      >
        <div
          class="w-full h-full"
          style="background-color: rgba(0, 0, 0, 0.25)"
        ></div>
      </div>
    </div>
    <div class="flex h-80 items-center">
      <h1 class="absolute transform w-full text-center text-white">
        報酬は食べ物！<br />農業 1 日体験アルバイト
      </h1>
    </div>
  </div>
</template>

<style lang="postcss">
.hero-black-filter {
  background-color: rgba(0, 0, 0, 0.6);
}

.hero-image-1 {
  background-image: url('/img/hero-image-sample.jpg');
}

.hero-image-2 {
  background-image: url('/img/hero-image-sample.jpg');
}

.hero-image-3 {
  background-image: url('/img/hero-image-sample.jpg');
}
</style>
