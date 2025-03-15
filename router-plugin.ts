import type { BunPlugin } from "bun";

const plugin = {
    name: "router-plugin",
    async setup(builder) {
        builder.onResolve({ filter: /(^|\/)\.ts$/ }, (params) => {
            return {};
        });
    },
} satisfies BunPlugin;

export default plugin;
