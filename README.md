Read `src/app.vine.ts` to view the source code.

Source Code:

```ts
export function App() {
  return vine`
    <pre>
      something there
    </pre>
    <textarea>
      similar as pre
    </textarea>
  `
}

export function AnotherApp() {
  return vine`
    <div v-if="true /*
      Hi there
    */">
      Good Morning
    </div>
  `
}

export function AnotherBuggedApp(){
  return vine`
  <div v-if="(() => {
    const a: string = 'Hello\
    Guys'
    return a === 'wonderful'
  })()">
    Good AfterNoon
  </div>
  `
}


```

Run the fix for once

```ts
export function App() {
  return vine`
    <pre>
                          something there
                        </pre
    >
    <textarea>
                          similar as pre
                        </textarea
    >
  `
}

export function AnotherApp() {
  return vine`
    <div
      v-if="
        true /*
                          Hi there
                        */
      "
    >
      Good Morning
    </div>
  `
}

export function AnotherBuggedApp() {
  return vine`
    <div
      v-if="(() => {
        const a: string = 'Hello\
                        Guys'
        return a === 'wonderful'
                      })()"
    >
      Good AfterNoon
    </div>
  `
}
```

And twice

```ts
export function App() {
  return vine`
    <pre>
                                              something there
                                            </pre
    >
    <textarea>
                                              similar as pre
                                            </textarea
    >
  `
}

export function AnotherApp() {
  return vine`
    <div
      v-if="
        true /*
                                              Hi there
                                            */
      "
    >
      Good Morning
    </div>
  `
}

export function AnotherBuggedApp() {
  return vine`
    <div
      v-if="(() => {
        const a: string = 'Hello\
                                            Guys'
              return a === 'wonderful'
                                          })()"
    >
      Good AfterNoon
    </div>
  `
}
```

Run `nr lint`

Logs: 

```log
/Users/liangmi/code/vine/unocss-vine/src/app.vine.ts
   4:7   warning  Insert `··`                                                   vue-vine/format-vine-template
   5:5   warning  Replace `</pre` with `··</pre⏎····`                           vue-vine/format-vine-template
   7:7   warning  Insert `··`                                                   vue-vine/format-vine-template
   8:5   warning  Replace `</textarea` with `··</textarea⏎····`                 vue-vine/format-vine-template
  14:9   warning  Replace `·v-if="` with `⏎······v-if="⏎········`               vue-vine/format-vine-template
  15:1   warning  Replace `······` with `········`                              vue-vine/format-vine-template
  16:5   warning  Replace `*/"` with `··*/⏎······"⏎····`                        vue-vine/format-vine-template
  22:35  error    Missing space before opening brace                            style/space-before-blocks
  24:3   warning  Replace `<div` with `··<div⏎·····`                            vue-vine/format-vine-template
  25:1   warning  Insert `··`                                                   vue-vine/format-vine-template
  25:23  error    Multiline support is limited to browsers supporting ES5 only  no-multi-str
  26:5   warning  Insert `··`                                                   vue-vine/format-vine-template
  27:1   warning  Replace `····` with `······`                                  vue-vine/format-vine-template
  28:3   warning  Replace `})()"` with `··})()"⏎····`                           vue-vine/format-vine-template
  29:1   warning  Insert `··`                                                   vue-vine/format-vine-template
  30:1   warning  Insert `··`                                                   vue-vine/format-vine-template

✖ 16 problems (2 errors, 14 warnings)
  1 error and 14 warnings potentially fixable with the `--fix` option.
```
