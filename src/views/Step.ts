type TStepType = "RadioButton" | "CheckBox" | "Label";

export interface ICondition {
  id: string;
  disabled: boolean;
  label: string;
  value: string;
}

export interface IVisibleRule {
  targetIds: string[]; // 确定要作用于哪些step
  operator: "eq" | "gt" | "lt" | "include"; // 对比操作符 = | > | <
  compareConditionId: string; // 要对比的值Id 这个值应该来源于conditions内的之一
}

export interface IStep {
  id: string;
  type: TStepType;
  conditions?: ICondition[];
  value: string | string[];
  defaultValue?: string;
  visibleRules?: IVisibleRule[];
  visible: boolean;
}

export const steps: IStep[] = [
  {
    id: "4",
    type: "Label",
    visible: true,
    value: "你喜欢吃水果吗？"
  },
  {
    id: "1",
    type: "RadioButton",
    conditions: [
      { id: "1-1", disabled: false, label: "喜欢", value: "like" },
      { id: "1-2", disabled: false, label: "不喜欢", value: "dislike" }
    ],
    value: "",
    visible: true,
    visibleRules: [
      {
        targetIds: ["2", "5"],
        operator: "eq",
        compareConditionId: "1-1"
      }
    ]
  },
  {
    id: "5",
    type: "Label",
    visible: false,
    value: "你喜欢吃什么水果？"
  },
  {
    id: "2",
    type: "CheckBox",
    visible: false,
    conditions: [
      { id: "2-1", disabled: false, label: "苹果", value: "apple" },
      { id: "2-2", disabled: true, label: "香蕉", value: "banana" },
      { id: "2-3", disabled: false, label: "橘子", value: "orange" }
    ],
    value: [],
    visibleRules: [
      {
        targetIds: ["3"],
        operator: "include",
        compareConditionId: "2-3"
      },
      {
        targetIds: ["6", "7"],
        operator: "include",
        compareConditionId: "2-1"
      }
    ]
  },
  {
    id: "3",
    type: "Label",
    visible: false,
    value: "感谢您的填写"
  },
  {
    id: "6",
    type: "Label",
    visible: false,
    value: "你还想填写？"
  },
  {
    id: "7",
    type: "RadioButton",
    visible: false,
    conditions: [
      { id: "7-1", disabled: false, label: "想", value: "want" },
      { id: "7-2", disabled: false, label: "不想", value: "nowant" }
    ],
    value: ""
  }
];
export function render(steps: IStep[]) {
  function findStepById(id: string): IStep {
    return steps.find((step) => step.id === id) as IStep;
  }

  function operateVisible(step: IStep) {
    step.visibleRules?.forEach((vr) => {
      const targets = vr.targetIds.map(findStepById);
      if (targets.length > 0) {
        const condition = step.conditions?.find(
          (c) => c.id === vr.compareConditionId
        );

        const compareVal = condition?.value;
        const choosedVal = step.value || step.defaultValue;
        targets.forEach((step) => {
          if (vr.operator === "eq") {
            step.visible = choosedVal === compareVal;
            if (step.visible === false) {
              if (typeof step.value === "string") {
                // step.value = "";
              } else {
                step.value = [];
              }
            }
          } else if (vr.operator === "include") {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            step.visible = choosedVal?.includes(compareVal!) || false;
          }
        });
      }
    });
  }

  steps.forEach(operateVisible);
}
