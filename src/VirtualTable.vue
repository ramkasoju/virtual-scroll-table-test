<template>
  <virtual-scroller :items="items" item-height="42" container-tag="table" content-tag="tbody">
    <thead slot="before-content">
      <tr>
        <td>Age</td>
        <td>Name</td>
        <td>Company</td>
      </tr>
    </thead>
    <template slot-scope="props">
      <tr :key="props.itemKey">
        <td>{{props.item.age}}</td>
        <td>{{props.item.name}}</td>
        <td>{{props.item.company}}</td>
      </tr>
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
