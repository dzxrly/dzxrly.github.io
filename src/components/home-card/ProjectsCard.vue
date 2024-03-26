<script lang="ts" setup>
import { computed, ref } from 'vue';
import { useQuasar } from 'quasar';
import { OpenSourceInfo } from 'src/data/open-source';
import { OpenSourceInterface } from 'src/interface/open-source-interface';
import ProjectInfo from 'components/basic/ProjectInfo.vue';

const $q = useQuasar();

const openSourceInfo = ref<OpenSourceInterface[]>(OpenSourceInfo.sort(
  // sort by openSourceDate
  (a, b) => new Date(b.openSourceDate).getTime() - new Date(a.openSourceDate).getTime()
));
const selectedIndex = ref<number>(0);

const isLtSm = computed(() => $q.screen.lt.sm);
</script>

<template>
  <div class="projects-card-wrapper full-width">
    <div class="row justify-start items-center full-width">
      <q-btn :size="isLtSm ? 'md' : 'lg'" color="primary" flat icon="arrow_back" round to="/" />
    </div>
    <div class="row justify-center items-center full-width">
      <div v-if="!isLtSm" :class="{ 'col-3' : !isLtSm }">
        <q-list :bordered="false">
          <q-item
            class="rounded-borders"
            v-for="(item, index) in openSourceInfo"
            :key="index"
            clickable
            v-ripple
            :active="selectedIndex === index"
            @click="selectedIndex = index"
          >
            <q-item-section>
              <q-item-label>{{ item.name }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </div>
      <div :class="isLtSm ? 'col-12' : 'col-9'">
        <q-carousel
          v-model="selectedIndex"
          vertical
          transition-prev="slide-down"
          transition-next="slide-up"
          swipeable
          animated
          keep-alive
          class="bg-transparent rounded-borders"
        >
          <q-carousel-slide
            v-for="(item, index) in openSourceInfo"
            :key="index"
            :name="index"
          >
            <project-info :open-source-info="item" />
          </q-carousel-slide>
        </q-carousel>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.projects-card-wrapper
  transition: all .25s ease-in-out
</style>
