<template>
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
                Update assigned task
              </DialogTitle>
              <div class="mt-2">
                <div class="p-6 space-y-6">
                  <form action="#">
                    <div class="grid grid-cols-6 gap-6">
                      <div class="col-span-6 sm:col-span-3">
                        <label
                          for="remarks"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >Remarks</label
                        >
                        <textarea
                          v-model="taskUser.remarks"
                          name="remarks"
                          id="remarks"
                          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          placeholder="..."
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
                          v-model="taskUser.statusId"
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
                      <div class="col-span-6 sm:col-span-3">
                        <label
                          for="duedate"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >Due date</label
                        >
                        <input
                          v-model="taskUser.dueDate"
                          type="date"
                          id="duedate"
                          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          placeholder=""
                        />
                      </div>
                      <div class="col-span-6 sm:col-span-3">
                        <label
                          for="startTime"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >Start time</label
                        >
                        <input
                          v-model="taskUser.startTime"
                          type="date"
                          id="startTime"
                          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          placeholder=""
                        />
                      </div>
                      <div class="col-span-6 sm:col-span-3">
                        <label
                          for="endTime"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >End time</label
                        >
                        <input
                          v-model="taskUser.endTime"
                          type="date"
                          id="endTime"
                          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          placeholder=""
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div class="mt-4 flex gap-4">
                <button
                  type="button"
                  class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  @click="updateAssignedTask"
                >
                  Update
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
  <div
    class="grid grid-cols-1 px-4 pt-6 xl:grid-cols-3 xl:gap-4 dark:bg-gray-900"
  >
    <div class="mb-4 col-span-full xl:mb-2">
      <h1
        class="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white"
      >
        Edit task
      </h1>
    </div>
    <!-- Right Content -->
    <div class="col-span-2">
      <div
        class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800"
      >
        <h3 class="mb-4 text-xl font-semibold dark:text-white">
          General information
        </h3>
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
                <span class="absolute top-0 bottom-0 right-0 px-4 py-3"> </span>
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
                <span class="absolute top-0 bottom-0 right-0 px-4 py-3"> </span>
              </div>
            </div>
            <div>
              <button
                :disabled="taskEditLoader"
                :class="{ 'cursor-wait': taskEditLoader }"
                class="flex items-center text-white bg-primary-700 bg-blue-700 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                @click="updateTask"
              >
                <spinner
                  :height="'h-5'"
                  :width="'w-5'"
                  :fill="'fill-white'"
                  v-if="taskEditLoader"
                ></spinner>
                Edit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="col-span-full xl:col-auto">
      <div
        class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800"
      >
        <h3 class="mb-4 text-xl font-semibold dark:text-white">Assign Task</h3>
        <div class="mb-4">
          <label
            for="assign"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Select User to assign</label
          >
          <select
            v-model="assignedUser"
            id="assign"
            class="bg-gray-50 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          >
            <option value="">Assign Task</option>
            <option
              :value="user.id"
              :key="index"
              v-for="(user, index) in users"
            >
              {{ user.email }}
            </option>
          </select>
        </div>
        <div>
          <button
            :disabled="assignLoader"
            :class="{ 'cursor-wait': assignLoader }"
            class="flex items-center text-white bg-primary-700 bg-blue-700 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            @click="assignTask"
          >
            <spinner
              :height="'h-5'"
              :width="'w-5'"
              :fill="'fill-white'"
              v-if="assignLoader"
            ></spinner>
            Assign
          </button>
        </div>
      </div>

      <div
        class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800"
      >
        <h3 class="mb-4 text-xl font-semibold dark:text-white">Assignees</h3>

        <div class="flex flex-col">
          <div class="overflow-x-auto">
            <div class="inline-block min-w-full align-middle">
              <div class="overflow-hidden shadow">
                <table class="min-w-full divide-y divide-gray-200 table-fixed">
                  <thead class="bg-gray-100">
                    <tr>
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
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody
                    class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700"
                  >
                    <spinner
                      :height="'h-8'"
                      :width="'w-8'"
                      :fill="'fill-blue-500'"
                      v-if="tableLoader"
                    ></spinner>
                    <tr
                      class="hover:bg-gray-100 dark:hover:bg-gray-700"
                      :key="index"
                      v-for="(assignee, index) in assignees"
                    >
                      <td
                        class="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400"
                      >
                        {{ assignee.email }}
                      </td>

                      <td class="p-4 space-x-2 whitespace-nowrap">
                        <button
                          @click="openModal(assignee.id)"
                          type="button"
                          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900"
                          @click="unassign(assignee.id)"
                        >
                          Absolve
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "../../../common/helpers/axios/axios.js";

import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogDescription,
} from "@headlessui/vue";

export default {
  data() {
    return {
      task: {
        name: "",
        description: "",
        dueDate: "",
        statusId: "",
      },
      statuses: [],
      users: [],
      assignedUser: "",
      assignLoader: false,
      assignees: [],
      tableLoader: false,
      taskEditLoader: false,
      isOpen: false,
      formError: {
        errors: {},
      },
      taskUser: {
        userId: "",
        dueDate: "",
        startTime: "",
        endTime: "",
        remarks: "",
        statusId: "",
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
  methods: {
    getTask() {
      axios
        .get(`/task/tasks/${this.$route.params.id}`)
        .then((response) => {
          let data = response.data.data;
          this.task.name = data.name;
          this.task.description = data.description;
          this.task.dueDate = data.dueDate;
          this.task.statusId = data.statusId;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    getStatuses() {
      axios
        .get(`/status/statuses`)
        .then((response) => {
          this.statuses = response.data.data;
        })
        .catch((error) => {
          //console.log(error);
        });
    },

    getAssignees() {
      this.tableLoader = true;
      axios
        .get(`/task/tasks/${this.$route.params.id}/assignees`)
        .then((response) => {
          this.assignees = response.data.data;
        })
        .catch((error) => {
        })
        .finally(() => (this.tableLoader = false));
    },

    updateTask() {
      this.taskEditLoader = true;
      let { name, description, dueDate, statusId } = this.task;
      axios
        .post(`/task/tasks/${this.$route.params.id}`, {
          name,
          description,
          dueDate,
          statusId,
        })
        .then((response) => {
        })
        .catch((err) => {
          if (err.response) {
            if (err.response.data.errors !== undefined) {
              this.formError.errors = err.response.data.errors;
            }
          }
        })
        .finally(() => (this.taskEditLoader = false));
    },

    updateAssignedTask() {
      this.taskEditLoader = true;
      let { userId, dueDate, startTime, endTime, remarks, statusId } =
        this.taskUser;
      axios
        .post(`/task/tasks/${this.$route.params.id}/updateassigned`, {
          userId,
          dueDate,
          startTime,
          endTime,
          remarks,
          statusId,
        })
        .then((response) => {
        })
        .catch((error) => {
          //   console.log(error);
        })
        .finally(() => (this.taskEditLoader = false));
    },

    getUsers() {
      axios
        .get("user/users", {
          params: {
            page: this.page,
          },
        })
        .then((response) => {
          this.users = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    assignTask() {
      this.assignLoader = true;
      axios
        .post(`/task/tasks/${this.$route.params.id}/assign`, {
          userId: this.assignedUser,
        })
        .then((response) => {
          this.getAssignees();
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => (this.assignLoader = false));
    },

    unassign(userId) {
      this.tableLoader = true;
      axios
        .post(`/task/tasks/${this.$route.params.id}/unassign`, {
          userId: userId,
        })
        .then((response) => {
          this.getAssignees();
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => (this.tableLoader = false));
    },
    closeModal() {
      this.isOpen = false;
    },
    openModal(assigneeId) {
      this.taskUser.userId = assigneeId;
      this.getStatuses();
      this.isOpen = true;
    },
  },
  mounted() {
    this.getTask();
    this.getStatuses();
    this.getUsers();
    this.getAssignees();
  },
};
</script>