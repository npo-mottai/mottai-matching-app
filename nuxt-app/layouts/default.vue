<template>
  <div>
    <div class="">
      <div v-if="showSizeIndicator"><WindowSizeIndicator /></div>
      <AppHeader />
      <Nuxt />
      <AppFooter />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import AppHeader from '~/components/AppHeader.vue'
import AppFooter from '~/components/AppFooter.vue'
import WindowSizeIndicator from '~/components/WindowSizeIndicator.vue'

@Component({
  name: 'default',
  components: {
    AppHeader,
    AppFooter,
    WindowSizeIndicator,
  },
})
export default class extends Vue {
  get showSizeIndicator(): boolean {
    return process.env.NODE_ENV === 'development'
  }
}
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
  @apply font-semibold text-lg pb-2;
}

.content-container {
  @apply container mx-auto lg:px-12 xl:px-48 2xl:px-72;
}
</style>
