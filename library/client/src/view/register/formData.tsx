export function handleFormData():any{
const data = new FormData();
    for (const entry in data) {
    console.log(entry);
    }
}