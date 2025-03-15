import type { BunPlugin } from "bun";

const plugin = {
    name: "router-plugin",
    async setup(builder) {
        builder.onResolve({ filter: /^(cdn)\/.tsx$/ }, (params) => {
            return {
                path: params.path.replaceAll(`(cdn)/`, 'routes'),
            };
        });
    }
} satisfies BunPlugin;

export default plugin;
