<template>
  <div>
    <div class="w-screen" style="background-color: #e6f2ff">
      <div class="content-container">
        <div class="flex justify-center">
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
                <img src="/img/yago-san.jpg" alt="work-thumbnail-image" />
              </p>
              <div class="p-4">
                <h3>みかん農家で果物の収穫体験</h3>
                <div>
                  <p>場所：神奈川県小田原市石橋 322</p>
                  <p>最寄り駅：JR 早川駅、JR 小田原駅</p>
                  <p>報酬：旬の果物</p>
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
    <div class="w-screen" style="background-color: #eff3f8">
      <div class="content-container">
        <div class="work-info-section px-4 pt-8 pb-16">
          <div class="host-info pb-12">
            <h2>農家さんの情報</h2>
            <ul class="list-disc pl-6">
              <li class="list-disc-dot">
                <span>氏名：矢郷 史郎（ヤゴウ シロウ）</span>
              </li>
              <li class="list-disc-dot"><span>年齢：41 歳</span></li>
              <li class="list-disc-dot"><span>性別：男性</span></li>
              <li class="list-disc-dot">
                <span>場所：神奈川県小田原市石橋 322</span>
              </li>
              <li class="list-disc-dot">
                <span>ひとこと：明るく社交的な性格です！</span>
              </li>
            </ul>
          </div>
          <div class="work-detail-info pb-12">
            <h2>仕事の詳細情報</h2>
            <div>
              <h3>仕事・体験内容</h3>
              <div class="pb-4">
                <p class="pb-2">
                  みかんの収穫や、その他、農作業全般の体験・お手伝いをしてくれる方を募集します！
                </p>
                <p class="pb-2">
                  場所は小田原市石橋 322 の農場で、最寄り駅は JR
                  早川駅・小田原駅です。土曜日は足柄上郡松田町の畑での作業となる可能性もあります。小田原でも松田町でも車の送迎は可能ですので、必要な方はお伝え下さい。
                </p>
                <p class="pb-2">
                  日時は、月火水木金土の7時30分～11時30分、または、13時～17時30分の間のお好きな時間をお知らせ下さい。お互いの日程を調整して決められたらと思います。
                </p>
              </div>
            </div>
            <div>
              <h3>持ち物</h3>
              <div class="pb-4">
                <p class="pb-2">
                  動きやすく汚れても良い服装と、タオル、水分補給のための飲み物のご準備をお願いします。
                </p>
              </div>
            </div>
            <div>
              <h3>報酬</h3>
              <div class="pb-4">
                <p class="pb-2">
                  農場で穫れるその時々の旬な果物をお渡しします。
                </p>
              </div>
            </div>
            <div>
              <h3>その他</h3>
              <div>
                <div class="tags flex">
                  <span
                    v-for="(tag, index) in ['送迎 OK', '土曜 OK', '果物']"
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
</template>

<style>
.list-disc-dot {
  color: #3ea8ff;
}
</style>
