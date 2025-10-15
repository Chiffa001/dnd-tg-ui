import { mount } from "svelte";
import App from "@/components/app";

const app = mount(App, {
    target: document.getElementById("app")!,
});

export default app;
