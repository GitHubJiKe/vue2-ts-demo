<template>
  <div>
    <div v-for="c in step.conditions" :key="c.id">
      <input
        type="radio"
        :name="c.value"
        @input="onRadioChange"
        :disabled="c.disabled"
        :checked="value === c.value"
      />{{ c.label }}
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { IStep, render } from "../views/Step";

@Component
export default class RadioButton extends Vue {
  @Prop({ default: () => ({} as IStep) }) private step: IStep;
  @Prop({ default: () => [] }) private steps: IStep[];

  private value = "";

  private mounted() {
    this.value = this.step.value as string;
  }

  private onRadioChange(e: any) {
    const value = e.target.name;
    this.value = value;
    this.step.value = value;
    render(this.steps);
  }
}
</script>

<style lang="less" scoped></style>
