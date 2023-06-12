<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { onIntersect } from "../../composables/on-intersect.composable";

const leftCardObserver = ref({});
const rightCardObserver = ref({});
const leftCardRef = ref({});
const rightCardRef = ref({});

const props = defineProps({
  featureHead: {
    type: String,
  },
  featureDescription: {
    type: String,
  },
  uniqueFeature: {
    type: Boolean,
    default: false,
  },
});

const onEnterLeftCard = () => {
  leftCardRef.value.classList.add("left-card-bounce");
  //console.log("entered");
};

const onEnterRightCard = () => {
  rightCardRef.value.classList.add("right-card-bounce");
  console.log("entered");
};

const onExit = () => {
  // leftCardRef.value.classList.remove('left-card-bounce')
  // rightCardRef.value.classList.remove('right-card-bounce')
  console.log("exited");
};

/**FUNCTIONS */
function handleScroll() {
  const elements = document.querySelectorAll("#feature-section");
 console.log(`Scroll handling ${elements.length}`)
  for (let index = 0; index < 2; index++) {
    const element = elements[index];
    const element2 = elements[index + 1];
    const rect2 = element2.getBoundingClientRect();
    const rect = element.getBoundingClientRect();
    const scrollPosition =
      window.pageYOffset || document.documentElement.scrollTop;

    if (rect.top == 40 || rect.top === 50 && rect2.top < rect.height) {
      if (rect.top === 40 && element.style.opacity < 0.4) {
        //const opacity = 1 - ((scrollPosition - rect.top) / rect.height) * 0.4;
      } else if(rect.top === 50 && element.style.opacity < 0.7){
        //
      } else {
        const opacity = 1 - ((scrollPosition - rect.top) / rect.height) * 0.2;
        const scale = ((scrollPosition - rect.top) / rect.height) /10
        element.style.opacity = opacity;
        // element.style.transformOrigin='top';
        // element.style.transform = `scale(${scale})`;
      }
    } else {
      element.style.opacity = 1;
      // element.style.transformOrigin='initial';
      // element.style.transform=`scale(1)`;
    }
  }
}

onMounted(() => {
  leftCardObserver.value = onIntersect(
    leftCardRef.value,
    onEnterLeftCard,
    onExit,
    false,
    {
      threshold: 0.8,
    }
  );
  rightCardObserver.value = onIntersect(
    leftCardRef.value,
    onEnterRightCard,
    onExit,
    false,
    {
      threshold: 0.8,
    }
  );
  window.addEventListener('scroll', handleScroll)
});

// When the component is removed, disconnect the observer (clean-up step)
onUnmounted(() => {
  observer.value.disconnect();
});
</script>

<template>
  <div
    id="feature-section"
    class="pt-[80px] pb-[40px] mb-[30px] md:pt-[120px] md:pb-[80px] wxl:absolute wxl:top-0 wxl:right-[0] wxl:bottom-[0] wxl:left-[0] wxl:p-0 wxl:m-0 after:absolute after:rounded-[60px] after:bg-[#e7e7fd] after:content after:top-0 after:right-0 after:bottom-0 after:left-0 after:-z-10 md:after:left-[20px] md:after:right-[20px]"
  >
    <div
      id="feature-container"
      class="container relative px-5 md:px-[80px] xl:px-[100px]"
    >
      <div class="flex flex-col-reverse lg:flex-row">
        <div
          id="col-left"
          class="px-[20px] md:p-0 lg:w-[50%] lg:flex lg:justify-center lg:flex-col xl:relative xl:pl-[40px]"
        >
          <div
            id="feature-tags"
            class="text-[#9597f8] absolute lg:left-20 lg:w-full lg:-top-20 right-0 left-0 mr-auto ml-auto w-[160px] sm:-top-[605px] lg:block hidden z-10"
          >
            <span class="rounded-full bg-white px-5 py-[5px]">Why</span
            ><span class="rounded-full bg-white px-5 py-[5px]">Weltio</span>
          </div>
          <div
            id="feature-text"
            class="md:text-center md:mx-auto max-w-[412px] lg:max-w-[380px] lg:m-0 lg:text-left xl:max-w-[427px]"
          >
            <div id="feature-header" class="mb-[15px] lg:mb-[20px]">
              <h1
                class="font-semibold text-[25px] leading-[130%] md:text-[35px] md:leading-[145%] xl:text-[40px] xl:leading-[128%]"
              >
                {{ featureHead }}
              </h1>
            </div>
            <div id="feature-description">
              <p
                class="mb-[20px] text-[14px] leading-[145%] md:text-[18px] md:leading-[172%] lg:leading-[155%] xl:pb-[30px] xl:text-[20px]"
              >
                {{ featureDescription }}
              </p>
            </div>
          </div>
        </div>
        <div
          id="col-right"
          class="px-[20px] md:p-0 lg:w-[50%] lg:flex lg:justify-center lg:flex-col xl:relative items-center"
        >
          <div
            id="feature-illustration"
            class="relative w-full max-w-[175px] h-screen max-h-[246px] mx-auto mb-[70px] md:w-[277px] md:max-w-full md:max-h-[388px] xl:w-[348px] xl:max-h-[488px]"
            v-if="!uniqueFeature"
          >
            <div ref="leftCardRef">
              <slot name="featureCard1"></slot>
            </div>
            <div
              id="feature-figure"
              class="h-full overflow-hidden rounded-full"
            >
              <slot name="featureFigure"></slot>
            </div>
            <div ref="rightCardRef">
              <slot name="featureCard2"></slot>
            </div>
          </div>
          <div
            v-if="uniqueFeature"
            id="feature-illustration"
            class="relative mx-auto mb-[70px] h-172px max-w-[280px] w-full md:h-[267px] md:max-w-full md:w-[412px] xl:w-[512px] xl:h-[332px]"
          >
            <div ref="leftCardRef">
              <slot name="featureCard1"></slot>
            </div>
            <div
              id="feature-figure"
              class="h-full overflow-hidden rounded-full"
            >
              <slot name="featureFigure"></slot>
            </div>
            <div ref="rightCardRef">
              <slot name="featureCard2"></slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.left-card-bounce {
  animation: leftCardBounce 1s ease-out 1;
  transition: opacity 2s;
}

@keyframes leftCardBounce {
  0% {
    transform: rotate(-10deg);
    opacity: 0;
  }
  65% {
    transform: rotate(5deg);
    opacity: 0.3;
  }
  95% {
    tranform: rotate(-5deg);
    opacity: 0.6;
  }
  100% {
    transform: rotate(0deg);
    opacity: 1;
  }
}

.right-card-bounce {
  animation: rightCardBounce 1s ease-out 1;
  transition: opacity 2s;
}

@keyframes rightCardBounce {
  0% {
    transform: rotate(10deg);
    opacity: 0;
  }
  65% {
    transform: rotate(-5deg);
    opacity: 0.3;
  }
  95% {
    tranform: rotate(5deg);
    opacity: 0.6;
  }
  100% {
    transform: rotate(0deg);
    opacity: 1;
  }
}
</style>
