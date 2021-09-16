<template>
  <div class="content-container py-1">
    <div class="flex justify-between h-16 px-4">
      <nuxt-link to="/" class="my-auto">
        <p>
          <img class="h-12" src="/img/mottai-logo.svg" alt="NPO法人 MOTTAI" />
        </p>
      </nuxt-link>
      <div class="flex my-auto">
        <!-- <outline-search-icon class="ml-4 w-6 h-6" /> -->
        <!-- <outline-bell-icon class="ml-4 w-6 h-6" /> -->
        <!-- <outline-user-circle-icon class="ml-4 w-6 h-6" /> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'app-header',
})
export default class extends Vue {}
</script>
