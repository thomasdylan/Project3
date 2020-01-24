import axios from "axios";

export default {
    // Gets all goal by user
    getGoal: function (user) {
        return axios.get("/api/goals" + user);
    },
    // Gets the goal with the given id
    getGoal: function (id) {
        return axios.get("/api/goals/" + id);
    },
    // Deletes the goal with the given id
    deleteGoal: function (id) {
        return axios.delete("/api/goals/" + id);
    },
    // Saves a goal to the database
    saveGoal: function (goalData) {
        return axios.post("/api/goals", goalData);
    }
};
