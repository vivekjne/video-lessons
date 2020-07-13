import { ApiClient } from "./apiClient";

let client = new ApiClient();
const SECTION_URL = "/subjects";
export default {
    getSubjects() {
        return client.get(SECTION_URL);
    },
    addCurricullum(data) {
        return client.post(SECTION_URL, data);
    },
    getSubject(id) {
        return client.get(`${SECTION_URL}/${id}`);
    }
};
