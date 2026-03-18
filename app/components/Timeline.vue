<template>
  <section class="px-8 mt-8">
    <h2 class="text-3xl font-bold font-heading mb-8 text-center relative z-10">
      Career & Experience
      <a
        href="https://www.linkedin.com/in/libor-jelinek/"
        class="btn btn-primary font-sans ml-2"
      >
        LinkedIn
        <Icon name="tabler:brand-linkedin" class="text-primary-content" />
      </a>
    </h2>
    <div class="relative -left-12.5 md:left-0 md:-top-24 md:h-90">
      <div class="md:absolute md:-left-25">
        <ul class="timeline timeline-vertical lg:timeline-horizontal">
          <li v-for="(event, index) in timeline12" :key="index">
            <hr v-if="index > 0" />
            <div class="timeline-start">{{ event.year }}</div>
            <div class="timeline-middle">
              <Icon :name="event.icon" class="h-5 w-5" />
            </div>
            <div
              class="timeline-end timeline-box w-50 hover:bg-base-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <h3 class="text-lg font-heading font-bold text-primary">
                {{ event.title }}
              </h3>
              <p>{{ event.description }}</p>
            </div>
            <hr v-if="index < timeline12.length - 1" />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
type TimelineEvent = {
  year: string;
  icon: string;
  title: string;
  description: string;
};

type Timeline = Array<TimelineEvent>;

const timeline1: Timeline = [
  // {
  //   year: "2023-present",
  //   icon: "tabler:briefcase",
  //   title: "Documatt.com, s.r.o. - founder",
  //   description:
  //     "Founded Documatt.com, s.r.o. and led the company as a founder.",
  // },
  {
    year: "2023-2025",
    icon: "tabler:code",
    title: "Technical Writer (Freelance)",
    description:
      "Provided technical writing services, creating tools and documentation for various software projects.",
  },
];

const timeline2: Timeline = [
  {
    year: "2018-2023",
    icon: "tabler:apple",
    title: "Lead Technical Writer",
    description:
      "Led documentation team for contact center software, collaborating with developers, support, and sales.",
  },
  {
    year: "2013-2019",
    icon: "tabler:code",
    title: "Computer Trainer (Freelance)",
    description:
      "Conducted Java, Python, Linux, and PostgreSQL courses for major corporations and IT schools.",
  },
  {
    year: "2005-2010",
    icon: "tabler:briefcase",
    title: "ERP Consultant/Analyst",
    description:
      "Worked across industries to implement ERP systems, gaining valuable experience in business processes and software solutions.",
  },
];

const timeline12 = [...timeline1, ...timeline2];
</script>
