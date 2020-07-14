import { ApiClient } from "./apiClient";

let client = new ApiClient();
const SECTION_URL = "/sections";
export default {
    getSections() {
        return client.get(SECTION_URL);
    },
    addSections(data) {
        return client.post(SECTION_URL, data);
    },
    getSection(id) {
        return client.get(`${SECTION_URL}/${id}`);
    }
};
