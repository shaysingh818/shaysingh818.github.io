<template>

  <div class="page-container">

    <BlogDetailHero
      :title="title"
      :imageHeroItem="thumbnail"
      :tags="tags"
    />

    <div class="blog-post" v-html="renderedSrc" />

  </div>

</template>



<script lang="ts">
import { useRoute } from 'vue-router'
import { defineComponent, ref, onMounted, computed } from 'vue'
import { marked } from 'marked'
import BlogDetailHero from './BlogDetailHero.vue' 

export default defineComponent({
  name: 'BlogDetail',
  components: {
    BlogDetailHero
  },
  setup(props, ctx) {

    const route = useRoute()
    const postPrefix = route.params.prefix;

    const src = ref(' ')
    const renderedSrc = computed(() => marked(src.value))

    const title = ref('')
    const thumbnail = ref('')
    const tags = ref<string[]>([])
    const author = ref('')
    const modifyDate = ref('')

    onMounted(async () => {

      const [markdownModule, metadataModule] = await Promise.all([
        import(`../../data/blog-posts/${postPrefix}/post.md?raw`),
        import(`../../data/blog-posts/${postPrefix}/metadata.json`)
      ])

      src.value = markdownModule.default.replace(/\n \n/g, '\n\n')

      const metadata = metadataModule.default; 
      title.value = metadata.title
      thumbnail.value = metadata.thumbnail
      tags.value = metadata.tags
      author.value = metadata.author
      modifyDate.value = metadata.modifyDate 
    })

    return {
      renderedSrc,
      title,
      thumbnail,
      tags,
      author,
      modifyDate
    }
  }
})


</script>

<style scoped>

.blog-post {
  padding: 20px;
  max-width: 720px;
   
}


.blog-post :deep(h2) {
  margin-bottom: 0.5rem;
}

.blog-post :deep(p) {
  font-weight: normal;
  font-size: 13px; 
  margin-bottom: 1rem; 
}


.blog-post :deep(li) {
  font-weight: normal;
  font-size: 13px; 
}


.blog-post :deep(ul) {
  margin-bottom: 1rem; 
}

</style>
