<template>
  <div class="w-screen" style="background-color: #e6f2ff">
    <div class="content-container">
      <div class="work-list-section px-4 py-16">
        <h2>募集中の仕事</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
          <div
            v-for="item in ['1', '2', '3', '4', '5', '6', '7', '8']"
            :key="item"
          >
            <nuxt-link :to="workPagePath(item)">
              <div
                class="
                  bg-white
                  rounded-xl
                  shadow-md
                  overflow-hidden
                  mb-8
                  transition
                  duration-500
                  hover:shadow-2xl
                  cursor-pointer
                "
              >
                <p>
                  <img src="/img/yago-san.jpg" alt="work-thumbnail-image" />
                </p>
                <div class="p-4">
                  <h3 class="work-title">みかん農家で果物の収穫体験</h3>
                  <div>
                    <p>場所：神奈川県小田原市石橋 322</p>
                    <p>最寄り駅：JR 早川駅、JR 小田原駅</p>
                    <p>報酬：旬の果物</p>
                  </div>
                </div>
              </div>
            </nuxt-link>
          </div>
        </div>
        <div class="flex justify-center">
          <!-- <a>募集中の仕事をもっと見る </a> -->
          <!-- <outline-arrow-narrow-right-icon class="ml-4 w-6 h-6" /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  scrollToTop: true,
  layout: 'mypage',
  components: {},
})
export default class extends Vue {
  workPagePath(slug: string): string {
    return 'work' + '/' + slug
  }
}
</script>

<style lang="postcss">
h3.work-title {
  @apply font-semibold text-lg pb-0;
}
</style>
