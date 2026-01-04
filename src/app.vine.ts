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
