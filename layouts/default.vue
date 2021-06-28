<template>
  <div>
    <div class="">
      <AppHeader />
      <Nuxt />
      <AppFooter />
    </div>
  </div>
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator'
import AppHeader from '~/components/AppHeader.vue'
import AppFooter from '~/components/AppFooter.vue'

@Component({
  components: {
    AppHeader,
    AppFooter,
  },
})
export default class extends Vue {}
</script>

<style lang="postcss">
* {
  color: #222222;
}

html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

h1 {
  @apply font-bold text-4xl;
}

h2 {
  @apply font-bold text-4xl pb-8;
}

h3 {
  @apply font-semibold text-lg;
}

.content-container {
  @apply container mx-auto lg:px-12 xl:px-16;
}
</style>
