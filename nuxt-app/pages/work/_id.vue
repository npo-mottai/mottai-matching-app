<template>
  <div>
    <div v-if="loading">
      <!-- TODO: ローディングコンポーネント -->
      ...
    </div>
    <div v-else-if="work">
      <div class="w-screen" style="background-color: #e6f2ff">
        <div class="content-container">
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
              <div class="flex">
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
          <div class="sm:hidden flex justify-center">
            <div
              class="
              work-summary-section
              sm:w-6/12
              md:w-7/12
              lg:w-6/12
              xl:w-5/12
              px-4
              pt-16
              pb-2
            "
            >
              <div
                class="bg-white rounded-xl shadow-md overflow-hidden pb-4 mb-8"
              >
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
      <div class="w-screen" style="background-color: #eff3f8">
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
                  <!-- <p class="pb-2">
                    みかんの収穫や、その他、農作業全般の体験・お手伝いをしてくれる方を募集します！
                  </p>
                  <p class="pb-2">
                    場所は小田原市石橋 322 の農場で、最寄り駅は JR
                    早川駅・小田原駅です。土曜日は足柄上郡松田町の畑での作業となる可能性もあります。小田原でも松田町でも車の送迎は可能ですので、必要な方はお伝え下さい。
                  </p>
                  <p class="pb-2">
                    日時は、月火水木金土の7時30分～11時30分、または、13時～17時30分の間のお好きな時間をお知らせ下さい。お互いの日程を調整して決められたらと思います。
                  </p> -->
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

@Component({
  name: 'WorkListSection',
  scrollToTop: true,
  layout: 'default',
  components: {}
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
}
</script>

<style>
.list-disc-dot {
  color: #3ea8ff;
}
</style>
