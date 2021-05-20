<template>
  <nav id="nav" class="flex my-4 pl-4">
    <div class="my-auto">
      <ul class="flex">
        <li class="p-4"><router-link to="/">Home</router-link></li>
        <!-- <li class="p-4"><router-link to="/chat">Chat</router-link></li>
        <li class="p-4"><router-link to="/about">About</router-link></li> -->
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'NavBar',
})
export default class extends Vue {}
</script>
