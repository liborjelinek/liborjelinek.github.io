<template>
  <section class="relative h-30 md:h-50 my-8">
    <div
      class="absolute -left-7.5 flex gap-4 items-center justify-center -right-7.5"
    >
      <div
        v-for="(image, index) in [
          'gallery1.jpg',
          'gallery2.jpg',
          'gallery3.jpg',
          'gallery4.jpg',
        ]"
        :key="index"
      >
        <NuxtImg
          :src="`/images/${image}`"
          :class="[
            'rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110',
            index % 2 === 0
              ? 'rotate-2 hover:-rotate-2'
              : '-rotate-2 hover:rotate-2',
          ]"
          :alt="`Some pictures of me - ${image}`"
        />
      </div>
    </div>
  </section>
</template>
