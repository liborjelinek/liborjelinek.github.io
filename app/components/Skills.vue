<template>
  <section class="py-8 md:py-12 px-4 md:px-8 my-8">
    <h2
      class="text-2xl md:text-3xl font-bold font-heading mb-6 md:mb-8 text-center"
    >
      Skills & Technologies
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="skill in skills"
        :key="skill.category"
        class="rounded-lg p-6 bg-base-200 hover:bg-base-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
      >
        <h3 class="text-xl font-bold font-heading mb-4">
          {{ skill.category }}
        </h3>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tech in skill.techs"
            :key="tech"
            class="badge badge-outline badge-primary border-primary/25"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const skills = [
  {
    category: "Python",
    techs: ["FastAPI", "Sphinx", "Django", "Celery", "RQ"],
  },
  {
    category: "Frontend",
    techs: ["TypeScript", "Vue.js", "Nuxt", "CSS", "Tailwind"],
  },
  {
    category: "Databases",
    techs: ["SQLite", "PostgreSQL", "Redis"],
  },
  {
    category: "DevOps",
    techs: ["Ubuntu", "Docker", "Kubernetes", "AWS", "Google Cloud"],
  },
  {
    category: "Architecture",
    techs: ["UML", "Agile", "Software Design", "Patterns"],
  },
  {
    category: "General",
    techs: ["Git", "REST", "OpenAPI", "Security"],
  },
];
</script>
