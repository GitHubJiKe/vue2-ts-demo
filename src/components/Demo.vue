<template>
  <div>
    <button @click="changeName">change name</button>
    <button @click="remove">remove</button>
  </div>
</template>

<script lang="ts">
import { stateHandler } from "@/store/mystore";
import { Vue, Component, Inject } from "vue-property-decorator";
@Component
export default class Demo extends Vue {
  @Inject() private dd!: string;
  changeName() {
    stateHandler.set("name", Date.now() + "");
    stateHandler.operateArr("hobbys", "push", Date.now());
  }

  private mounted() {
    console.log(this.dd);
  }
  remove() {
    stateHandler.operateArr("hobbys", "unshift", "aaaa");
  }
}
</script>

<style lang="less" scoped></style>
