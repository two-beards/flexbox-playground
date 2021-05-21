<template>
  <section
    class="h-full flex-1 bg-gray-100 py-6 px-8 xl:p-12 overflow-y-auto leading-normal"
  >
    <h2 class="text-5xl font-black mb-2">Markup</h2>
    <p class="mb-4 text-lg leading-7">
      Below you will find the CSS and HTML required to generate the current
      layout you built.<br />
      The CSS has been optimized to omit any properties which have the default
      values.<br />
      For example, <code class="text-base text-pink-600">flex-direction: row;</code> would not be included since that is the default value for <code class="text-base text-pink-600">flex-direction</code>.
    </p>
    <div class="flex flex-wrap gap-8 mt-6 bg-white rounded-md p-4 shadow">
        <CssMarkup />
        <HtmlMarkup />
    </div>
  </section>
</template>

<script>
import HtmlMarkup from './HtmlMarkup.vue';
import CssMarkup from './CssMarkup.vue';

export default {
    name: "FlexMarkup",
    components: { HtmlMarkup, CssMarkup },
};
</script>
