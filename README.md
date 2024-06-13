# Repro

Run:

```sh
deno run -A repro-main.mjs
```

Results in:

```text
============================================================
Deno has panicked. This is a bug in Deno. Please report this
at https://github.com/denoland/deno/issues/new.
If you can reliably reproduce this panic, include the
reproduction steps and re-run with the RUST_BACKTRACE=1 env
var set and include the backtrace in your report.

Platform: macos aarch64
Version: 1.44.2
Args: ["deno", "run", "-A", "repro-main.mjs"]

thread 'main' panicked at /Users/runner/.cargo/registry/src/index.crates.io-6f17d22bba15001f/deno_core-0.288.0/runtime/jsruntime.rs:1878:3:
internal error: entered unreachable code: Expected at least one stalled top-level await
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
```
