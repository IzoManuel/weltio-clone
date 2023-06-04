<script setup>
import { ref, onMounted, computed } from "vue";


const props = defineProps({
    menuBarState: {
        default:null
    }
})
//const menuBarState = ref(null);

const firstLine = computed(() => {
  return {
    "mr-first-line": props.menuBarState === true,
    "rev-mr-first-line": props.menuBarState === false,
  };
});

const secondLine = computed(() => {
  return {
    "mr-second-line": props.menuBarState === true,
    "rev-mr-second-line": props.menuBarState === false,
  };
});

const thirdLine = computed(() => {
  return {
    "mr-third-line": props.menuBarState === true,
    "rev-mr-third-line": props.menuBarState === false,
  };
});
</script>
<template>
  <div
    id="navbar-toggle"
    class="inline-block align-middle w-[22px] my-auto md:hidden"
  >
    <button id="btn-menu" @click="menuBarState = !menuBarState">
      <span
        class="relative block w-[22px] h-[2px] mb-[4px] top-0 rounded-[25px] bg-current"
        :class="firstLine"
      ></span>
      <span
        class="relative block w-[22px] h-[2px] mb-[4px] top-0 rounded-[25px] bg-current"
        :class="secondLine"
      ></span>
      <span
        class="relative block w-[22px] h-[2px] top-0 rounded-[25px] bg-current"
        :class="thirdLine"
      ></span>
    </button>
  </div>
</template>

<style scoped>
.mr-first-line {
  animation-name: moveAndRotateF;
  animation-duration: 0.4s;
  animation-fill-mode: forwards;
}

.rev-mr-first-line {
  animation-name: revMoveAndRotateF;
  animation-duration: 0.4s;
  animation-fill-mode: forwards;
}

@keyframes moveAndRotateF {
  0% {
    transform: translate(0px, 0px);
  }
  50% {
    transform: translate(0px, 6px);
  }
  100% {
    transform: translate(0px, 6px) rotate(-45deg);
  }
}
@keyframes revMoveAndRotateF {
  0% {
    transform: translate(0px, 6px) rotate(-45deg);
  }
  50% {
    transform: translate(0px, 6px);
  }
  100% {
    transform: translate(0px, 0px);
  }
}

.mr-third-line {
  animation-name: moveAndRotateT;
  animation-duration: 0.4s;
  animation-fill-mode: forwards;
}

.rev-mr-third-line {
  animation-name: revMoveAndRotateT;
  animation-duration: 0.4s;
  animation-fill-mode: forwards;
}

@keyframes moveAndRotateT {
  0% {
    transform: translate(0px, 0px);
  }
  50% {
    transform: translate(0px, -6px);
  }
  100% {
    transform: translate(0px, -6px) rotate(45deg);
  }
}
@keyframes revMoveAndRotateT {
  0% {
    transform: translate(0px, -6px) rotate(45deg);
  }
  50% {
    transform: translate(0px, -6px);
  }
  100% {
    transform: translate(0px, 0px);
  }
}

.mr-second-line {
  animation-name: moveAndRotateS;
  animation-duration: 0.4s;
  animation-fill-mode: forwards;
}

.rev-mr-second-line {
  animation-name: revMoveAndRotateS;
  animation-duration: 0.4s;
  animation-fill-mode: forwards;
}

@keyframes moveAndRotateS {
  0% {
    transform: translate(0px, 0px);
  }
  50% {
    transform: translate(0px, 0px);
  }
  100% {
    transform: translate(0px, 0px) rotate(45deg);
  }
}
@keyframes revMoveAndRotateS {
  0% {
    transform: translate(0px, 0px) rotate(45deg);
  }
  50% {
    transform: translate(0px, 0px);
  }
  100% {
    transform: translate(0px, 0px);
  }
}
</style>