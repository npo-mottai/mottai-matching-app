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
      v-for="(work, index) in works"
      :key="index"
      class="bg-white rounded-xl shadow-md overflow-hidden mb-8"
    >
      <div class="">
        <img
          class="h-48 w-full object-cover"
          :src="work.mainImageURL"
          alt="title"
        >
      </div>
      <div class="p-4">
        <div class="text-lg font-bold pb-1">
          {{ work.hostLastName }}
        </div>
        <div class="text-sm text-gray-500 pb-1">
          掲載日：{{ formatDate(work.createdAt.toDate()) }} ({{
            japaneseDayOfWeek(work.createdAt.toDate())
          }})
        </div>
        <p class="text-gray-500">
          {{ work.description }}
        </p>
        <div class="flex">
          <div class="pr-1">
            <!-- <LocationMarkerIcon class="h-6 w-6 fill-green" /> -->
          </div>
          <div class="text-gray-500">
            {{ work.prefecture }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { fetchWorks } from '~/utils/firestore/firestoreHandlers'
import { formatDate, japaneseDayOfWeek } from '~/utils/datetime/datetime'
import { Work } from '~/types/work'

@Component({
  name: 'index',
  layout: 'default'
})
export default class extends Vue {
  isTokyoSelected: boolean = true
  isKanagawaSelected: boolean = true
  selectedButtonStyle: string =
    'bg-blue-500 text-white font-bold py-1 px-2 mr-2 rounded-full'

  unselectedButtonStyle: string =
    'bg-transparent text-blue-700 font-semibold py-1 px-2 mr-2 border border-blue-500 rounded-full'

  works: Work[] = []

  head () {
    return {
      title: 'Home | Mottai マッチングアプリ',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '農家体験募集の一覧ページ'
        }
      ]
    }
  }

  toggleTokyo (): void {
    this.isTokyoSelected = !this.isTokyoSelected
  }

  toggleKanagawa (): void {
    this.isKanagawaSelected = !this.isKanagawaSelected
  }

  async fetch (): Promise<void> {
    const works = await fetchWorks()
    this.works = works
  }

  get formatDate () {
    return formatDate
  }

  get japaneseDayOfWeek () {
    return japaneseDayOfWeek
  }
}
</script>
