<template>
  <div>
    <div v-for="c in step.conditions" :key="c.id">
      <input
        type="checkbox"
        :name="c.value"
        @input="onCheckBoxChange"
        :disabled="c.disabled"
        :checked="value.includes(c.value)"
      />{{ c.label }}
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { IStep, render } from "../views/Step";

@Component
export default class CheckBoxs extends Vue {
  @Prop({ default: () => ({} as IStep) }) private step: IStep;
  @Prop({ default: () => [] }) private steps: IStep[];

  private value: string[] = [];

  private mounted() {
    this.value = this.step.value as string[];
  }

  private onCheckBoxChange(e: any) {
    const value = e.target.name;
    const checked = e.target.checked;
    const step = this.step;
    if (Array.isArray(step.value)) {
      if (checked) {
        step.value.push(value);
      } else {
        const idx = step.value.findIndex((v) => v === value);
        if (idx > -1) {
          step.value.splice(idx, 1);
        }
      }
      this.value = step.value as string[];
    }

    render(this.steps);
  }

  private updated() {
    if (!this.step.visible) {
      this.value = [];
    }
  }
}
</script>

<style lang="less" scoped></style>
