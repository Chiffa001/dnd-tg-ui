<main class="flex min-h-screen items-center justify-center overflow-x-hidden">
  <div
    class="relative hidden h-[720px] max-h-[90vh] w-[360px] max-w-[90vw] rounded-3xl border-4 border-gray-500 sm:flex"
    style="transform-origin: top center;"
  >
    <div class="absolute flex h-full w-full justify-center overflow-hidden rounded-3xl p-4">
      <slot></slot>
    </div>
  </div>

  <div class="relative flex h-[100vh] w-full flex-col items-center p-4 sm:hidden">
    <slot></slot>
  </div>
</main>
