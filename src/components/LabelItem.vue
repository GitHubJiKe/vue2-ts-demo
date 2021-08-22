<template>
  <h3>{{ step.value || step.defaultValue }}</h3>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { IStep } from "../views/Step";
@Component
export default class LabelItem extends Vue {
  @Prop({ default: () => ({} as IStep) }) private step: IStep;
  @Prop({ default: () => [] }) private steps: IStep[];
}
</script>

<style lang="less" scoped></style>
