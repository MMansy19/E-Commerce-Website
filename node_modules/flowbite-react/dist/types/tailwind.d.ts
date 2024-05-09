interface Content {
    /**
     * Path to `node_modules` where `flowbite-react` is installed
     *
     * ===============================================
     *
     * For monorepo setup where `flowbite-react` is installed in the root `node_modules` but used in `apps/web` directory
     * @example
     * ```
     * // tailwind.config.(js|cjs|mjs) file
     *
     * // cjs
     * const flowbite = require("flowbite-react/tailwind");
     * // esm
     * import flowbite from "flowbite-react/tailwind";
     *
     * {
     *   content: [
     *     // ...
     *     flowbite.content({ base: "../../" })
     *   ],
     *   plugins: [
     *     // ...
     *     flowbite.plugin()
     *   ]
     * }
     * ```
     *
     * @default "./"
     */
    base?: string;
}
export declare function content({ base }?: Content): string;
export declare function plugin(): {
    handler: () => void;
};
export {};
