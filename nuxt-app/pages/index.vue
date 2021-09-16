<template>
  <div>
    <TopMainVisualSection />
    <WorkListSection :works="works" />
    <AboutServiceSection />
    <MatchingDescriptionSection />
    <FAQSection />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Work } from '~/types/work'
import { fetchWorks } from '~/utils/firestore/firestoreHandlers'
import WorkListSection from '~/components/WorkListSection.vue'

@Component({
  layout: 'default',
  components: {
    WorkListSection
  }
})
export default class extends Vue {
  works: Work[] = []

  async asyncData () {
    const works = await fetchWorks()
    return { works }
  }

  async reload () {
    this.works = await fetchWorks()
  }
}
</script>
