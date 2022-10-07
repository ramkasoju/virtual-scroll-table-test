<template>
  <virtual-scroller class="virtual-list" :items="items" item-height="42" content-tag="ul">
    <template slot-scope="props">
      <li :key="props.itemKey">{{props.item.name}}</li>
    </template>
  </virtual-scroller>
</template>

<script>
import items from "./data.json";

export default {
  data: () => ({
    items
  })
};
</script>
