<template>
  <div
    class="flex justify-center min-h-screen bg-linear-to-l from-base-300 to-base-200/50"
  >
    <div class="hidden md:block md:w-1/4"></div>
    <div class="bg-base-100 md:w-1/2">
      <!-- Header -->
      <section
        class="flex flex-col items-center justify-center text-center p-4 md:p-8 gap-4 my-8"
      >
        <div class="avatar">
          <div class="w-18 rounded-full">
            <NuxtImg
              src="/images/avatar.webp"
              class="grayscale-25"
              alt="Libor Jelínek, software developer and tech writer"
            />
          </div>
        </div>
        <h1
          class="text-2xl md:text-4xl font-bold font-heading flex flex-col md:flex-row items-center gap-2"
        >
          <span>Hello, I'm</span>
          <span class="text-rotate leading-normal">
            <span>
              <span class="text-primary flex items-center gap-1">
                Libor Jelínek
              </span>
              <span class="flex items-center gap-1">
                <span class="text-primary">developer</span>
                <Icon name="tabler:bug" aria-hidden="true" />
              </span>
              <span class="flex items-center gap-1">
                <span class="text-primary">tech writer</span>
                <Icon name="tabler:writing" aria-hidden="true" />
              </span>
              <span class="flex items-center gap-1">
                <span class="text-primary">trainer</span>
                <Icon name="tabler:school" aria-hidden="true" />
              </span>
            </span>
          </span>
        </h1>

        <p class="text-lg font-heading mt-4">
          Enthusiastic Python and JavaScript programmer. I'm a tech writer,
          trainer, and entrepreneur from Czechia 🇨🇿
        </p>

        <div
          class="flex flex-col md:flex-row md:items-center gap-4 mt-6 w-full md:w-auto"
        >
          <a
            :href="`mailto:${config.social.email}`"
            class="rounded bg-linear-to-br from-primary to-primary/75 transition-all duration-300 hover:bg-linear-to-tl hover:inset-shadow-2xs hover:inset-shadow-white px-6 py-2 text-primary-content text-center"
          >
            Hire me
          </a>
          <div class="flex gap-2 items-center justify-center">
            or get in touch on
            <a
              :href="config.social.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my LinkedIn profile"
              class="text-primary flex items-center rounded-full shadow justify-center p-2 bg-base-300 hover:inset-shadow-2xs hover:inset-shadow-primary transition-all duration-300"
            >
              <Icon name="tabler:brand-linkedin" class="text-primary" />
            </a>
            <a
              :href="config.social.github"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my GitHub profile"
              class="text-primary flex items-center rounded-full shadow justify-center p-2 bg-base-300 hover:inset-shadow-2xs hover:inset-shadow-primary transition-all duration-300"
            >
              <Icon name="tabler:brand-github" class="text-primary" />
            </a>
            <a
              :href="config.social.x"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my X profile"
              class="text-primary flex items-center rounded-full shadow justify-center p-2 bg-base-300 hover:inset-shadow-2xs hover:inset-shadow-primary transition-all duration-300"
            >
              <Icon name="tabler:brand-x" class="text-primary" />
            </a>
          </div>
        </div>
      </section>
      <!-- .Header -->

      <Gallery />

      <Skills />

      <Timeline />

      <Projects />

      <!-- Footer -->
      <section
        class="pt-12 px-8 my-8 text-center text-sm text-base-content/50 font-heading"
      >
        <p>Copyright &copy; Libor Jelínek. Built with Nuxt and love.</p>
        <p>
          MIT licensed.
          <a
            href="https://github.com/liborjelinek/liborjelinek.github.io"
            target="_blank"
            rel="noopener noreferrer"
            class="underline"
            >Source code</a
          >.
        </p>
      </section>
      <!-- .Footer -->
    </div>
    <div class="hidden md:block md:w-1/4"></div>
  </div>
</template>

<script setup lang="ts">
const config = useAppConfig();
</script>
