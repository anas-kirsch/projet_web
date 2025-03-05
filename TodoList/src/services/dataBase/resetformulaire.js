import { Components } from "../../components/Components.js";

export function resetForm(){

    Components.form.TasknameInput.value = '';
    Components.form.TaskContentInput.value = '';
    Components.form.TaskTagInput.value = '';
}