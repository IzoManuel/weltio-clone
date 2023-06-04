<script setup>
import { ref, onMounted, computed } from "vue";
import WeltioLogo from "../../../assets/weltio-logo.vue";
import { GlobeAltIcon, ChevronDownIcon } from "@heroicons/vue/24/outline";
import DropDown from "../../components/drop-down.vue";
import WeltioButton from "../../../assets/weltio-button.vue";
import MenuBar from "../../components/menu-bar.vue";

/**REACTIVE STATE*/
const scrollPosition = ref({
  current: 0,
  previous: 0,
});
const menuBarState = ref(false);
const navTranslateY = ref(0);

/**COMPUTED PROPERTIES */
const navStyle = computed(() => {
  return {
    transform: `translateY(${navTranslateY.value}%)`,
    transition: `transform 0.4s`,
  };
});

function noScroll() {
  if (menuBarState.value === true) {
    document.body.classList.add("no-scroll");
  } else {
    document.body.classList.remove("no-scroll");
  }
}

/** FUNCTIONS */
function initScrollPosition() {
  scrollPosition.value.previous = window.pageYOffset;
}

function updateNavPosition() {
  scrollPosition.value.current = window.pageYOffset;
  if (scrollPosition.value.previous > scrollPosition.value.current) {
    navTranslateY.value = 0;
  } else {
    navTranslateY.value = -100;
  }
  scrollPosition.value.previous = scrollPosition.value.current;
}
/**HOOK */
onMounted(() => {
  initScrollPosition();
  window.addEventListener("scroll", updateNavPosition);
});
</script>

<template>
  <!-- Nav start -->
  <div id="navbar">
    <div
      id="navbar-fill"
      class="transition fixed top-0 righ-0 bottom-0 left-0 w-full overflow-hidden pointer-events-none"
      :class="[
        menuBarState
          ? 'opacity-100 bg-[#f7f8f2] z-10 max-h-full duration-300'
          : 'opacity-0 bg-[#f7f8f2] ease-out ',
      ]"
    ></div>
    <nav
      id="navbar-strip"
      class="fixed z-40 pt-[20px] left-0 right-0 md:pt-[25px]"
      :style="navStyle"
    >
      <div
        id="navbar-container"
        class="container px-5 md:px-[40px] 2xl:px-[60px]"
      >
        <div
          id="navbar-grid"
          class="flex flex-nowrap items-center justify-between text-[#0b1e5b] font-semibold"
        >
          <div id="col-left" class="">
            <div
              id="navbar-logo"
              class="inline-block relative -top-[2px] w-[70px] h-[22px] align-middle md:w-[80px] md:h-[23px] md:mr-[50px] xl:w-[90px] xl:h-[26px]"
            >
              <weltio-logo></weltio-logo>
            </div>
            <div
              id="navbar-navs"
              class="absolute mt-[60px] opacity-0 md:opacity-100 md:visible md:mt-0 md:relative md:-mx-[25px] align-middle md:inline-block"
              :class="[
                menuBarState
                  ? 'transition duration-300 opacity-100 visible'
                  : 'invisible',
              ]"
            >
              <div
                id="navbar-nav"
                class="block transition-opacity hover:opacity-50 duration-300 mb-[40px] text-[32px] tracking-[0.02em] overflow-hidden md:inline md:px-[25px] md:m-0 md:text-[16px] align-bottom"
              >
                <span
                  class="relative transition-[top] duration-500 -z-10 md:z-0 md:top-0"
                  :class="[menuBarState ? 'top-0' : 'top-[40px]']"
                  style="cursor: pointer"
                  >About</span
                >
              </div>
              <button
                id="navbar-nav"
                class="transition-opacity hover:opacity-50 duration-300 mb-[40px] text-[32px] tracking-[0.02em] overflow-hidden md:px-[25px] md:m-0 md:text-[16px] align-bottom"
                style="cursor: pointer"
              >
                <span
                  class="relative transition-[top] duration-500 -z-10 md:z-0 md:top-0"
                  :class="[menuBarState ? 'top-0' : 'top-[40px]']"
                  style="cursor: pointer"
                  >Contact</span
                >
              </button>
            </div>
            <div
              id="navbar-lang"
              class="relative opacity-0 md:opacity-100 inline-block align-middle max-w-[200px] pl-[45px] text-[16px] lg:pl-[60px]"
              :class="[
                menuBarState ? 'transition opacity-100 duration-300' : 'transition opacity-0 duration-300',
              ]"
            >
              <drop-down>
                <template #menuButton>
                  <button class="flex items-center gap-2 group">
                    <GlobeAltIcon :class="'w-6'"></GlobeAltIcon>
                    <span>En</span>
                    <ChevronDownIcon
                      :class="'w-[14px] transition group-hover:rotate-180 duration-300'"
                    ></ChevronDownIcon>
                  </button>
                </template>
              </drop-down>
            </div>
          </div>

          <div id="col-right" class="overflow-hidden">
            <weltio-button
              :buttonLabel="'Download'"
              class="hidden md:inline-block"
            ></weltio-button>
            <menu-bar
              @click="(menuBarState = !menuBarState), noScroll()"
            ></menu-bar>
          </div>
        </div>
      </div>
    </nav>
  </div>
  <!-- Nav end -->
</template>

<style scoped>
</style>