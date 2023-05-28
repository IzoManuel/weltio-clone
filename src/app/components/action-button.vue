<script setup>
import GooglePlay from '../../assets/svgs/google-play.vue';
import AppleIcon from '../../assets/svgs/apple-icon.vue';
const props = defineProps({
    actionLabel: {
        type: String
    }
})
</script>

<template>
  <button class="bg-[#eff1e5] flex justify-center items-center rounded-full h-[62.4px] min-w-[162px] md:min-w-[190.8px]">
    <div id="cta-icon" class="w-[20.4px] h-[25.2px] md:w-[21.6px] md:h-[26.4px]">
      <google-play v-if="actionLabel === 'Google Play'"></google-play>
      <apple-icon v-if="actionLabel === 'App Store'"></apple-icon>
    </div>
    <div class="text-left leading-[100%] tracking-[0.02em] text-[14.4px] ml-[10px]  md:text-[16.8px] md:ml-[15px]">
      <p class="text-sm opacity-50 text-[10px] md:text-[14.4px]">Get on the</p>
      <p class="font-semibold text-lg leading-[17px]">{{ actionLabel }}</p>
    </div>
  </button>
</template>