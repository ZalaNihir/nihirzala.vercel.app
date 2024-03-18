<template>
    <div class="max-w-2xl w-full py-12 px-4 mx-auto">
      <div class="prose prose-zinc  max-w-none">
        <h1>A Collection of Informative Articles</h1>
      </div>
      <section class="mt-12 space-y-16">
        <!-- Show loader if posts is empty -->
        <template v-if="posts.length === 0">
          <div class="animate-pulse space-y-4">
            <div class="h-4 bg-gray-300 rounded w-3/4"></div>
            <div class="h-4 bg-gray-300 rounded w-1/2"></div>
            <div class="h-4 bg-gray-300 rounded w-2/3"></div>
            <!-- Repeat as needed for the number of articles you want to show -->
          </div>
        </template>
        <!-- Show articles when posts are available -->
        <template v-else>
          <article v-for="post in posts" :key="post.link" class="mt-6">
            <p class="text-gray-800 text-sm">{{ formatPubDate(post.pubDate) }}</p>
            <h2 class="mt-3 font-medium text-lg text-gray-800 ">
              <a :href="post.link" target="_blank" class="hover:underline focus:underline">
                {{ post.title }}
              </a>
            </h2>
            <p class="mt-3 text-base text-gray-500 leading-relaxed">{{ truncateAndRemoveHTML(post.description) }}</p>
            <p class="mt-3 text-base text-gray-700">
              <a :href="post.link" target="_blank" class="hover:underline focus:underline">Read article &rarr;</a>
            </p>
          </article>
        </template>
      </section>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import ContentLoader from './ContentLoader.vue';
  
  export default {
    data() {
      return {
        posts: [],
      };
    },
    created() {
      this.fetchBlogPosts();
    },
    methods: {
      fetchBlogPosts() {
        const mediumRssFeedUrl = 'https://medium.com/feed/@nihirzala';
        axios
          .get('https://api.rss2json.com/v1/api.json', {
            params: {
              rss_url: mediumRssFeedUrl,
            },
          })
          .then((response) => {
            this.posts = response.data.items;
          })
          .catch((error) => {
            console.error(error);
          });
      },
      truncateAndRemoveHTML(description) {
        const plainText = description.replace(/<[^>]+>/g, '');
        return plainText.length > 100 ? plainText.substring(0, 100) + '...' : plainText;
      },
      formatPubDate(pubDate) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const date = new Date(pubDate);
        return date.toLocaleDateString(undefined, options);
      },
    },
  };
  </script>
  
