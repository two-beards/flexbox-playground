<template>
  <section>
    <p v-if="flexItems.length === 0" class="mx-4 rounded p-4 text-sm text-blue-900 bg-blue-50 mb-4 leading-normal">Add an item in the other tab first.</p>
    <p
      v-else-if="selectedItem === null"
      class="mx-4 rounded p-4 text-sm text-blue-900 bg-blue-50 mb-4 leading-normal"
    >
      Click a flex item in the container on the right to edit its styles.
    </p>

    <div v-if="selectedItem !== null" class="px-4 pb-4">
      <p
        class="leading-normal text-left text-blue-900 mb-6 text-sm bg-blue-50 p-4 rounded"
      >
        Edit properties of the flex items here. The selected item will have a
        green border. Click the selected item again to stop editing it.
      </p>

      <form>
        <div class="mb-4">
          <label class="mb-2 lowercase text-base font-semibold block"
            >Order</label
          >
          <BaseInput
            :value="selectedItem.styles.order"
            @input="updateSelectedItem"
            name="order"
            type="number"
          />
        </div>

        <div class="mb-4">
          <label class="mb-2 lowercase text-base font-semibold block"
            >Flex-grow</label
          >
          <BaseInput
            :value="selectedItem.styles.flexGrow"
            @input="updateSelectedItem"
            name="flexGrow"
            type="number"
            min="0"
          />
        </div>

        <div class="mb-4">
          <label class="mb-2 lowercase text-base font-semibold block"
            >Flex-shrink</label
          >
          <BaseInput
            :value="selectedItem.styles.flexShrink"
            @input="updateSelectedItem"
            name="flexShrink"
            type="number"
            min="0"
          />
        </div>

        <div class="mb-4">
          <label class="mb-2 lowercase text-base font-semibold block"
            >Flex-basis</label
          >
          <BaseInput
            :value="selectedItem.styles.flexBasis"
            @input="updateSelectedItem"
            name="flexBasis"
            type="text"
          />
        </div>

        <div class="mb-4">
          <label class="mb-2 lowercase text-base font-semibold block"
            >Align-self</label
          >
          <BaseSelect
            :value="selectedItem.styles.alignSelf"
            @input="updateSelectedItem"
            name="alignSelf"
            :options="flexProperties.alignSelf"
          />
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from "vuex";
import BaseSelect from "./BaseSelect.vue";
import BaseInput from "./BaseInput.vue";

export default {
  name: "SidebarItems",
  components: {
    BaseSelect,
    BaseInput,
  },
  computed: mapState(["flexProperties", "selectedItem", "flexItems"]),
  methods: {
    ...mapActions(["setSelectedItem", "removeSelectedItem"]),
    updateSelectedItem(e) {
      let copy = { ...this.selectedItem };
      let prop = e.target.name;
      copy.styles[prop] = e.target.value;
      this.$store.dispatch("updateSelectedItem", copy);
    },
  },
};
</script>
