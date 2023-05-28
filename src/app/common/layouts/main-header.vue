<script setup>
import { ref } from "vue";
import WeltioLogo from "../../../assets/weltio-logo.vue";
import { GlobeAltIcon, ChevronDownIcon } from "@heroicons/vue/24/outline";
import DropDown from "../../components/drop-down.vue";
import WeltioButton from "../../../assets/weltio-button.vue";

/**Reactive STATE*/

/** FUNCTIONS */
</script>

<template>
  <!-- Nav start -->
  <nav id="navbar-strip" class="fixed z-50 pt-[20px] left-0 right-0 md:pt-[25px]">
    <div
      id="navbar-container"
      class="container px-5 md:px-[40px] 2xl:px-[60px]"
    >
      <div
        id="navbar-grid"
        class="flex items-center justify-between text-[#0b1e5b] font-semibold"
      >
        <div id="col-left" class="">
          <div
            id="navbar-logo"
            class="inline-block relative -top-[2px] w-[70px] h-[22px] align-middle md:w-[80px] md:h-[23px] md:mr-[50px] xl:w-[90px] xl:h-[26px]"
          >
            <weltio-logo></weltio-logo>
          </div>
          <div id="navbar-navs" class="inline-block md:-mx-[25px] align-middle">
            <button
              id="navbar-nav"
              class="transition-opacity hover:opacity-50 duration-300 mb-[40px] text-[32px] tracking-[0.02em] overflow-hidden md:px-[25px] md:m-0 md:text-[16px] align-bottom"
              style="cursor: pointer"
            >
              About
            </button>
            <button
              id="navbar-nav"
              class="transition-opacity hover:opacity-50 duration-300 mb-[40px] text-[32px] tracking-[0.02em] overflow-hidden md:px-[25px] md:m-0 md:text-[16px] align-bottom"
              style="cursor: pointer"
            >
              Contact
            </button>
          </div>
          <div
            id="navbar-lang"
            class="relative inline-block align-middle pl-[45px] text-[16px] lg:pl-[60px]"
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

        <div id="col-right"></div>
        <weltio-button :buttonLabel="'Download'"></weltio-button>
      </div>
    </div>
  </nav>
  <!-- Nav end -->
</template>

<style scoped>
.svg {
  background-image: url("../../../assets/weltio-button.vue");
  background-repeat: no-repeat;
  min-height: 200px;
}
</style>