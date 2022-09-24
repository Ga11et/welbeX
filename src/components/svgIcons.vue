<template>
  <svg v-if="type === 'search'" width="29" height="29" viewBox="0 0 29 29" fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd"
      d="M19.1557 20.01C17.1221 21.843 14.4299 22.9583 11.4792 22.9583C5.14388 22.9583 0 17.8145 0 11.4792C0 5.14388 5.14388 0 11.4792 0C17.8145 0 22.9583 5.14388 22.9583 11.4792C22.9583 14.4299 21.843 17.1221 20.01 19.1557L29 28.1457L28.1457 29L19.1557 20.01V20.01ZM11.4792 1.20833C17.1475 1.20833 21.75 5.81088 21.75 11.4792C21.75 17.1475 17.1475 21.75 11.4792 21.75C5.81088 21.75 1.20833 17.1475 1.20833 11.4792C1.20833 5.81088 5.81088 1.20833 11.4792 1.20833V1.20833Z"
      fill="#6D6D6D" />
  </svg>
  <svg v-else-if="type === 'dropdown'" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <polyline points="4,8 12,16 20,8" stroke="inherit" fill="transparent" stroke-width="2px" />
  </svg>
  <svg v-else-if="type === 'loading'" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
    width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" style="align-self: flex-start;">
    <path d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50" fill="#84ab2e" stroke="none">
      <animateTransform attributeName="transform" type="rotate" dur="1.3157894736842106s" repeatCount="indefinite"
        keyTimes="0;1" values="0 50 50;-360 50 50"></animateTransform>
    </path>
  </svg>
</template>
<script>
export default {
  name: 'svg-icons',
  props: ['type']
}
</script>
