<template>
  <div class="mt-auto p-2">
    <script async type="text/javascript" src="//cdn.carbonads.com/carbon.js?serve=CEBDT277&placement=flexboxtech" id="_carbonads_js"></script>
  </div>
</template>

<script>
export default {
  name: 'CarbonAds'
}
</script>

<style>
#carbonads {
  @apply font-sans flex max-w-xs;
}

#carbonads a {
  text-decoration: none;
}

#carbonads span {
  @apply relative block overflow-hidden;
}

#carbonads .carbon-wrap {
  @apply flex rounded shadow-md bg-gray-200 text-gray-900;
}

.carbon-img {
  display: block;
  margin: 0;
  line-height: 1;
}

.carbon-img img {
  display: block;
}

.carbon-text {
  @apply text-xs p-2 leading-normal text-left;
}

.carbon-poweredby {
  @apply block p-2 text-center leading-none font-semibold text-xs text-gray-600 bg-transparent;
}
</style>