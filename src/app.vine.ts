export function App() {
  const foo = (_some: string) => { }
  function functionFoo(_some: string) {}

  function work(_some: string) { }

  return vine`
    <div class="max-w-screen-lg mx-auto h-full px-12 py-24">
      <!-- ⬇️ Access a function, but eslint throw define but never used -->
      <textarea @input="(e: Event) => foo((e.target as HTMLTextAreaElement).value)" />
      <textarea @input="(e: Event) => functionFoo((e.target as HTMLTextAreaElement).value)" />

      <!-- ⬇️ Try to access an undefined method -->
      <textarea @input="(e: Event) => bar((e.target as HTMLTextAreaElement).value)" />
      <button @click="bar" />

      <!-- ✅ Seems only work expectedly with event like @click -->
      <button @click="work" />
    </div>
  `
}
