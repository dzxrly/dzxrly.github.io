<script lang="ts" setup>
import CardButton from 'components/basic/CardButton.vue'
</script>

<template>
  <div class="main-card-wrapper">
    <card-button
      icon-name="folder"
      route-path="/projects"
      title-keyword="homeBtnMyProjects" />
    <card-button
      icon-name="person"
      route-path="/about"
      secondary-avatar="643s.gif"
      title-keyword="homeBtnPersonal" />
  </div>
</template>
