<template>
  <div class="content-container">
    <div class="px-4 py-16">
      <div class="pb-4">
        <img
          class="object-contain h-8"
          src="/img/mottai-logo.svg"
          alt="NPO法人 MOTTAI"
        />
      </div>
      <ul>
        <li class="pb-2 hover:underline">
          <a
            href="https://www.npo-mottai.org/"
            target="_blank"
            rel="noopener noreferrer"
            >運営法人</a
          >
        </li>
        <li class="pb-2 hover:underline">利用規約</li>
        <li class="pb-2 hover:underline">
          <a
            href="https://www.npo-mottai.org/privacy/"
            target="_blank"
            rel="noopener noreferrer"
            >プライバシーポリシー</a
          >
        </li>
      </ul>
      <div>©2021– NPO法人 MOTTAI</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'app-footer',
})
export default class extends Vue {}
</script>
