<template>
  <div class="w-screen" style="background-color: #e6f2ff">
    <div class="content-container">
      <div class="work-list-section px-4 py-16">
        <h2>募集中の仕事</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
          <div v-for="work in works" :key="work.title">
            <nuxt-link v-if="work.reference" :to="workPagePath(work.documentId)">
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
                  <img src="/img/yago-san.jpg" alt="work-thumbnail-image">
                </p>
                <div class="p-4">
                  <h3 class="work-title">
                    {{ work.title }}
                  </h3>
                  <div>
                    <p>場所：{{ work.address }}</p>
                    <p>最寄り駅：{{ work.station }}</p>
                    <p>報酬：{{ work.reward }}</p>
                    <p>更新日：{{ updateDate(work.updatedAt) }}</p>
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
import { Timestamp } from '@firebase/firestore-types'
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { Work } from '~/types/work'
import { formatDate, japaneseDayOfWeek } from '~/utils/datetime/datetime'

@Component({
  name: 'WorkListSection',
  scrollToTop: true,
  layout: 'default',
  components: {}
})
export default class extends Vue {
  @Prop({
    type: Array,
    default: [],
    required: true
  })
  works!: Work[]

  updateDate (timestamp: Timestamp): string {
    const date = new Date(timestamp.seconds * 1000)
    const dayOfWeek = japaneseDayOfWeek(date)
    return `${formatDate(date)} (${dayOfWeek})`
  }

  workPagePath (documentId: string): string {
    return 'work/' + documentId
  }
}
</script>

<style lang="postcss">
h3.work-title {
  @apply font-semibold text-lg pb-0;
}
</style>
