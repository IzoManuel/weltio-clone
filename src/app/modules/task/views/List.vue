<script setup>
import { ref, onMounted } from "vue";
import axios from "../../../common/helpers/axios/axios.js";
import Modal from "../../../components/modal.vue";
import FormInput from "../../../components/form-input.vue";
import DataTable from "../../../components/data-table.vue";
import { useRouter } from "vue-router";
import {
  deleteItemFromArray,
  addItemToArray,
  setAll,
} from "../../../composables/list-items.composable";
import SlideOver from "../../../components/slide-over.vue";
import CustomButton from "../../../components/custom-button.vue";
// reactive state
const tasks = ref([]);
const task = ref({
  name: "",
  description: "",
  dueDate: "",
  statusId: "",
  id: "",
});
const taskFields = ref([
  {
    label: "Name*",
    id: "name",
    placeholder: "",
    type: "text",
  },
  {
    label: "Description",
    id: "description",
    placeholder: "",
    renderAs: "textarea",
  },
  {
    label: "Due Date",
    id: "dueDate",
    placeholder: "",
    type: "date",
  },
  {
    label: "Status",
    id: "statusId",
    placeholder: "",
    renderAs: "select",
    optionValue: "name",
    optionKey: "id",
  },
]);
const taskAssigneeField = ref({
  label: "Assignee",
  id: "assigneet",
  placeholder: "",
  renderAs: "select",
  optionValue: "email",
  optionKey: "id",
});
const tableLoader = ref(false);
const deleteTaskLoader = ref(false);
const taskLoader = ref(false);
const isOpen = ref(false);
const statuses = ref([]);
const validationError = ref({});
const taskTableHeaders = ref([
  { text: "NAME", value: "name" },
  { text: "DUE DATE", value: "due_date" },
  { text: "STATUS", value: "status" },
  { text: "CREATED AT", value: "created_at" },
]);
const router = useRouter();
const taskTableActions = ref([
  {
    actionFunction: (itemId) => {
      openSlideOver("update");
      getTask(itemId);
    },
    // actionFunction: (itemId) => {
    //   router.push({ name: "tasks.edit", params: { id: itemId } });
    // },
    actionLabel: "Edit",
  },
  { actionFunction: (taskId) => deleteTask(taskId), actionLabel: "Delete" },
]);
const modalActions = ref([
  { actionFunction: () => createTask(), actionLabel: "Create Task" },
]);
const saveAction = ref("");
const isSlideOverOpen = ref(false);
const operation = ref("");
const users = ref([]);
// functions that mutate state and trigger updates
function getTasks() {
  tableLoader.value = true;
  axios
    .get("task/tasks", {
      params: {
        //page: this.page,
      },
    })
    .then((response) => {
      tasks.value = response.data.data;
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => (tableLoader.value = false));
}

function deleteTask(id) {
  deleteTaskLoader.value = true;
  axios
    .delete(`task/tasks/${id}`)
    .then((response) => {
      deleteItemFromArray(tasks.value, id);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => (deleteTaskLoader.value = false));
}

function createTask() {
  let { name, description, dueDate, statusId } = task.value;
  taskLoader.value = true;
  axios
    .post(`/task/tasks`, {
      name,
      description,
      dueDate,
      statusId,
    })
    .then((response) => {
      addItemToArray(tasks.value, response.data.data);
    })
    .catch((err) => {
      if (err.response) {
        if (err.response.data.errors !== undefined) {
          validationError.value = err.response.data.errors;
        }
      }
    })
    .finally(() => (taskLoader.value = false));
}

function getStatuses() {
  axios
    .get(`/status/statuses`)
    .then((response) => {
      statuses.value = response.data.data;
    })
    .catch((error) => {
      console.log(error);
    });
}

function updateTask() {
  taskLoader.value = true;
  const { name, description, dueDate, statusId, id } = task.value;
  axios
    .post(`/task/tasks/${id}`, {
      name,
      description,
      dueDate,
      statusId,
    })
    .then((response) => {
      addItemToArray(tasks.value, response.data.data);
    })
    .catch((err) => {
      if (err.response) {
        if (err.response.data.errors !== undefined) {
          validationError.value = err.response.data.errors;
        }
      }
    })
    .finally(() => (taskLoader.value = false));
}

function getTask(itemId) {
  const currentTask = tasks.value.find((task) => task.id === itemId);
  task.value.name = currentTask.name;
  task.value.description = currentTask.description;
  task.value.dueDate = currentTask.due_date;
  task.value.statusId = currentTask.status_id;
  task.value.id = currentTask.id;
}

function getUsers() {
  axios
    .get("user/users", {
      params: {},
    })
    .then((response) => {
      users.value = response.data.data;
    })
    .catch((error) => {
      console.log(error);
    });
}
// function closeModal() {
//   isOpen.value = false;
// }

// function openModal() {
//   getStatuses();
//   setAll(task.value, '')
//   isOpen.value = true;
// }

function setIsOpen(value) {
  isOpen.value = value;
}

function setIsSlideOverOpen(value) {
  isSlideOverOpen.value = value;
}

function openSlideOver(operationName) {
  setAll(validationError.value, "");
  getUsers();
  operation.value = operationName;
  if (operationName === "create") {
    setAll(task.value, "");
    saveAction.value = createTask;
  } else {
    saveAction.value = updateTask;
  }
  getStatuses();
  isSlideOverOpen.value = true;
}

onMounted(() => {
  getTasks();
});
</script>

<template>
  <data-table
    :headers="taskTableHeaders"
    :items="tasks"
    :create-item="openSlideOver"
    :create-item-label="'Create Task'"
    :loader="tableLoader"
    :deleteLoader="deleteTaskLoader"
    :actions="taskTableActions"
  >
    <template #customColumn>Actions</template>
  </data-table>
  <div class="pt-[50px]">
    <slide-over
      :isOpen="isSlideOverOpen"
      :setIsOpen="setIsSlideOverOpen"
      :title="operation"
    >
      <template #slideOverContent>
        <div class="p-6 space-y-6">
          <form>
            <div>
              <div
                class="mb-3"
                :key="index"
                v-for="(taskField, index) in taskFields"
              >
                <form-input
                  v-bind="taskField"
                  v-model="task[taskField.id]"
                  :error-message="
                    validationError?.[taskField.id]
                      ? validationError[taskField.id][0]
                      : ''
                  "
                  :options="statuses"
                >
                </form-input>
              </div>
              <div class="">
                <custom-button
                  :loader="taskLoader"
                  :action-label="'Save'"
                  @click="saveAction"
                >
                </custom-button>
              </div>
              <div class="flex gap-2 items-end mt-3">
                <custom-button :action-label="'Assign'"> </custom-button>
                <form-input
                  class="w-full"
                  v-bind="taskAssigneeField"
                  :options="users"
                >
                </form-input>
              </div>
            </div>
          </form>
        </div>
      </template>
    </slide-over>
  </div>
</template>