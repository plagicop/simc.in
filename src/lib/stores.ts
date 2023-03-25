import { browser } from "$app/environment";
import { writable } from "svelte/store";

export const isLeftBarCollapsed = writable<boolean>(browser ? window.localStorage.getItem("isLeftBarCollapsed") === "true" : false);

isLeftBarCollapsed.subscribe((value) => {
    if (browser) 
        window.localStorage.setItem("isLeftBarCollapsed", value.toString());
});