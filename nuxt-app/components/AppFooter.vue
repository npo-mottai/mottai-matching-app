<template>
  <div class="content-container">
    <div class="px-4 py-16">
      <div class="pb-4">
        <p class="my-auto">ここにアプリのロゴ</p>
        <span>「報酬は食べ物」の農業体験マッチングサービス</span>
      </div>
      <ul>
        <li class="pb-2 hover:underline">運営法人</li>
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
