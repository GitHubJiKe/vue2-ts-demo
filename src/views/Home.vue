<template>
  <div class="home">
    <h1>调查问卷</h1>
    <div v-for="step in steps" :key="step.id">
      <radio-button
        v-if="step.type === 'RadioButton' && step.visible"
        :step="step"
        :steps="steps"
      ></radio-button>
      <check-boxs
        v-if="step.type === 'CheckBox' && step.visible"
        :step="step"
        :steps="steps"
      ></check-boxs>
      <label-item
        v-if="step.type === 'Label' && step.visible"
        :step="step"
        :steps="steps"
      >
      </label-item>
    </div>
  </div>
</template>

<script lang="ts">
import CheckBoxs from "@/components/CheckBoxs.vue";
import LabelItem from "@/components/LabelItem.vue";
import RadioButton from "@/components/RadioButton.vue";
import { Component, Vue } from "vue-property-decorator";
import { steps } from "./Step";
@Component({
  components: {
    LabelItem,
    CheckBoxs,
    RadioButton
  }
})
export default class Home extends Vue {
  private steps = steps;
}
</script>
