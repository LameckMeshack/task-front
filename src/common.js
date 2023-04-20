export default {
  data() {
    return {
      // ...
    };
  },
  methods: {
    ///date format
    formatDate(dateString) {
      const date = new Date(dateString);

      // Get the day, month, and year components of the date
      const day = date.getDate();
      const month = date.toLocaleString("default", { month: "long" });
      const year = date.getFullYear();

      // Get the hours and minutes components of the time
      const hours = date.getHours().toString().padStart(2, "0");
      const minutes = date.getMinutes().toString().padStart(2, "0");

      // Format the date and time into a string
      const formattedDate = `${day} ${month} ${year}`;
      const formattedTime = `${hours}:${minutes}`;

      // Return the formatted date and time
      return `${formattedDate} at ${formattedTime}`;
    },
  },
};
