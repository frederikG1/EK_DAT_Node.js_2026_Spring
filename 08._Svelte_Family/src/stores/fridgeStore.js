import { writable } from "svelte/store";
//A store is just a way to share reactive data between components that aren't directly connected (parent/child).

function createFridge() {
    const defaultMessage = {
        name: "",
        message: "Write your message on the fridge "
    };

    const { set, update, subscribe } = writable([defaultMessage]);

    return {
        set,
        update,
        subscribe,
        wipe: () => set([defaultMessage])
    }
}
export const fridgeMessages = createFridge();


// export const fridgeMessages = writable([
//     {
//         name: "",
//         message: "Write your message on the fridge"
//     }
// ]);


