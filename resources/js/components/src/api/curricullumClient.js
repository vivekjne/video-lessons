import { ApiClient } from "./apiClient";

let client = new ApiClient();
const SECTION_URL = "/curricullums";
export default {
    getCurricullums() {
        return client.get(SECTION_URL);
    },
    addCurricullum(data) {
        return client.post(SECTION_URL, data);
    }
};
