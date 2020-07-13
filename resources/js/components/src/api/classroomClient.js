import { ApiClient } from "./apiClient";

let client = new ApiClient();
const SECTION_URL = "/classrooms";

export default {
    getClassrooms() {
        return client.get(SECTION_URL);
    },
    addClassroom(data) {
        return client.post(SECTION_URL, data);
    }
};
