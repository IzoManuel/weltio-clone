<template>
  <!-- Nav start -->
  <nav class="fixed z-30 w-full bg-white border-b border-gray-200">
    <div class="px-3 py-3 lg:px-5 lg:pl-3">
      <div class="flex items-center justify-between">
        <div class="flex items-center justify-start">
          <a class="flex ml-2 md:mr-24">
            <span
              class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap"
              >Todo</span
            >
          </a>
        </div>
      </div>
    </div>
  </nav>
  <!-- Nav end -->
  <div class="flex pt-16 overflow-hidden bg-gray-50">
    <!-- Sidebar start -->
    <aside
      id="sidebar"
      class="fixed top-0 left-0 z-20 flex flex-col flex-shrink-0 hidden w-64 h-full pt-[50px] font-normal duration-75 lg:flex transition-width"
    >
      <div
        class="relative flex flex-col flex-1 min-h-0 pt-0 bg-white border-r border-gray-200"
      >
        <div class="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
          <div class="flex-1 px-3 space-y-1 bg-white divide-y divide-gray-200">
            <ul class="pb-2 space-y-2">
              <li>
                <router-link
                :to="{name: 'tasks.index'}"
                  class="text-base text-gray-900 rounded-lg flex items-center p-2 group hover:bg-gray-100 transition duration-75 pl-11 dark:text-gray-200 bg-gray-100"
                  >Tasks</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </aside>
    <!-- Sidebar end -->

    <!-- Main content -->
    <div
      id="main-content"
      class="relative p-4 w-full h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900"
    >
    <router-view />
    </div>
  </div>
  <!-- Main content -->

</template>

<script>
export default {
  name: "TaskBaseLayout",
};
</script>

<style scoped>
</style>