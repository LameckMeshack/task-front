<template>
  <form>
    <div class="mb-4 mx-auto px-2 w-6/12">
      <label class="block mb-1 text-sm" for="input2">Task Name</label>

      <input
        v-model="task.name"
        id="input2"
        class="w-full border px-4 py-2 rounded focus:border focus:border-blue-500 focus:shadow-outline outline-none"
        type="text"
        placeholder="Input placeholder..."
      />
    </div>
    <div class="mb-4 flex mx-auto px-2 w-6/12">
      <div class="mb-4 mx-auto w-6/12">
        <label class="block mb-1 text-sm" for="select-item">Status</label>
        <div class="relative">
          <select
            class="w-full border bg-white px-4 pr-8 py-2 rounded focus:border-blue-200 focus:shadow-outline outline-none appearance-none"
            id="select-item"
            v-model="task.status_id"
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
          <VueDatePicker class="pb-2" v-model="task.due_date"></VueDatePicker>
        </div>
      </div>
    </div>

    <div class="mb-4 mx-auto px-2 w-6/12">
      <label class="block mb-1 text-sm" for="textarea1">Task Description</label>

      <textarea
        id="textarea1"
        v-model="task.description"
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
        Create Task
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
export default {
  name: "ContactForm",
  components: { VueDatePicker, Success, Error },
  data() {
    return {
      success: false,
      error: false,
      msg: "",
      task: {
        name: "",
        description: "",
        status_id: "",
        due_date: "",
      },
    };
  },
  methods: {
    setSuccess(value) {
      this.success = value;
    },
    async onSubmit() {
      const hasEmptyValue = Object.values(this.task).some(
        (value) => value === ""
      );
      if (hasEmptyValue) {
        this.error = true;
        this.msg = "Please fill all the fields";
        return;
      }
      try {
        //format due_date in task
        this.task.due_date = new Date(this.task.due_date)
          .toISOString()
          .replace("T", " ")
          .slice(0, -5);
        const res = await TaskServices.create(this.task);
        this.success = true;
        this.error = false;
        this.msg = res.data.message;
        //reset form
        this.task = {
          name: "",
          description: "",
          status_id: "",
          due_date: "",
        };
      } catch (error) {
        this.error = true;
        this.msg = "Something went wrong";
      }
    },
  },
};
</script>
