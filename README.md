Read `src/app.vine.ts` to view the source code.

Run `nr lint`

Logs: 

```log
~ nr lint                                                                                                                                              1 [18:30:35]

> unocss-vine@0.0.0 lint /Users/liangmi/code/vine/unocss-vine
> eslint src --cache

...

=============

/Users/liangmi/code/vine/unocss-vine/src/app.vine.ts
  2:9   error  'foo' is assigned a value but never used. Allowed unused vars must match /^_/u  unused-imports/no-unused-vars
  3:12  error  'functionFoo' is defined but never used. Allowed unused vars must match /^_/u   unused-imports/no-unused-vars

✖ 2 problems (2 errors, 0 warnings)

 ELIFECYCLE  Command failed with exit code 1.
```