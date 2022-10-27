import { Message } from 'iview'

export default {
  hint(msg) { // 提示
    Message.info(msg);
  },
  succ(msg) { // 成功
    Message.success(msg)
  },
  warn(msg) { // 警告
    Message.warning(msg)
  },
  erro(msg) { // 错误
    Message.error({
      content: msg,
      duration: 10,
      closable: true
  })
  }
}
