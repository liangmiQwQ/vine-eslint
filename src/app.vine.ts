export function App() {
  function error() {}

  return vine`
    <div class="max-w-screen-lg mx-auto h-full px-12 py-24">
      <button @click="(_e: any) => error()" />
    </div>
  `
}
