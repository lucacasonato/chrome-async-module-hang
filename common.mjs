// make sure it takes >1 tick to evaluate the module
await import("./dummy").catch(() => {});
await import("./dummy").catch(() => {});

await new Promise((resolve) => setTimeout(resolve, 100));

export default () => {};
