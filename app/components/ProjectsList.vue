<template>
  <ul>
    <li v-for="project in projects" :key="project.url">
      <a
        :href="project.url"
        target="_blank"
        rel="noopener noreferrer"
        :title="`Visit ${project.title}`"
        class="text-primary font-heading text-lg hover:underline"
      >
        <strong>{{ project.title }}</strong>
      </a>
      <br />
      {{ project.description }}
    </li>
  </ul>
</template>

<script setup lang="ts">
export type Project = {
  title: string;
  url: string;
  description: string;
};

export type Projects = Array<Project>;

defineProps<{
  projects: Projects;
}>();
</script>
