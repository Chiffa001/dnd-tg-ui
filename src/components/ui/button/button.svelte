<script lang="ts">
  type Variant = 'primary' | 'outline';

  export let onClick: () => void;
  export let variant: Variant = 'primary';
  export let disabled: boolean = false;
  export let className: string = '';

  const styles: Record<Variant, string> = {
    primary:
      'bg-gradient-to-r from-[#63EAF3] to-[#6C4EFE] hover:from-[#50d6e0] hover:to-[#593edb] active:opacity-80 font-medium',
    outline: 'border border-[#6C79E6] bg-transparent hover:bg-[#6C79E6] active:bg-[#5a67d8]'
  };
</script>

<button
  class={`h-max w-full cursor-pointer rounded-xl p-3 text-white transition-all duration-300 ${styles[variant]} ${disabled ? 'pointer-events-none cursor-not-allowed opacity-50' : ''} ${className}`}
  on:click={onClick}
>
  <slot></slot>
</button>
