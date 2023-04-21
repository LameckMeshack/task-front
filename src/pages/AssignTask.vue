<template>
  <h1 class="text-2xl mx-auto">Assign Task To User</h1>

  <form>
    <div class="mb-4 flex mx-auto px-2 w-6/12">
      <div class="w-2/3 mr-1">
        <label class="block mb-1 text-sm" for="task">Task Name</label>

        <input
          v-model="taskEdit.task"
          disabled
          id="task"
          class="w-full border px-4 py-2 rounded focus:border focus:border-blue-500 focus:shadow-outline outline-none cursor-not-allowed"
          type="text"
        />
      </div>
      <div class="w-1/3">
        <label class="block mb-1 text-sm" for="user">User</label>
        <div class="relative">
          <select
            class="w-full border bg-white px-4 pr-8 py-2 rounded focus:border-blue-200 focus:shadow-outline outline-none appearance-none"
            id="user"
            v-model="taskEdit.user_id"
          >
            <option v-for="user in users" :key="user.id" :value="user.id">
              {{ user.name }}
            </option>
          </select>

          <div
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
          >
            <svg
              class="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div class="mb-4 flex mx-auto px-2 w-6/12">
      <div class="mb-4 mx-auto w-6/12">
        <label class="block mb-1 text-sm" for="select-item">Status</label>
        <div class="relative">
          <select
            class="w-full border bg-white px-4 pr-8 py-2 rounded focus:border-blue-200 focus:shadow-outline outline-none appearance-none"
            id="select-item"
            v-model="taskEdit.status_id"
          >
            <option value="1">Not Start</option>
            <option value="2">In Progress</option>
            <option value="3">Completed</option>
          </select>

          <div
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
          >
            <svg
              class="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
              />
            </svg>
          </div>
        </div>
      </div>

      <div class="mb-4 mx-auto pl-2 w-6/12">
        <label class="block mb-1 text-sm" for="select-item">Due Date</label>
        <div class="relative">
          <VueDatePicker
            class="pb-2"
            v-model="taskEdit.due_date"
          ></VueDatePicker>
        </div>
      </div>
    </div>

    <div class="mb-4 flex mx-auto px-2 w-6/12">
      <div class="mb-4 mx-auto pl-2 w-6/12">
        <label class="block mb-1 text-sm" for="select-item">Start Time</label>
        <div class="relative">
          <VueDatePicker
            class="pb-2"
            v-model="taskEdit.start_time"
          ></VueDatePicker>
        </div>
      </div>

      <div class="mb-4 mx-auto pl-2 w-6/12">
        <label class="block mb-1 text-sm" for="select-item">End Time</label>
        <div class="relative">
          <VueDatePicker
            class="pb-2"
            v-model="taskEdit.end_time"
          ></VueDatePicker>
        </div>
      </div>
    </div>

    <div class="mb-4 mx-auto px-2 w-6/12">
      <label class="block mb-1 text-sm" for="textarea1">Task Remark</label>

      <textarea
        id="textarea1"
        v-model="taskEdit.remark"
        class="w-full border px-4 py-2 rounded focus:border-blue-500 focus:shadow-outline outline-none"
        rows="5"
        placeholder="Task Description..."
      ></textarea>
    </div>
    <!-- buton -->
    <div class="mb-4 mx-auto px-2 w-6/12">
      <button
        @click="onSubmit"
        class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
      >
        Assign Task
      </button>
    </div>
  </form>
  <div class="mb-4 mx-auto px-2 w-6/12">
    <success
      v-if="success"
      :msg="msg"
      :success="success"
      @close="setSuccess(false)"
    />

    <error v-if="error" :msg="msg" :error="error" @close="setError(false)" />
  </div>
</template>
<script>
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import TaskServices from "../services/task.service";
import Success from "@/components/Success.vue";
import Error from "@/components/Error.vue";
import AuthServices from "@/services/auth.services";

export default {
  name: "ContactForm",
  components: { VueDatePicker, Success, Error },

  props: ["listItem"],
  data() {
    return {
      success: false,
      error: false,
      msg: "",
      users: [],
      taskEdit: {
        task: this.$route.params.name,
        status_id: "",
        end_time: "",
        start_time: "",
        remark: "",
        due_date: "",
        user_id: "",
        task_id: this.$route.params.id,
      },
    };
  },
  methods: {
    setSuccess(value) {
      this.success = value;
    },
    async onSubmit() {
      const hasEmptyValue = Object.values(this.taskEdit).some(
        (value) => value === ""
      );
      if (hasEmptyValue) {
        this.error = true;
        this.msg = "Please fill all the fields";
        return;
      }
      try {
        //format due_date in taskEdit
        this.taskEdit.due_date = new Date(this.taskEdit.due_date)
          .toISOString()
          .replace("T", " ")
          .slice(0, -5);
        //format start_time in taskEdit
        this.taskEdit.start_time = new Date(this.taskEdit.start_time)
          .toISOString()
          .replace("T", " ")
          .slice(0, -5);
        //format end_time in taskEdit

        this.taskEdit.end_time = new Date(this.taskEdit.end_time)
          .toISOString()
          .replace("T", " ")
          .slice(0, -5);
        console.log(this.taskEdit);
        const res = await TaskServices.createUserTask({
          ...this.taskEdit,
        });
        this.success = true;
        this.error = false;
        this.msg = res.data.message;
        // redirect
        this.$router.push({ name: "DashboardHome" });
      } catch (error) {
        this.error = true;
        this.msg = Object.values(error.response.data.data)[0][0];
        if (!this.msg) {
          this.msg = error.response.data.message + "Something went wrong";
        }
      }
    },
    async getUsers() {
      const res = await AuthServices.getAllUsers();
      this.users = res.data.data;
      console.log(this.users);
    },
  },

  created() {
    this.getUsers();
  },
};
</script>
