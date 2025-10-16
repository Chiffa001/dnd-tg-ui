import { mount } from "svelte";
import "./index.css";
import App from "@/components/app";

const app = mount(App, {
    target: document.getElementById("app")!,
});

export default app;
