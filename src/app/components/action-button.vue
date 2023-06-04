<script setup>
import { ref } from "vue";
import GooglePlay from "../../assets/svgs/google-play.vue";
import AppleIcon from "../../assets/svgs/apple-icon.vue";

/**REACTIVE STATE */
const actionHover = ref(false);
const initialEntry = ref(false);

const props = defineProps({
  actionLabel: {
    type: String,
  },
});

/**FUNCTIONS*/
function changeBackground(e) {
  console.log(e.currentTarget);
  //if (!initialEntry.value) {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.style.setProperty("--cursor-x", `${x}px`);
    target.style.setProperty("--cursor-y", `${y}px`);
   // initialEntry.value = true;
 // }
}
</script>

<template>
  <button
    @mouseenter="changeBackground"
    class="relative group transition duration-500 hover:text-white overflow-hidden flex justify-center items-center rounded-full h-[62.4px] min-w-[162px] md:min-w-[190.8px]"
  >
    <div
      id="cta-icon"
      class="w-[20.4px] h-[25.2px] md:w-[21.6px] md:h-[26.4px]"
    >
      <google-play
        v-if="actionLabel === 'Google Play'"
        class="transition duration-500 group-hover:fill-white"
      ></google-play>
      <apple-icon
        v-if="actionLabel === 'App Store'"
        class="transition duration-500 group-hover:fill-white"
      ></apple-icon>
    </div>
    <div
      class="text-left leading-[100%] tracking-[0.02em] text-[14.4px] ml-[10px] md:text-[16.8px] md:ml-[15px]"
    >
      <p class="text-sm opacity-50 text-[10px] md:text-[14.4px]">Get on the</p>
      <p class="font-semibold text-lg leading-[17px]">{{ actionLabel }}</p>
    </div>
  </button>
</template>

<style scoped>
button {
  background-color: #eff1e5;
}

button:hover {
  background-color: transparent;
}

button::before {
  content: "";
  position: absolute;
  transform: translate(-50%, -50%);
  width: 1px;
  height: 1px;
  border-radius: 50%;
  background-color: #0b1e5b;
  opacity: 0;
  transition: transform 0.5s ease-in, opacity 0.3s ease-in;
  z-index: -100;
}

button:hover::before {
  transform: scale(400);
  left: var(--cursor-x);
  top: var(--cursor-y);
  opacity: 1;
}

button:not(:hover)::before {
  transition: transform 0s;
}
</style>