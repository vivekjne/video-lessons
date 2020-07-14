import { ApiClient } from "./apiClient";

let client = new ApiClient();
const SECTION_URL = "/lessons";
export default {
    getLessons() {
        return client.get(SECTION_URL);
    },
    addLesson(data) {
        return client.post(SECTION_URL, data);
    },
    getLesson(id) {
        return client.get(`${SECTION_URL}/${id}`);
    }
};
