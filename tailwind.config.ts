import type { Config } from "tailwindcss";

import { MyPlugin } from "./src/lib/tw-plugins/MyPlugin";

const config = {
	content: ["src/**/*.{ts,tsx}"],
	plugins: [MyPlugin],
} satisfies Config;
export default config;
