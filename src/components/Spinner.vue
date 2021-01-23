<template>
  <svg
    :class="{ 'animate-spin': isLoading, hidden: !isLoading }"
    class="w-6 ml-4 h-6"
    style="margin: auto; background: none;  shape-rendering: auto;"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
  >
    <circle
      cx="50"
      cy="50"
      r="32"
      stroke-width="8"
      stroke="#ffffff"
      stroke-dasharray="50.26548245743669 50.26548245743669"
      fill="none"
      stroke-linecap="round"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        repeatCount="indefinite"
        dur="1s"
        keyTimes="0;1"
        values="0 50 50;360 50 50"
      />
    </circle>
  </svg>

  <!-- <svg
    :class="{ 'animate-spin': isLoading, hidden: !isLoading }"
    class="  w-6 h-6 ml-4"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path
      fill-rule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
      clip-rule="evenodd"
    ></path>
  </svg> -->
</template>

<script>
export default {
  props: {
    isLoading: Boolean,
  },
};
</script>

<style></style>
