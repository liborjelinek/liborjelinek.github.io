<template>
  <section
    class="pt-12 md:pt-0 pb-12 px-4 md:px-8 mb-8 flex flex-col gap-6 md:gap-8"
  >
    <h2 class="text-2xl md:text-3xl font-bold font-heading text-center">
      Projects & Achievements
    </h2>

    <div
      class="card bg-base-200 shadow-sm transition-all duration-300 hover:shadow-lg hover:translate-y-1"
    >
      <div class="card-body prose">
        <h3 class="card-title font-heading">Docs, blogs, and books</h3>
        <div
          class="transition-all duration-500 overflow-hidden relative"
          :style="{ maxHeight: expandedDocs ? '9999px' : '300px' }"
        >
          <ProjectsList :projects="docs" />
          <div
            v-if="!expandedDocs && docs.length > 3"
            class="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-b from-transparent to-base-200 pointer-events-none transition-opacity duration-500"
            :style="{ opacity: expandedDocs ? '0' : '1' }"
          />
        </div>
        <div class="mt-4">
          <button
            @click="expandedDocs = !expandedDocs"
            class="btn btn-sm btn-outline btn-primary"
          >
            {{ expandedDocs ? "Show less" : "Show more" }}
          </button>
        </div>
      </div>
    </div>

    <div
      class="card bg-base-200 shadow-sm transition-all duration-300 hover:shadow-lg hover:translate-y-1"
    >
      <div class="card-body prose">
        <h3 class="card-title font-heading">Entrepreneurship Projects</h3>
        <ProjectsList :projects="entrepreneurship" />
      </div>
    </div>

    <!-- OSS -->
    <div
      class="card bg-base-300 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-x-1"
    >
      <div class="card-body prose">
        <h3 class="card-title font-heading">
          Open Source Software
          <a
            :href="config.social.github"
            class="btn btn-primary font-sans ml-2"
          >
            GitHub
            <Icon name="tabler:brand-github" class="text-primary-content" />
          </a>
        </h3>
        <ProjectsList :projects="oss" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { Projects } from "~/components/ProjectsList.vue";

const config = useAppConfig();
const expandedDocs = ref(false);

const docs: Projects = [
  {
    title: "Tech writer at work blog",
    url: "https://documatt.com/blog/",
    description:
      "Articles on technical writing and documentation for software engineers.",
  },
  {
    title: "reStructuredText and Sphinx Reference",
    url: "https://documatt.com/restructuredtext-reference/",
    description:
      "Example-based reference guide for reStructuredText and Sphinx syntax, directives, roles, and common issues.",
  },
  {
    title: "FrontStage documentation",
    url: "https://docs.frontstage.online/",
    description:
      "Comprehensive documentation for the FrontStage platform, providing guides, tutorials, and reference materials for users and developers.",
  },
  {
    title: "Ubuntu/Debian správce serveru I. (Czech)",
    url: "/ebooks/ubuntu-debian-spravce-serveru-i.pdf",
    description:
      "Comprehensive guide for managing Ubuntu and Debian servers, covering installation, configuration, and maintenance.",
  },
  {
    title: "Ubuntu/Debian správce serveru II. (Czech)",
    url: "/ebooks/ubuntu-debian-spravce-serveru-ii.pdf",
    description:
      "Advanced guide for managing Ubuntu and Debian servers, covering security, optimization, and troubleshooting.",
  },
  {
    title: "Maven - příručka programátora (Czech)",
    url: "/ebooks/maven-prirucka-programatora.pdf",
    description:
      "Comprehensive guide for Java developers on using Maven for project management and build automation, covering installation, configuration, and best practices.",
  },
];

const entrepreneurship: Projects = [
  {
    title: "Documatt.com - documentation platform",
    url: "https://documatt.com",
    description:
      "A SaaS platform for software companies to create, maintain, and publish documentation with ease.",
  },
  {
    title: "ReadCraft - themes and tools for documentation",
    url: "https://readcraft.io",
    description:
      "High-quality themes and tools designed to enhance the functionality and appearance of software documentation.",
  },
];

const oss: Projects = [
  {
    title: "sphinx-reredirects - Sphinx extension to manage redirects",
    url: "https://github.com/documatt/sphinx-reredirects",
    description:
      "Allows you to easily create and manage redirects in your Sphinx documentation to prevent broken links and improve user experience.",
  },
  {
    title: "Snippets - reStructuredText and Sphinx editor",
    url: "https://github.com/documatt/snippets-web",
    description:
      "Write reStructuredText and Markdown in your browser with Sphinx support—everything runs client-side via WebAssembly, no installation required.",
  },
  {
    title: "Page Counter",
    url: "https://github.com/liborjelinek/page-counter",
    description:
      "A Python library and command-line tool to count standard pages in text, files, and directories.",
  },
];
</script>
