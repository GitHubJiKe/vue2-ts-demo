<template>
  <div>
    <h1>About Page</h1>
    <label>{{ name }}</label>
    <ul>
      <li v-for="(i, idx) in hobbys" :key="idx">{{ i }}</li>
    </ul>
    <demo />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import mystore from "@/store/mystore";
import Demo from "@/components/Demo.vue";
import { Provide } from "vue-property-decorator";
@Component({
  data: mystore,
  components: {
    Demo
  }
})
export default class About extends Vue {
  @Provide() private dd = "DD";

  beforeRouteEnter(to: unknown) {
    console.log(11111, to);
  }
}
</script>
