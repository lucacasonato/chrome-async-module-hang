export default async () => {
  // depends on `common.mjs` which contains a TLA
  const a = import("./a.mjs");
  // this resolves, resetting the async ordinal counter
  await import("./imports-async-module.mjs");
  
  // start evaluating more modules that depend on `common.mjs`.
  // one of these will receive a duplicate ordinal to
  // `a.mjs`
  await Promise.all([
    import("./b.mjs"),
    import("./c.mjs"),
    import("./d.mjs"),
    import("./e.mjs"),
    import("./f.mjs"),
  ]);
  a;
  // when `common.mjs` settles, we go to update the state
  // of the modules waiting on it. Due to the duplicate
  // ordinal, one of the modules will be skipped and
  // be stuck pending forever.

};
