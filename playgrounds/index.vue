<template>
  <div class="home">
    <div class="pb-4">
      <button
        :class="isTokyoSelected ? selectedButtonStyle : unselectedButtonStyle"
        @click="toggleTokyo"
      >
        東京
      </button>
      <button
        :class="
          isKanagawaSelected ? selectedButtonStyle : unselectedButtonStyle
        "
        @click="toggleKanagawa"
      >
        神奈川
      </button>
    </div>
    <div
      v-for="(job, index) in jobs"
      :key="index"
      class="bg-white rounded-xl shadow-md overflow-hidden mb-8"
    >
      <div class="">
        <img class="h-48 w-full object-cover" :src="job.imageUrl" alt="title" />
      </div>
      <div class="p-4">
        <div class="text-lg font-bold pb-1">{{ job.farmerName }}</div>
        <div class="text-sm text-gray-500 pb-1">
          掲載日：{{ formatDate(job.postedAt) }} ({{
            japaneseDayOfWeek(job.postedAt)
          }})
        </div>
        <p class="text-gray-500">
          {{ job.description }}
        </p>
        <div class="flex">
          <div class="pr-1">
            <!-- <LocationMarkerIcon class="h-6 w-6 fill-green" /> -->
          </div>
          <div class="text-gray-500">{{ job.prefecture }}{{ job.city }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Job, jobConverter } from '~/models/job'
import { getJobs } from '~/firestoreHandler'
import { formatDate, japaneseDayOfWeek } from '~/utils/datetime'

@Component({
  name: 'index',
  layout: 'default',
})
export default class extends Vue {
  isTokyoSelected: boolean = true
  isKanagawaSelected: boolean = true
  selectedButtonStyle: string =
    'bg-blue-500 text-white font-bold py-1 px-2 mr-2 rounded-full'

  unselectedButtonStyle: string =
    'bg-transparent text-blue-700 font-semibold py-1 px-2 mr-2 border border-blue-500 rounded-full'

  jobs: Job[] = []

  head() {
    return {
      title: 'Home | Mottai マッチングアプリ',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '農家体験募集の一覧ページ',
        },
      ],
    }
  }

  toggleTokyo(): void {
    this.isTokyoSelected = !this.isTokyoSelected
  }

  toggleKanagawa(): void {
    this.isKanagawaSelected = !this.isKanagawaSelected
  }

  async fetch(): Promise<void> {
    const jobSnapshot = await getJobs()
    const jobs = jobSnapshot?.docs.map((doc) => jobConverter.fromFirestore(doc))
    if (!jobs) {
      this.jobs = []
      return
    }
    this.jobs = jobs
  }

  get formatDate() {
    return formatDate
  }

  get japaneseDayOfWeek() {
    return japaneseDayOfWeek
  }
}
</script>
