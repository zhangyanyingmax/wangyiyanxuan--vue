import Vue from 'vue'
import VeeValidate from 'vee-validate'
import zh_CN from 'vee-validate/dist/locale/zh_CN'

Vue.use(VeeValidate)

//信息本地化：中文
VeeValidate.Validator.localize('zh_CN', {
  messages: zh_CN.messages,
  attributes: {
    phone: '手机号',
    code: '验证码'
  }
})

//自定义校验规则
VeeValidate.Validator.extend('phone', {
  validate: value => {
    return /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/.test(value)
  },
  getMessage: field => field + '必须是11位号码'
})
