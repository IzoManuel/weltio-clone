<template>
  <div
    class="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5"
  >
    <TransitionRoot appear :show="isOpen" as="template">
      <Dialog as="div" @close="closeModal" class="relative z-10">
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div
            class="flex min-h-full items-center justify-center p-4 text-center"
          >
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <DialogPanel
                class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
              >
                <DialogTitle
                  as="h3"
                  class="text-lg font-medium leading-6 text-gray-900"
                >
                  Create new task
                </DialogTitle>
                <div class="mt-2">
                  <div class="p-6 space-y-6">
                    <form action="#">
                      <div class="grid grid-cols-6 gap-6">
                        <div class="col-span-6 sm:col-span-3">
                          <label
                            for="name"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >Name*</label
                          >
                          <input
                            v-model="task.name"
                            type="text"
                            name="name"
                            id="name"
                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="Task 1"
                            required
                          />
                          <div
                            class="bg-red-100 border border-red-400 text-red-700 text-xs py-1 rounded relative"
                            role="alert"
                            v-if="formError.errors?.name"
                          >
                            <span class="block sm:inline">{{
                              formError.errors.name[0]
                            }}</span>
                            <span
                              class="absolute top-0 bottom-0 right-0 px-4 py-3"
                            >
                            </span>
                          </div>
                        </div>
                        <div class="col-span-6 sm:col-span-3">
                          <label
                            for="description"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >Description</label
                          >
                          <textarea
                            v-model="task.description"
                           
                            name="description"
                            id="description"
                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="..."
                          />
                        </div>
                        <div class="col-span-6 sm:col-span-3">
                          <label
                            for="duedate"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >Due date</label
                          >
                          <input
                            v-model="task.dueDate"
                            type="date"
                            name="email"
                            id="duedate"
                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder=""
                          />
                        </div>
                        <div class="col-span-6 sm:col-span-3">
                          <label
                            for="statusId"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >Status*</label
                          >
                          <select
                            id="statusId"
                            v-model="task.statusId"
                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          >
                            <option value="">Task Status</option>
                            <option
                              :value="status.id"
                              :key="index"
                              v-for="(status, index) in statuses"
                            >
                              {{ status.name }}
                            </option>
                          </select>
                          <div 
                            class="bg-red-100 border border-red-400 text-red-700 py-1 rounded text-xs relative"
                            role="alert"
                            v-if="formError.errors?.statusId"
                          >
                            <span class="block sm:inline">{{
                              formError.errors.statusId[0]
                            }}</span>
                            <span
                              class="absolute top-0 bottom-0 right-0 px-4 py-3"
                            >
                            </span>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                <div class="mt-4 flex gap-4">
                  <button
                    type="button"
                    class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    @click="createTask()"
                  >
                    Create task
                  </button>
                  <button
                    type="button"
                    class="inline-flex justify-center rounded-md border border-transparent bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    @click="closeModal"
                  >
                    Cancel
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
    <div class="w-full mb-1">
      <div class="mb-4">
        <h1 class="text-xl font-semibold text-gray-900 sm:text-2xl">
          All tasks
        </h1>
      </div>
      <div
        class="items-center justify-end gap-5 block sm:flex md:divide-x md:divide-gray-100"
      >
        <div class="flex items-center mb-4 sm:mb-0">
          <div class="flex items-center w-full sm:justify-end"></div>
        </div>
        <button
          class="text-white bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
          type="button"
          @click="openStatusModal"
        >
          Add new status
        </button>
        <button
          class="text-white bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
          type="button"
          @click="openModal"
        >
          Add new task
        </button>
      </div>
    </div>
  </div>
  <div class="flex flex-col">
    <div class="overflow-x-auto">
      <div class="inline-block min-w-full align-middle">
        <div class="overflow-hidden shadow">
          <table class="min-w-full divide-y divide-gray-200 table-fixed">
            <thead class="bg-gray-100">
              <tr>
                <th scope="col" class="p-4">
                  <div class="flex items-center">
                    <input
                      id="checkbox-all"
                      aria-describedby="checkbox-1"
                      type="checkbox"
                      class="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:bg-gray-700"
                    />
                    <label for="checkbox-all" class="sr-only">checkbox</label>
                  </div>
                </th>
                <th
                  scope="col"
                  class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                >
                  Name
                </th>
                <th
                  scope="col"
                  class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                >
                  Due date
                </th>
                <th
                  scope="col"
                  class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                >
                  Status
                </th>
                <th
                  scope="col"
                  class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                >
                  Created at
                </th>
                <th
                  scope="col"
                  class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                >
                  Updated at
                </th>
                <th
                  scope="col"
                  class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody
              class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700"
            >
              <spinner
                :height="'h-15'"
                :width="'w-15'"
                :fill="'fill-blue-500'"
                v-if="tableLoader"
              ></spinner>
              <tr
                class="hover:bg-gray-100 dark:hover:bg-gray-700"
                :key="index"
                v-for="(task, index) in tasks"
              >
                <td class="w-4 p-4">
                  <div class="flex items-center">
                    <input
                      id=""
                      aria-describedby="checkbox-1"
                      type="checkbox"
                      class="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label for="" class="sr-only">checkbox</label>
                  </div>
                </td>
                <td
                  class="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400"
                >
                  {{ task.name }}
                </td>
                <td
                  class="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {{ task.due_date }}
                </td>
                <td
                  class="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs dark:text-gray-400"
                >
                  {{ task.status_id }}
                </td>
                <td
                  class="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {{ task.created_at }}
                </td>
                <td
                  class="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {{ task.updated_at }}
                </td>
                <td class="p-4 space-x-2 whitespace-nowrap">
                  <router-link
                    :to="{ name: 'tasks.edit', params: { id: task.id } }"
                    type="button"
                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Edit
                  </router-link>
                  <button
                    type="button"
                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900"
                    @click="deleteTask(task.id)"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogDescription,
} from "@headlessui/vue";

export default {
  name: "ListTasks",
  data() {
    return {
      tasks: [],
      task: {
        name: "",
        description: "",
        dueDate: "",
        statusId: "",
      },
      tableLoader: false,
      deleteLoader: false,
      isOpen: false,
      isStatusOpen: false,
      statuses: [],
      formError: {
        errors: {},
      },
    };
  },
  components: {
    Dialog,
    DialogPanel,
    DialogTitle,
    TransitionRoot,
    TransitionChild,
    DialogDescription,
  },

  /**
   * methods
   */

  methods: {
    getTasks() {
      this.tableLoader = true;
      this.axios
        .get("task/tasks", {
          params: {
            page: this.page,
          },
        })
        .then((response) => {
          this.tasks = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => (this.tableLoader = false));
    },


    deleteTask(id) {
      this.axios
        .delete(`task/tasks/${id}`)
        .then((response) => {
          this.getTasks();
        })
        .catch((error) => {
          console.log(error);
        });
    },

    createTask() {
      let { name, description, dueDate, statusId } = this.task;
      this.axios
        .post(`/task/tasks`, {
          name,
          description,
          dueDate,
          statusId,
        })
        .then((response) => {
          this.getTasks();
          this.closeModal();
        })
        .catch((err) => {
          if (err.response) {
            if (err.response.data.errors !== undefined) {
              this.formError.errors = err.response.data.errors;
            }
          }
        })
       .finally(() => {

      });
    },
    getStatuses() {
      this.axios
        .get(`/status/statuses`)
        .then((response) => {
          this.statuses = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    closeModal() {
      this.isOpen = false;
    },
    openModal() {
      this.getStatuses();
      this.isOpen = true;
    },
    closeStatusModal() {
      this.isStatusOpen = false;
    },
    openStatusModal() {
      this.isStatusOpen = true;
    },
  },
  mounted() {
    this.getTasks();
  },
};
</script>