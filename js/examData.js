/**
 * reads a single exam identified by the uuid
 * @param uuid
 */
function readExam(uuid) {
    return sendRequest(API_URL + "/exam/" + uuid);
}

/**
 * reads all exams matching a filter
 * @param filter
 */
function readExamlist(filter) {
    const result = sendRequest(API_URL + "/exams?" + filter);
    return result;
}

/**
 * saves an exam
 * @param data  the form data
 */
function saveExam(data) {

    let httpMethod = "PUT";
    let uuid = data.get("exam_uuid");
    if (uuid === null || uuid.trim() === "") {
        uuid = create_UUID();
        data.set("exam_uuid", uuid);
        document.getElementById('exam_uuid').value = uuid;
        httpMethod = "POST";
    }
    const result = sendRequest(API_URL + "/exam", httpMethod, data, "text");
    return result;
}