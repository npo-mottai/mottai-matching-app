<template>
  <div>
    <div class="hidden sm:block pt-16 pb-2">
      <div
        class="
              bg-white
              rounded-xl
              shadow-md
              overflow-hidden
              p-4
              mb-8
              md:mx-16
              lg:mx-32
            "
      >
        <div v-if="showSkelton" class="animate-pulse flex">
          <div class="p-4">
            <div class="w-48 h-36 rounded-xl bg-gray-400" />
          </div>
          <div class="flex-1 p-4">
            <div class="h-8 bg-gray-400 rounded w-3/4 mb-4" />
            <div>
              <div class="h-4 bg-gray-400 rounded mb-2" />
              <div class="h-4 bg-gray-400 rounded mb-2" />
              <div class="h-4 bg-gray-400 rounded mb-2" />
            </div>
          </div>
        </div>
        <div v-else-if="work" class="flex">
          <div class="p-4">
            <img
              class="w-48 rounded-xl"
              :src="work.mainImageURL"
              alt="work-thumbnail-image"
            >
          </div>
          <div class="flex-1 p-4">
            <h3>{{ work.title }}</h3>
            <ul>
              <p>場所：{{ work.address }}</p>
              <p>最寄り駅：{{ work.station }}</p>
              <p>報酬：{{ work.reward }}</p>
              <p>更新日：{{ updateDate(work.updatedAt) }}</p>
            </ul>
          </div>
        </div>
        <div class="flex justify-center">
          <button
            class="text-white font-bold py-2 px-4 rounded-xl"
            style="background-color: #3ea8ff"
          >
            この仕事に申し込む
          </button>
        </div>
      </div>
    </div>
    <div class="sm:hidden px-4 pt-16 pb-2">
      <div class="bg-white rounded-xl shadow-md overflow-hidden pb-4 mb-8">
        <div v-if="showSkelton" class="w-full mb-4 animate-pulse">
          <div class="w-full h-64 bg-gray-400 mb-r mb-4" />
          <div class="px-4">
            <div class="h-8 bg-gray-400 rounded w-7/12 mb-4" />
            <div>
              <div class="h-4 bg-gray-400 w-11/12 rounded mb-2" />
              <div class="h-4 bg-gray-400 w-11/12 rounded mb-2" />
              <div class="h-4 bg-gray-400 w-11/12 rounded mb-2" />
            </div>
          </div>
        </div>
        <div v-else-if="work">
          <p>
            <img src="/img/yago-san.jpg" alt="work-thumbnail-image">
          </p>
          <div class="p-4">
            <h3>{{ work.title }}</h3>
            <ul>
              <p>場所：{{ work.address }}</p>
              <p>最寄り駅：{{ work.station }}</p>
              <p>報酬：{{ work.reward }}</p>
              <p>更新日：{{ updateDate(work.updatedAt) }}</p>
            </ul>
          </div>
        </div>
        <div class="flex justify-center">
          <button
            class="text-white font-bold py-2 px-4 rounded-xl"
            style="background-color: #3ea8ff"
          >
            この仕事に申し込む
          </button>
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
  name: 'WorkSummaryCard',
  scrollToTop: true,
  layout: 'default',
  components: {}
})
export default class extends Vue {
  @Prop({
    type: Object,
    default: null,
    required: false
  })
  work?: Work

  @Prop({
    type: Boolean,
    required: true
  })
  showSkelton!: boolean

  updateDate (timestamp: Timestamp): string {
    const date = new Date(timestamp.seconds * 1000)
    const dayOfWeek = japaneseDayOfWeek(date)
    return `${formatDate(date)} (${dayOfWeek})`
  }
}
</script>
