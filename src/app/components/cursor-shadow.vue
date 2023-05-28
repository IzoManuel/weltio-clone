<script setup>
import { ref, onMounted, computed } from "vue";
/**REACTIVE STATES */
const cursorPointerStyle = ref(false);
const cursorShadow = ref(false);
const clientXY = ref('');
const cursor = ref({
  x: 0,
  y: 0,
  scrollLeft: 0,
  scrollTop: 0,
  delay: 150,
});

/**COMPUTED PROPERTIES */
const cursorStyle = computed(() => {
  return {
    transform: `translate3d(${cursor.value.x}px, ${cursor.value.y}px, 0)`,
    transition: `transform ${cursor.value.delay}ms ease-out`,
  };
});

const cursorFollowerSize = computed(() => ({
  "transition ease-in-out duration-300 h-[15px] w-[15px]": !cursorPointerStyle.value, //cursorPointer === 'Not defined',
  "transition ease-in-out duration-300 h-[7px] w-[7px]": cursorPointerStyle.value,
}));

/**FUNCTIONS */
function updateCursor(e) {
  cursorShadow.value = true;
  clientXY.value = `${e.clientX -7}, ${e.clientY-7}`
  cursor.value.x = !cursorPointerStyle.value ? e.clientX - 7 : e.clientX - 3;
  cursor.value.y = cursorPointerStyle.value ? e.clientY - 4 : e.clientY - 7;
  // if (cursor.value.scrollLeft != document.documentElement.scrollLeft) {
  //     cursor.value.x -= cursor.value.scrollLeft;
  //     cursor.value.scrollLeft = document.documentElement.scrollLeft;
  //     cursor.value.x += cursor.value.scrollLeft;
  //   }
  //   if (cursor.value.scrollTop != document.documentElement.scrollTop) {
  //     cursor.value.y -= cursor.value.scrollTop;
  //     cursor.value.scrollTop = document.documentElement.scrollTop;
  //     cursor.value.y += cursor.value.scrollTop;
  //   }
}

function getCursorPointerStyle(e) {
  const tgt = e.target;
  const inline = tgt.style.cursor;
  cursorPointerStyle.value = inline;
  //Since it might not have been defined inline
  //const computed = window.getComputedStyle(tgt)["cursor"];
}

function shrinkCursorShadow(e) {
  return (cursorShadow.value = false);
}

onMounted(() => {
  document.addEventListener("mousemove", updateCursor);
  document.addEventListener("mouseover", getCursorPointerStyle);
  document.addEventListener("mouseleave", shrinkCursorShadow);
  document.addEventListener("mouseenter", shrinkCursorShadow);
  //window.addEventListener("scroll", updateCursor)
  window.addEventListener("scroll", (event) => {
    if (cursor.value.scrollLeft != document.documentElement.scrollLeft) {
      cursor.value.x -= cursor.value.scrollLeft;
      cursor.value.scrollLeft = document.documentElement.scrollLeft;
      cursor.value.x += cursor.value.scrollLeft;
    }
    if (cursor.value.scrollTop != document.documentElement.scrollTop) {
      cursor.value.y -= cursor.value.scrollTop;
      cursor.value.scrollTop = document.documentElement.scrollTop;
      cursor.value.y += cursor.value.scrollTop;
    }
  });
});
</script>
<template>
  <div
    :class="[cursorFollowerSize, cursorShadow ? '' : 'opacity-0']"
    class="absolute rounded-full bg-[#7e84e6] z-40 pointer-events-none"
    :style="cursorStyle"
  >
    <!-- {{ cursorStyle }}, {{ clientXY }} -->
  </div>
</template>

