export default [
  {
    component: "SOFT_GROUP_BEGIN",
    label: "其他配置"
  },
  {
    field: "other.autoMaegeCfg",
    label: "配置文件合并",
    bottomHelpMessage: "检测到默认配置文件更新自动合并用户配置文件",
    component: "Switch"
  },
  {
    field: "other.renderScale",
    label: "渲染精度",
    component: "InputNumber",
    componentProps: { min: 50, max: 200 },
    bottomHelpMessage: "数字越大渲染精度越高，但会占用更多资源 50 - 200"
  },
  {
    field: "other.recallMsgPer.bot",
    label: "撤回bot消息权限",
    bottomHelpMessage: "#撤回命令",
    component: "RadioGroup",
    required: true,
    componentProps: {
      options: [
        { label: "所有人", value: "all" },
        { label: "管理", value: "admin" },
        { label: "群主", value: "owner" },
        { label: "主人", value: "master" }
      ]
    }
  },
  {
    field: "other.recallMsgPer.member",
    label: "撤回群员消息权限",
    bottomHelpMessage: "#撤回命令",
    component: "RadioGroup",
    required: true,
    componentProps: {
      options: [
        { label: "所有人", value: "all" },
        { label: "管理", value: "admin" },
        { label: "群主", value: "owner" },
        { label: "主人", value: "master" }
      ]
    }
  }
]
