<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import Tvbox from "../../assets/tvbox.vue";
import Chart from "../../assets/chart.vue";
import WeltioLogo from "../../assets/weltio-logo.vue";
import AppleIcon from "../../assets/svgs/apple-icon.vue";
import Facebook from "../../assets/svgs/facebook.vue";
import Instagram from "../../assets/svgs/instagram.vue";
import Linkedin from "../../assets/svgs/linkedin.vue";
import ActionButton from "../components/action-button.vue";
import FeatureSection from "../common/layouts/feature-section.vue";
import { HeartIcon } from "@heroicons/vue/24/outline";
import { ChatBubbleLeftEllipsisIcon } from "@heroicons/vue/24/outline";
import { onIntersect } from "../composables/on-intersect.composable";
import Parallaxy from "@lucien144/vue3-parallaxy";
import MainLayout from "../common/layouts/main-layout.vue";

/**REACTIVE STATES */
const rollItems = ref([
  "Deposit1",
  "Investment",
  "Earnings",
  "Savings1",
  "Deposit2",
  "Investment",
  "Earnings",
  "Savings2",
  "Deposit3",
  "Investment",
  "Earnings",
  "Savings3",
  "Deposit4",
  "Invesment",
  "Earnings",
  "Savings4",
]);
const featureData = ref([
  {
    featureHead: "Safe and easy access to USD",
    featureDescription:
      "The US dollar is one of the most stable currencies on the planet. With Weltio, you can open a fully regulated and fully protected USD account.",
  },
  {
    featureHead: "No fancy degrees needed",
    featureDescription:
      "Investing is for everyone! Whether you're a beginner or a seasoned pro, we welcome investors of all levels",
  },
  {
    featureHead: "Start investing from just MXN $50",
    featureDescription:
      "Weltio offers fractional shares, meaning you can buy just part of a share if you're not in a position to pay for a full one",
  },
]);

const overviewTagsRef = ref([
  { imgSrc: "ov5", description: "It only takes 5 minutes!" },
  {
    imgSrc: "ov4",
    description: " No minimums and no fees when you trade shares or ETFs",
  },
  { imgSrc: "ov3", description: " 10,000+ financial products to choose from" },
  { imgSrc: "ov2", description: " Your money within minutes" },
  {
    imgSrc: "ov1",
    description: " A user-friendly interface for all knowledge levels",
  },
]);

const positions = ref([
  {
    name: "graph-coin",
    start: {
      percent: 9,
      x: 0,
      y: 0,
    },
    end: {
      percent: -60,
      x: 0,
      y: 0,
    },
  },
]);
const overviewItems = [
  { imgSrc: "ov5", description: "It only takes 5 minutes!" },
  {
    imgSrc: "ov4",
    description: " No minimums and no fees when you trade shares or ETFs",
  },
  { imgSrc: "ov3", description: " 10,000+ financial products to choose from" },
  { imgSrc: "ov2", description: " Your money within minutes" },
  {
    imgSrc: "ov1",
    description: " A user-friendly interface for all knowledge levels",
  },
];

const observer = ref({});
const overViewTagsRef = ref({});

function getSrc(path) {
  return new URL(`../../assets/images/${path}`, import.meta.url).href;
}

const onEnter = () => {
  document.body.style.setProperty("--body-background", "#252234");
  document.documentElement.classList.add("dark");
  console.log("entered");
};

const onExit = () => {
  document.body.style.setProperty("--body-background", "#f7f8f2");
  document.documentElement.classList.remove("dark");
  console.log("exited");
};
// When the component is mounted, start observing
onMounted(() => {
  observer.value = onIntersect(overviewTagsRef.value, onEnter, onExit, false, {
    threshold: 0.8,
  });
});

// When the component is removed, disconnect the observer (clean-up step)
onUnmounted(() => {
  observer.value.disconnect();
});
</script>
<template>
  <main-layout>
    <template #mainContent>
      <div>
        <div id="hero-section" class="">
          <div
            id="hero-content"
            class="relative pt-[90px] pb-[30px] lg:pt-[140px] lg:pb-[200px] xl:pt-[165px] xl:pb-[170px]"
          >
            <div
              id="container"
              class="container px-5 md:px-[80px] xl:px-[100px] 2xl:px-[20px]"
            >
              <div class="flex flex-col-reverse lg:flex-row">
                <div id="col-left" class="lg:w-[50%]">
                  <div
                    id="hero-header"
                    class="hero-slide-in md:mx-auto md:max-w-[480px] lg:max-w-none lg:m-0"
                  >
                    <h1
                      class="leading-[120%] text-[33.6px] md:leading-[140%] md:text-[52.8px] xl:leading-[122%] xl:text-[60px]"
                    >
                      <span class="">More ways </span
                      ><tvbox class="inline"></tvbox>
                      <span class=""> to grow </span
                      ><chart class="inline"></chart>
                      <span>your money</span>
                    </h1>
                  </div>
                  <div
                    id="hero-text"
                    class="hero-slide-in opacity-90 leading-[140%] text-[18px] pt-[15px] md:leading-[164%] md:text-[22px] md:text-center md:mx-auto md:max-w-[410px] lg:m-0 lg::pt-[20px] lg:text-left xl:pt-[24px]"
                  >
                    <p class="">
                      Want to expand your reach? Get access to American and
                      crypto markets with a multi-currency account
                    </p>
                  </div>
                  <div
                    id="hero-action"
                    class="hero-slide-in flex justify-center lg:justify-start mt-[30px] xl:mt-[44px]"
                  >
                    <action-button :action-label="'App Store'"></action-button>
                    <action-button
                      :action-label="'Google Play'"
                      class="ml-[10px] md:ml-[15px]"
                    ></action-button>
                  </div>
                  <div
                    id="hero-figure"
                    class="hidden lg:absolute lg:bottom-0 lg:block lg:max-w-[221px] lg:left-[35%] xl:max-w-[207px]"
                  >
                    <Parallaxy :speed="100" class="">
                      <img
                        class="w-full"
                        src="../../assets/images/hero-6.png"
                        alt=""
                      />
                    </Parallaxy>
                  </div>
                </div>
                <div id="col-right" class="lg:w-[50%] xl:pl-[30px] 2xl:pl-0">
                  <div
                    id="hero-demos"
                    class="flex mb-[58px] justify-center md:mb-[32px] lg:m-0 lg:justify-start"
                  >
                    <div
                      id="hero-demo-1"
                      class="hero-scale-in relative w-[162px] h-[248px] shrink-0 bg-[#262333] overflow-hidden md:w-[245px] md:h-[374px] lg:w-[227px] lg:h-[348px] xl:w-[245px] xl:h-[374px] flex items-center justify-center lg:-mt-[52px] xl:-mt-[67px] rounded-full pointer-events-none shadow-2xl"
                    >
                      <video
                        autoplay
                        muted
                        loop
                        src="https://weltio.com/wp-content/uploads/2022/06/5.mp4"
                        class="w-full h-full"
                      ></video>
                    </div>
                    <div
                      id="hero-demo-2"
                      class="hero-scale-in relative w-[162px] h-[248px] shrink-0 bg-[#262333] overflow-hidden md:w-[245px] md:h-[374px] lg:w-[227px] lg:h-[348px] xl:w-[245px] xl:h-[374px] mt-[44px] md:mt-[85px] lg:mt-[15px] rounded-full pointer-events-none shadow-2xl"
                    >
                      <video
                        autoplay
                        muted
                        loop
                        src="https://weltio.com/wp-content/uploads/2022/06/4.mp4"
                        class="w-full h-full"
                      ></video>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section id="roll">
          <div
            id="rol-content"
            class="rotate-[-3deg] pt-[60px] pb-[100px] md:pb-[120px]"
          >
            <div
              id="rol-items"
              class="scrolling-list flex items-center flex-nowrap overflow-hidden"
            >
              <span
                :key="index"
                v-for="(rollItem, index) in rollItems"
                id="roll-item"
                class="pt-[9px] pb-[11px] px-[16px] shrink-0 inline-block text-[17px] text-center bg-[#e7e7fd] rounded-full md:pt-[13px] md:pb-[16px] md:px-[24px] md:text-[25px] font-semibold text-[#0b1e5b]/90"
              >
                {{ rollItem }}
              </span>
            </div>
          </div>
        </section>
        <section id="feature" class="mt-5">
          <div id="feature-content" class="pb-[60px]">
            <div id="feature-sections" class="relative h-full">
              <feature-section
                class="sticky top-[40px]"
                :feature-head="featureData[0].featureHead"
                :feature-description="featureData[0].featureDescription"
              >
                <template #featureCard1>
                  <div
                    id="feature-card-1"
                    class="absolute bottom-[47px] -left-[30%] md:top-[20px] md:bottom-auto md:-left-[30%]"
                  >
                    <div
                      id="card-1"
                      class="bg-[#f7f8f2] rounded-2xl shadow-md py-[11px] pr-[23px] pl-[12px] md:py-[12px] md:pr-[26px] md:pl-[13px] xl:py-[15px] xl:pr-[34px] xl:pl-[16px]"
                    >
                      <div
                        id="card-subtitle"
                        class="mb-[1px] text-[4px] tracking-[0.06em] leading-[157%] uppercase md:text-[5px] xl:mb-[3px] xl:text-[8px]"
                      >
                        ahorros
                      </div>
                      <div
                        id="card-title"
                        class="text-[12px] leading-[121%] md:text-[14px] xl:text-[18px] font-bold"
                      >
                        $27,091.4 USD
                      </div>
                      <div
                        id="card-tags"
                        class="mt-[8px] md:mt-[12px] xl:mt-[14px]"
                      >
                        <span
                          class="text-[8px] rounded-full px-2 py-1 bg-[#ece7fd] mr-1"
                          >Depositar</span
                        >
                        <span
                          class="text-[8px] rounded-full px-2 py-1 bg-[#e8f2cf]"
                          >Invetir</span
                        >
                      </div>
                    </div>
                  </div>
                </template>
                <template #featureCard2>
                  <div
                    id="feature-card-2"
                    class="absolute -right-[25%] -bottom-[33px] md:bottom-[13px] xl:-right[20%]"
                  >
                    <div
                      id="card-2"
                      class="bg-[#f7f8f2] rounded-2xl shadow-md min-w-[105px] pt-[5px] pr-[9px] pb-[11px] pl-[7px] md:pt-[6px] md:pr-[10px] md:pb-[12px] md:pl-[8px] md:min-w-[116px] xl:pt-[7px] xl:pr-[12px] xl:pb-[14px] xl:pl-[10px] xl:min-w-[138px]"
                    >
                      <div
                        id="card-icon"
                        class="max-w-[17px] mb-[17px ml-auto md:mb-[20px] md:max-w-[19px] xl:mb-[23px] xl:max-w-[23px]"
                      >
                        <img
                          src="https://weltio.com/wp-content/themes/weltio/assets/img/home/card/1.png"
                          srcset="
                            https://weltio.com/wp-content/themes/weltio/assets/img/home/card/1@2x.png 2x
                          "
                          loading="eager"
                          class="w-full"
                          alt=""
                        />
                      </div>
                      <div
                        id="card-logo"
                        class="max-w-[51px] md:max-w-[57px] xl:max-w-[67px]"
                      >
                        <img
                          src="https://weltio.com/wp-content/themes/weltio/assets/img/home/card/2.png"
                          srcset="
                            https://weltio.com/wp-content/themes/weltio/assets/img/home/card/2@2x.png 2x
                          "
                          loading="eager"
                          class="w-full"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </template>
                <template #featureFigure>
                  <video
                    autoplay
                    muted
                    loop
                    src="https://weltio.com/wp-content/uploads/2022/06/1-1.mp4"
                    class="w-full h-full object-cover"
                  ></video>
                </template>
              </feature-section>
              <feature-section
                class="sticky top-[50px]"
                :unique-feature="true"
                :feature-head="featureData[1].featureHead"
                :feature-description="featureData[1].featureDescription"
              >
                <template #featureCard1>
                  <div
                    id="feature-card-1"
                    class="absolute right-[5%] -top-[60px] md:right-[12%] xl:right-[8%] xl:-top-[80px]"
                  >
                    <div
                      id="card-1"
                      class="bg-[#262333] rounded-2xl shadow-md py-[11px] pr-[23px] pl-[12px] md:py-[12px] md:pr-[26px] md:pl-[13px] xl:py-[15px] xl:pr-[34px] xl:pl-[16px]"
                    >
                      <div
                        id="card-subtitle"
                        class="text-[#f7f8f2] mb-[1px] text-[4px] tracking-[0.06em] leading-[157%] uppercase md:text-[5px] xl:mb-[3px] xl:text-[8px]"
                      >
                        Stocks Portfolio
                      </div>
                      <div
                        id="card-title"
                        class="font-bold text-[#f7f8f2] text-[12px] leading-[121%] md:text-[14px] xl:text-[18px]"
                      >
                        $4390.5 USD
                      </div>
                      <div id="card-info" class="font-bold mb-1 text-[9px]">
                        <span class="text-[#66646e]">Hoy +12.0</span>
                        <span class="text-[#aecd5d]"> +25%</span>
                      </div>
                      <div id="card-tags" class="">
                        <span
                          class="text-[8px] rounded-full px-2 py-1 bg-[#ece7fd] mr-1"
                          >Depositar</span
                        >
                        <span
                          class="text-[8px] rounded-full px-2 py-1 bg-[#e8f2cf]"
                          >Desuibre</span
                        >
                      </div>
                    </div>
                  </div>
                </template>
                <template #featureCard2>
                  <div
                    id="feature-card-2"
                    class="absolute left-0 -bottom-[20px] md:left-[10%]"
                  >
                    <div
                      id="card-2"
                      class="bg-[#262333] rounded-3xl flex items-center justify-between py-[8px] px-[15px] min-w-[156px] xl:min-w-[184px] xl:py-[9px] xl:px-[16px]"
                    >
                      <div
                        id="col-left card-name"
                        class="relative font-semibold uppercase text-[9px] text-[#f7f8f2] tracking-[0.01em] xl:text-[11px]"
                      >
                        Stock
                      </div>
                      <div id="col-right" class="flex items-center">
                        <div
                          id="card-graph"
                          class="min-w-[20px] mr-[21px] xl:max-w-[23px] xl:mr-[26px]"
                        >
                          <img
                            src="https://weltio.com/wp-content/themes/weltio/assets/img/home/card/3.png"
                            srcset="
                              https://weltio.com/wp-content/themes/weltio/assets/img/home/card/3@2x.png 2x
                            "
                            loading="eager"
                            alt=""
                            class="w-full"
                          />
                        </div>
                        <div id="card-nums" class="">
                          <div class="text-[#f7f8f2] text-[8px] xl:text-[9px]">
                            +$48.5
                          </div>
                          <div
                            class="text-[#aecd5d] text-[8px] xl:text-[9px] mt-[1px]"
                          >
                            +0.4%
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </template>
                <template #featureFigure>
                  <video
                    autoplay
                    muted
                    loop
                    src="https://weltio.com/wp-content/uploads/2022/06/2.mp4"
                    class="w-full h-full object-cover"
                  ></video>
                </template>
              </feature-section>
              <feature-section
                class="sticky top-[60px]"
                :feature-head="featureData[2].featureHead"
                :feature-description="featureData[2].featureDescription"
              >
                <template #featureCard1>
                  <div
                    id="feature-card-1"
                    class="absolute -left-[27%] top-[0] lg:-left-[25%] lg:-top-[10px]"
                  >
                    <div id="card-1" class="">
                      <div
                        id="card-items"
                        class="grid grid-rows-2 grid-flow-col gap-[6px] max-w-[126px] md:max-w-[191px] md:gap-[10px] xl:max-w-[230px]"
                      >
                        <div
                          id="card-item"
                          class="flex flex-col bg-[#f7f8f2] rounded-lg shadow-md relative odd:-left-5 w-[54px] h-[37px] p-[5px] md:w-[82px] md:h-[58px] md:py-[7px] md:px-[8px] xl:w-[100px] xl:h-[70px] xl:pt-[9px] xl:pr-[12px] xl:pb-[8px] xl:pl-[10px]"
                          :key="index"
                          v-for="(cardItem, index) in [
                            {
                              subTitle: 'ETF',
                              stat1: '+1.79',
                              stat2: '+1.42%',
                            },
                            {
                              subTitle: 'Stock',
                              stat1: '+3.51',
                              stat2: '+1.35%',
                            },
                            {
                              subTitle: 'Savubgs',
                              stat1: '+0.24',
                              stat2: '+0.17%',
                            },
                            {
                              subTitle: 'Crypto',
                              stat1: '+2.88',
                              stat2: '+0.37%',
                            },
                          ]"
                        >
                          <div
                            id="card-subtitle"
                            class="mb-[1px] text-[4px] tracking-[0.06em] leading-[157%] uppercase md:text-[5px] xl:mb-[3px] xl:text-[8px]"
                          >
                            {{ cardItem.subTitle }}
                          </div>
                          <div id="card-stats" class="font-bold ml-auto">
                            <div
                              id="card-stat"
                              class="text-[9px] text-right md:text-[13px] xl:text-[16px]"
                            >
                              {{ cardItem.stat1 }}
                            </div>
                            <div
                              id="card-stat"
                              class="text-[#aecd5d] text-[6px] md:text-[9px] xl:text-[11px]"
                            >
                              {{ cardItem.stat2 }}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </template>
                <template #featureCard2>
                  <div
                    id="feature-card-2"
                    class="absolute -bottom-[25px] -right-[30%] md:bottom-[5px] md:-right-[35%] lg:-right-[25%]"
                  >
                    <div
                      id="card-2"
                      class="bg-[#F7F8F5] rounded-xl min-w-[116px] pt-[8px] pr-[12px] pb-[10px] pl-[10px] md:min-w-[132px] md:p-[9px] md:pr-[14px] md:pb-[11px] md:pl-[11px] xl:min-w-[175px] xl:pt-[11px] xl:pr-[18px] xl:pb-[14px] xl:pl-[14px]"
                    >
                      <div
                        id="card-head"
                        class="flex justify-between font-bold"
                      >
                        <div id="col-left">
                          <div
                            id="card-name"
                            class="text-[9px] tracking-[0.01em] xl:text-[11px]"
                          >
                            EFT
                          </div>
                        </div>
                        <div id="col-right">
                          <div
                            id="card-stat"
                            class="text-[9px] md:text-[13px] xl:text-[16px]"
                          >
                            $0.078
                          </div>
                          <div
                            id="card-stat"
                            class="text-[6px] md:text-[9px] xl:text-[11px] text-[#aecd5d]"
                          >
                            +$0.003
                          </div>
                        </div>
                      </div>
                      <div
                        id="card-graph"
                        class="max-w-[87px] mt-[11px] mb-[14px] md:max-w-[99px] md:mt-[12px] md:mb-[15px] xl:max-w-[131px] xl:mt-[17px] xl:mb-[21px]"
                      >
                        <img
                          src="../../assets/images/4@2x.png"
                          loading="eager"
                          class="w-full"
                          alt=""
                        />
                      </div>
                      <div id="card-tag" class="">
                        <span
                          class="text-[8px] rounded-full px-2 py-1 bg-[#ece7fd] mr-1"
                          >Depositar</span
                        >
                      </div>
                    </div>
                  </div>
                </template>
                <template #featureFigure>
                  <video
                    autoplay
                    muted
                    loop
                    src="https://weltio.com/wp-content/uploads/2022/06/3-1.mp4"
                    class="w-full h-full object-cover"
                  ></video>
                </template>
              </feature-section>
            </div>
          </div>
        </section>
        <section id="overview">
          <div id="overview-content" class="py-[60px]">
            <div class="container px-5 md:px-[100px] xl:px-[120px]">
              <div
                id="overview-header"
                class="mb-[40px] md:mb-[60px] nd:mx-auto lg:mb-[50px] lg:pl-[80px] lg:mx-0 xl:mb-[80px] transition duration-700 dark:text-slate-100"
              >
                <h1
                  class="text-[50px] leading-[120%] md:text-[80px] md:leading-[100%] lg:text-[100px] xl:text-[140px]"
                >
                  <span>Investing</span
                  ><img
                    src="../../assets/images/gif_graph.png"
                    class="inline max-w-[40px] md:max-w-[64px] lg:max-w-[80px] xl:max-w-[90px] border rounded-full"
                  /><br />
                  <img
                    src="../../assets/images/thumb_snap.png"
                    class="inline max-w-[40px] md:max-w-[64px] lg:max-w-[80px] xl:max-w-[90px] border rounded-full"
                  /><span>made easy</span>
                </h1>
              </div>
            </div>

            <div id="overview-body" class="">
              <div
                id="overview-container"
                class="container px-5 md:px-[80px] xl:px-[100px]"
              >
                <div
                  id="overview-grid"
                  class="grid grid-cols-1 lg:grid-cols-2 lg:justify-items-start justify-items-center"
                >
                  <div id="col-left" class="">
                    <div
                      id="overview-image"
                      class="w-[281px] h-[361px] mb-[60px] md:w-[351px] md:h-[451px] md:mb-[40px] lg:w-[300px] lg:h-[387px] lg:mr-0 xl:w-[398px] xl:h-[511px]"
                    >
                      <img
                        src="../../assets/images/phone-in-hand.png"
                        loading="eager"
                        alt=""
                        class="w-full object-cover"
                      />
                      <div id="overview-particle" class="">
                        <img
                          src="../../assets/images/particle.svg"
                          class="relative -top-7"
                        />
                      </div>
                    </div>
                  </div>
                  <div id="col-right" class="flex flex-col">
                    <div
                      id="overview-description"
                      class="text-center text-[16px] leading-[140%] md:max-w-[355px] md:text-[18px] md:leading-[172%] lg:text-left opacity-70 font-semibold xl:max-w-[390px] xl:text-[20px] transition duration-700 dark:text-slate-100"
                    >
                      <p>
                        By joining Weltio, you're joining millions of investors
                        worldwide who trade fractional shares, ETFs and cryptos.
                        Our easy-to-use platform helps you every step of the way
                      </p>
                    </div>
                    <div
                      id="overveiw-actions"
                      class="flex mt-[30px] lg:justify-start justify-center gap-5"
                    >
                      <action-button
                        :action-label="'App Store'"
                      ></action-button>
                      <action-button
                        :action-label="'Google Play'"
                      ></action-button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="overview-col" class="mt-[120px] w-full">
              <div
                ref="overviewTagsRef"
                id="overview-tags"
                class="flex gap-1 mb-[55px] container px-5 md:px-[100px] xl:px-[120px]"
              >
                <span
                  class="rounded-full bg-[#dee5fb] px-4 py-[6px] text-[14px] md:text-[18px] xl:text-[15px]"
                  :key="index"
                  v-for="(tag, index) in ['Invest', 'With', 'Weltio']"
                  >{{ tag }}</span
                >
              </div>
              <div
                id="overview-items"
                class="relative w-full flex snap-x snap-mandatory overflow-x-scroll pb-10 lg:pr-[80px] xl:pr-[100px]"
              >
                <div
                  id="overview-item"
                  :key="index"
                  v-for="(item, index) in overviewItems"
                  class="snap-center shrink-0 mr-[50px] md:mr-[34px] xl:mr-[46px]"
                >
                  <div
                    id="overview-img"
                    class="border rounded-3xl w-[280px] h-[345px] md:w-[280px] md:h-[248px] xl:w-[330px] xl:h-[293px]"
                  >
                    <img
                      :src="getSrc(`${item.imgSrc}.png`)"
                      loading="eager"
                      alt=""
                    />
                  </div>
                  <div
                    id="overview-title"
                    class="font-semibold mt-5 pr-[20px] text-[22px] leading-[123%] opacity-70 w-[280px] xl:w-[330px] xl:mt-[25px] transition duration-700 dark:text-slate-100"
                  >
                    {{ item.description }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="screenshot">
          <div id="screenshot-content" class="py-[60px]">
            <div
              id="screenshot-container"
              class="container px-5 md:px-[80px] xl:px-[100px]"
            >
              <div
                id="screenshot-text"
                class="max-w-[280px] md:w-[60%] md:max-w-[100%] md:ml-auto md:pr-[40px] lg:w-[50%] lg:pr-[100px] xl:pr-[130px] transition duration-700 dark:text-slate-100"
              >
                <div id="screenshot-header" class="mb-[30px] md:mb-[25px]">
                  <h2
                    class="font-[500] leading-[148%] text-[25px] md:text-[35px] md:leading-[160%] xl:text-[40px] xl:leading-[140%]"
                  >
                    Crypto, decoded
                  </h2>
                </div>
                <div id="sreenshot-description" class="">
                  <p
                    class="leading[146%] text-[16px] md:leading-[155%] md:text-[20px]"
                  >
                    With so many cryptocurrencies to choose from, Weltio helps
                    you make sense of it all to build your own crypto portfolio
                  </p>
                </div>
              </div>
              <div
                id="screenshot-image"
                class="mt-[30px] relative w-full h-[186px] md:mt-[120px] md:h-[396px] lg:h-[592px] lg:mt-[70px]"
              >
                <div id="screenshot-pic" class="w-full h-full">
                  <img
                    src="../../assets/images/1-1.jpeg"
                    loading="eager"
                    class="rounded-[50px] object-cover w-full h-full"
                    alt=""
                  />
                </div>
                <div id="screenshot-tickets">
                  <Parallaxy
                    :speed="100"
                    class="absolute right-[73px] -bottom-[50px] md:right-[210px] md:bottom-auto md:-top-[27px] lg:right-[200px] lg:top-[97px] xl:right-[289px] xl:top-[138px]"
                  >
                    <div
                      id="screesnhot-ticket-1"
                      class="w-[39px] h-[52px] md:w-[62px] md:h-[82px] md:rounded-[49px] rounded-full shadow-2xl bg-white"
                    >
                      <img
                        src="../../assets/images/2-1.png"
                        loading="eager"
                        alt=""
                        class="w-full object-cover"
                      />
                    </div>
                  </Parallaxy>
                  <Parallaxy
                    :speed="100"
                    class="absolute -top-[10px] left-[83px] md:-top-[122px] md:bottom-auto md:-left-[15px] lg:-top-[70px] lg:left-[212px] xl:-top-[41px] xl:left-[265px]"
                  >
                    <div
                      id="screesnhot-ticket-2"
                      class="w-[39px] h-[52px] md:w-[62px] md:h-[82px] md:rounded-[49px] rounded-full shadow-2xl bg-white"
                    >
                      <img
                        src="../../assets/images/5-1.png"
                        loading="eager"
                        alt=""
                        class="w-full object-cover"
                      />
                    </div>
                  </Parallaxy>
                  <Parallaxy
                    :speed="100"
                    class="absolute -top-[255px] right-[25px] md:-top-[365px] md:right-auto md:left-[112px] lg:-top-[220px] wlg:-top-[320px] lg:left-[290px] xl:-top-[40%] wxl:-top-[60%] xl:left-[380px]"
                  >
                    <div
                      id="screesnhot-ticket-3"
                      class="w-[39px] h-[52px] md:w-[62px] md:h-[82px] md:rounded-[49px] rounded-full shadow-2xl bg-white"
                    >
                      <img
                        src="../../assets/images/4-1.png"
                        loading="eager"
                        alt=""
                        class="w-full object-cover"
                      />
                    </div>
                  </Parallaxy>
                  <Parallaxy
                    :speed="100"
                    class="absolute left-[20%] bottom-[2%]"
                  >
                    <div
                      id="screesnhot-ticket-4"
                      class="w-[39px] h-[52px] md:w-[62px] md:h-[82px] md:rounded-[49px] rounded-full shadow-2xl bg-white"
                    >
                      <img
                        src="../../assets/images/6-1.png"
                        loading="eager"
                        alt=""
                        class="w-full object-cover"
                      />
                    </div>
                  </Parallaxy>
                  <Parallaxy
                    :speed="100"
                    class="absolute right-[20%] bottom-[45%] lg:bottom-[10%]"
                  >
                    <div
                      id="screesnhot-ticket-5"
                      class="w-[39px] h-[52px] md:w-[62px] md:h-[82px] md:rounded-[49px] rounded-full shadow-2xl bg-white"
                    >
                      <img
                        src="../../assets/images/7.png"
                        loading="eager"
                        alt=""
                        class="w-full object-cover"
                      />
                    </div>
                  </Parallaxy>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="offer">
          <div id="offer-content" class="py-[60px]">
            <div
              id="offer-container"
              class="container px-5 md:px-[80px] xl:px-[100px]"
            >
              <div
                id="offor-figure"
                class="flex w-full mx-auto justify-between relative max-w-[480px] md:max-w-[540px] lg:max-w-[720px] xl:max-w-[900px]"
              >
                <div
                  id="offer-tags"
                  class="flex flex-wrap absolute -top-[10%] w-[160px] md:top-0 md:w-[220px] lg:w-[250px] xl:w-[300px]"
                >
                  <span
                    :key="index"
                    v-for="(tag, index) in [
                      'Technology',
                      'Crypto',
                      'Etherium',
                      'Bitcoin',
                      'Daily Top Movers',
                      'EFTs',
                      'Altcoins',
                      'IPO Access',
                    ]"
                    class="rounded-full shadow-lg font-semibold text-[8px] mr-1 mb-1 pt-1 px-2 pb-[5px] md:text-[11px] md:mt-0 md:mr-2 md:mb-[10px] md:ml-0 md:pt-[7px] md:pr-[13px] md:pb-[8px] md:pl-[13px] lg:mr-[10px] lg:mb-[10px] lg:text-[13px] xl:text-[16px]"
                    >{{ tag }}</span
                  >
                </div>
                <div
                  id="offer-stat"
                  class="shadow-lg overflow-hidden flex absolute right-0 -top-[10%] font-semibold opacity-80 w-[120px] h-[90px] pl-[11px] pr-[4px] rounded-[7px] md:top-0 md:w-[167px] md:h-[147px] md:pl-[22px] md:pr[11px] md:rounded-[13px] lg:w-[202px] lg:h-[178px] lg:pl-[26px] lg:pr-[12px] lg:rounded-[16px] xl:w-[220px] xl:h-[190px] text-[8px] md:text-[9px] lg:text-[12px] xl:text-[14px]"
                >
                  <div
                    id="offer-stat-legend"
                    class="flex flex-col justify-center"
                  >
                    <div
                      :key="index"
                      v-for="(stat, index) in [
                        { color: '#9178f5', label: 'EFTs' },
                        { color: '#b5d269', label: 'Cash' },
                        { color: '#ff96a5', label: 'Crypto' },
                        { color: '#7476f2', label: 'Stocks' },
                        { color: '#cfd62e', label: 'Savings' },
                      ]"
                      id="offer-stat-title"
                      class="flex items-center gap-2"
                    >
                      <div
                        :class="`rounded-full h-[5px] w-[5px]`"
                        :style="`background: ${stat.color}`"
                      ></div>
                      <p>{{ stat.label }}</p>
                    </div>
                  </div>
                  <div id="offer-stat-info" class="shrink-0">
                    <div
                      id="offer-stat-graph"
                      class="absolute top-[19%] -right-[25%] b-red-500 max-w-[70px] md:max-w-[106px] lg:max-w-128px xl:max-w-[140px]"
                    >
                      <img src="../../assets/images/stat-circle.png" class="" />
                    </div>
                    <div
                      id="offer-stat-caption"
                      class="absolute top-[45%] right-[5%]"
                    >
                      10%
                    </div>
                  </div>
                </div>
                <div id="offer-images" class="relative pb-[53.9%] w-full">
                  <div
                    id="offer-image"
                    class="absolute top-0 right-0 bottom-0 left-0"
                  >
                    <img
                      src="../../assets/images/rocket.png"
                      class="rocket-dance w-full h-full object-cover"
                    />
                  </div>
                  <div
                    id="offer-image"
                    class="absolute top-0 right-0 bottom-0 left-0"
                  >
                    <img
                      src="../../assets/images/clouds.png?2"
                      class="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div
                id="offer-header"
                class="mt-[33px] flex justify-center mb-[26px] md:mt-63px md:mb-[35px] lg:mt-[48px] lg:mb-[20px] xl:mt-[58px] xl:mb-[44px]"
              >
                <h2
                  class="leading-[125%] text-[29px] md:leading-[40%] md:text-[35px] lg:text-[40px] xl:leading-[128%] xl:text-[50px]"
                >
                  You're in the driver's Seat
                </h2>
              </div>
              <div
                id="offer-description"
                class="mx-auto md:max-w-[65%] md:my-0 lg:max-w-[54%] xl:max-w-[38%]"
              >
                <p
                  class="text-center opacity-90 leading-[145%] text-[16px] md:leading-[172%] md:text-[18px] lg:leading-[155%] lg:text-[20px]"
                >
                  What do you want your bank account to look like in 10 years?
                  Weltio clears the path to shares of some of the world's most
                  exciting companies
                </p>
              </div>
              <div
                id="offer-actions"
                class="flex justify-center gap-5 mt-[44px]"
              >
                <action-button :action-label="'App Store'"></action-button>
                <action-button :action-label="'Google Play'"></action-button>
              </div>
            </div>
          </div>
        </section>
        <section id="outro">
          <div id="outro-content" class="py-[60px] xl:py-[80px]">
            <div
              id="outro-container"
              class="container px-5 md:px-[80px] xl:px-[100px] relative"
            >
              <div
                id="outro-grid"
                class="grid lg:grid-cols-2 h-[92%] rounded-t-[300px] bg-[#e7e7fd] -z-10 md:right-[80px] md:left-[80px] lg:h-[380px] lg:bottom-auto lg:rounded-full xl:h-[455px] items-center justify-items-center"
              >
                <div
                  id="col-left"
                  class="lg:pl-[118px] xl:pl-[106px] text-center lg:text-left"
                >
                  <div
                    id="outro-header"
                    class="mb-[15px] md:mb-[25px] lg:mb-[15px] xl:mb-[25px]"
                  >
                    <h2
                      class="text-[25px] leading-[148%] md:leading-[130%] md:text-[30px] xl:text-[35px] xl:leading-[140%]"
                    >
                      Any questions?
                    </h2>
                  </div>
                  <div id="outro-description">
                    <p
                      class="leading-[140%] text-[14px] md:text-[16px] md:leading-[131%] lg:leading-[172%] lg:text-[18px] xl:leading-[155%] xl:text-[20px]"
                    >
                      Answers are just an email away. Drop us a line and the
                      right person will get back to you as soon as possible
                    </p>
                  </div>
                  <div
                    id="outro-items"
                    class="flex justify-center mb-[55px] md:mb-[50px] lg:mb-0 lg:justify-start mt-[44px] md:mt-[30px] lg:mt-[26px] xl:mt-[38px]"
                  >
                    <div
                      id="outro-item"
                      class="flex gap-0 mr-[18px] md:mr-[45px] lg:mr-[35px]"
                    >
                      <div
                        id="outro-icon"
                        class="w-[20px] h-[19px] lg:w-[29px] lg:h-[27px] mr-[10px] md:mr-[12px] xl:mr-[15px]"
                      >
                        <heart-icon class="stroke-[#e64676]"></heart-icon>
                      </div>
                      <div id="outro-text" class="">
                        <div
                          id="outro-title"
                          class="text-[12px] md:text-[14px] lg:text-[16px] xl:text-[20px]"
                        >
                          New Account
                        </div>
                        <a
                          id="outro-link"
                          class="text-[12px] md:text-[14px] lg:text-[16px] xl:text-[20px] text-[#4e50f4]"
                          >hola@weltio.com</a
                        >
                      </div>
                    </div>
                    <div id="outro-item" class="flex">
                      <div
                        id="outro-icon"
                        class="w-[20px] h-[19px] lg:w-[29px] lg:h-[27px] mr-[10px] md:mr-[12px] xl:mr-[15px]"
                      >
                        <chat-bubble-left-ellipsis-icon
                          class="stroke-[#8caf31]"
                        ></chat-bubble-left-ellipsis-icon>
                      </div>
                      <div id="outro-text" class="">
                        <div
                          id="outro-title"
                          class="text-[12px] md:text-[14px] lg:text-[16px] xl:text-[20px]"
                        >
                          Already a customer
                        </div>
                        <a
                          id="outro-link"
                          class="text-[12px] md:text-[14px] lg:text-[16px] xl:text-[20px] text-[#4e50f4]"
                          >soporte@weltio.com</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div id="col-right" class="order-first lg:order-last">
                  <div id="outro-figure">
                    <img src="../../assets/images/ov3.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer id="footer">
          <div
            id="footer-content"
            class="pt-[60px] pb-[50px] md:py-[100px] lg:pt-[120px] lg:pb-[100px]"
          >
            <div
              id="footer-container"
              class="container relative px-5 md:px-[80px] xl:px-[100px]"
            >
              <div id="footer-grid" class="grid grid-cols-1 md:grid-cols-2">
                <div id="col-left" class="flex flex-col gap 5">
                  <div
                    id="footer-logo"
                    class="w-[90px] h-[30px] md:w-[155px] md:h-[41px] mb-[25px]"
                  >
                    <weltio-logo></weltio-logo>
                  </div>
                </div>
                <div
                  id="col-right"
                  class="pt-[40px] md:p-0 lg:justify-self-end"
                >
                  <div id="footer-ngrid" class="grid grid-cols-3">
                    <div
                      id="footer-ncol"
                      class="font-semibold whitespace-nowrap opacity-90 px-[20px] lg:px-[30px] xl:px-[50px]"
                      :key="index"
                      v-for="(col, index) in [
                        { title: 'Product', links: ['Invest', 'Crypto'] },
                        {
                          title: 'Resources',
                          links: ['Legal', 'Privacy Policy', 'Terms of Use'],
                        },
                        { title: 'About', links: ['Who we are'] },
                      ]"
                    >
                      <div
                        id="footer-title"
                        class="leading-[16px] text-[14px] mb-[20px] md:leading-[18px] md:text-[16px] mb:mb-[15px]"
                      >
                        {{ col.title }}
                      </div>
                      <div id="footer-links" class="flex flex-col">
                        <div
                          id="footer-link"
                          class="text-[#4e50f4] leading-[16px] text-[14px] py-[6px] md:leading-[18px] md:mb-[15px] md:text-[16px]"
                          style="cursor: pointer"
                          :key="index"
                          v-for="(link, index) in col.links"
                        >
                          <a class="">{{ link }}</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="footer-socials"
                class="flex mt-[60px] md:m-0 md:absolute top-[70px] lg:top-[80px]"
              >
                <a
                  id="footer-social"
                  class="flex justify-center items-center relative border rounded-full w-[90px] h-[33px] mr-[5px] md:w-[68px] md:h-[46px]"
                  style="cursor: pointer"
                >
                  <facebook></facebook>
                </a>
                <a
                  id="footer-social"
                  class="flex justify-center items-center relative border rounded-full w-[90px] h-[33px] mr-[5px] md:w-[68px] md:h-[46px]"
                  style="cursor: pointer"
                >
                  <instagram></instagram>
                </a>
                <a
                  id="footer-social"
                  class="flex justify-center items-center relative border rounded-full w-[90px] h-[33px] mr-[5px] md:w-[68px] md:h-[46px]"
                  style="cursor: pointer"
                >
                  <linkedin></linkedin>
                </a>
              </div>

              <div
                id="footer-brief"
                class="mt-[40px] opacity-50 md:border-t-2 md:mt-[90px] md:pt-[65px] xl:pt-[60px] xl:mt-[70px]"
              >
                <p
                  class="leading-[145%] tracking-[0.02em] text-[12px] mb-[10px] md:text-[14px] md:mb-[20px] lg:text-[16px]"
                >
                  Weltio LLC (“Weltio”) is a Technology Company.
                </p>
                <p
                  class="leading-[145%] tracking-[0.02em] text-[12px] mb-[10px] md:text-[14px] md:mb-[20px] lg:text-[16px]"
                >
                  View Alpaca’s disclosures at:
                  https://alpaca.markets/disclosures
                </p>
                <p
                  class="leading-[145%] tracking-[0.02em] text-[12px] mb-[10px] md:text-[14px] md:mb-[20px] lg:text-[16px]"
                >
                  Technology is offered by Weltio.
                </p>
                <p
                  class="leading-[145%] tracking-[0.02em] text-[12px] mb-[10px] md:text-[14px] md:mb-[20px] lg:text-[16px]"
                >
                  Weltio is a trading name of Weltio LLC. The information
                  provided by Weltio does not constitute advice or a
                  recommendation to buy, sell, or hold securities. All
                  investments involve risk; the past performance of a security
                  or financial product does not guarantee future results or
                  returns. With any investment in securities or financial
                  products, there is always a risk of losing money. Investors
                  should be aware that system response, execution price, speed,
                  liquidity, market data, and account access times are affected
                  by many factors, including market volatility, size and type of
                  order, market conditions, system performance, and other
                  factors. These risks are to be assumed by the customer.
                </p>
                <p
                  class="leading-[145%] tracking-[0.02em] text-[12px] mb-[10px] md:text-[14px] md:mb-[20px] lg:text-[16px]"
                >
                  Trademarks and logos are the property of their respective
                  owners and do not represent endorsements of any kind. Unless
                  otherwise noted, Weltio and its affiliates are not partners,
                  affiliates, or licensees of these companies.
                </p>
                <p
                  class="leading-[145%] tracking-[0.02em] text-[12px] mb-[10px] md:text-[14px] md:mb-[20px] lg:text-[16px]"
                >
                  Content, news, research, tools, market data and securities
                  symbols are for educational and illustration purposes only and
                  are not substitutes for professional advice. All information
                  provided is provided in good faith, however we make no
                  representation or warranty of any kind, express or implied,
                  regarding the accuracy, adequacy, validity, reliability,
                  availability or completeness of any information on this
                  website, our Weltio mobile application or our associated
                  social media pages.
                </p>
                <p
                  class="leading-[145%] tracking-[0.02em] text-[12px] mb-[10px] md:text-[14px] md:mb-[20px] lg:text-[16px]"
                >
                  For further details see our Legal Disclosures. By using this
                  website, you accept our Terms of Use and Privacy Policy.
                </p>
                <p
                  class="leading-[145%] tracking-[0.02em] text-[12px] mb-[10px] md:text-[14px] md:mb-[20px] lg:text-[16px]"
                >
                  © Copyright 2022, Weltio LLC. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </template>
  </main-layout>
</template>

<style scoped>
.hero-slide-in {
  animation: heroSlideIn 0.4s ease-out 1;
}

@keyframes heroSlideIn {
  0% {
    transform: translate(0px, 40px);
  }
  100% {
    transform: translate(0px, 0px);
  }
}

.hero-scale-in {
  animation: heroScaleIn 0.5s ease-out;
}

@keyframes heroScaleIn {
  0% {
    transform: scale(0.5, 0.5);
  }
  100% {
    transform: scale(1, 1);
  }
}

.scrolling-list {
  white-space: nowrap;
  overflow: hidden;
  animation: scroll 5s linear infinite;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-40%);
  }
}

.rocket-dance {
  animation: rocketDance 3s ease-in-out infinite;
  animation-fill-mode: both;
}

@keyframes rocketDance {
  0% {
    transform: translate(0px, 0px);
  }
  50% {
    transform: translate(0px, -40px);
  }
  100% {
    transform: translate(0px, 0px);
  }
}
</style>
