<template>
  <div>
    <div>
      <div class="w-screen" style="background-color: #e6f2ff">
        <div class="content-container">
          <WorkSummaryCard :work="work" :show-skelton="loading" />
        </div>
      </div>
      <div v-if="work" class="w-screen" style="background-color: #eff3f8">
        <div class="content-container">
          <div class="work-info-section px-4 pt-8 pb-16">
            <div class="host-info pb-12">
              <h2>農家さんの情報</h2>
              <ul class="list-disc pl-6">
                <li class="list-disc-dot">
                  <span>氏名：{{ hostName(work) }}</span>
                </li>
                <li class="list-disc-dot">
                  <span>年齢：41 歳</span>
                </li>
                <li class="list-disc-dot">
                  <span>性別：男性</span>
                </li>
                <li class="list-disc-dot">
                  <span>場所：{{ work.address }}</span>
                </li>
                <li class="list-disc-dot">
                  <span>ひとこと：{{ work.hostMessage }}</span>
                </li>
              </ul>
            </div>
            <div class="work-detail-info pb-12">
              <h2>仕事の詳細情報</h2>
              <div>
                <h3>仕事・体験内容</h3>
                <div class="pb-4">
                  <p class="pb-2">
                    {{ work.description }}
                  </p>
                </div>
              </div>
              <div>
                <h3>持ち物</h3>
                <div class="pb-4">
                  <p class="pb-2">
                    {{ work.thingsToBring }}
                  </p>
                </div>
              </div>
              <div>
                <h3>報酬</h3>
                <div class="pb-4">
                  <p class="pb-2">
                    {{ work.rewardDescription }}
                  </p>
                </div>
              </div>
              <div>
                <h3>その他</h3>
                <div>
                  <div class="tags flex">
                    <span
                      v-for="(tag, index) in work.options"
                      :key="index"
                      class="
                      text-sm
                      inline-flex
                      items-center
                      font-bold
                      leading-sm
                      px-3
                      py-1
                      mt-1
                      mr-1
                      bg-blue-200
                      text-blue-700
                      rounded-full
                    "
                    >
                      {{ tag }}
                    </span>
                  </div>
                </div>
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
    </div>
  </div>
</template>

<script lang="ts">
import { Timestamp } from '@firebase/firestore-types'
import { Component, Vue } from 'nuxt-property-decorator'
import { Work } from '~/types/work'
import { formatDate, japaneseDayOfWeek } from '~/utils/datetime/datetime'
import { fetchWork } from '~/utils/firestore/firestoreHandlers'
import WorkSummaryCard from '~/components/WorkSummaryCard.vue'

@Component({
  layout: 'default',
  components: {
    WorkSummaryCard
  }
})
export default class extends Vue {
  loading: boolean = true
  workNotFound: boolean = false
  work: Work | null = null

  async load () {
    const workId = this.$route.params.id
    this.work = await fetchWork(workId)
    this.loading = false
  }

  mounted () {
    this.load()
  }

  updateDate (timestamp: Timestamp): string {
    const date = new Date(timestamp.seconds * 1000)
    const dayOfWeek = japaneseDayOfWeek(date)
    return `${formatDate(date)} (${dayOfWeek})`
  }

  hostName (work: Work): string {
    return `${work.hostLastName} ${work.hostFirstName}（${work.hostLastNameKana} ${work.hostFirstNameKana}）`
  }

  description (s: string): string {
    return s
  }
}
</script>

<style>
.list-disc-dot {
  color: #3ea8ff;
}
</style>
