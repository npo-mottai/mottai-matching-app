<template>
  <div class="container mx-auto">
    <div class="flex justify-between h-16 bg-gray-100 px-4">
      <p class="my-auto">ここにアプリのロゴ</p>
      <div class="flex my-auto">
        <outline-search-icon class="ml-4 w-6 h-6" />
        <outline-bell-icon class="ml-4 w-6 h-6" />
        <outline-user-circle-icon class="ml-4 w-6 h-6" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class extends Vue {}
</script>
