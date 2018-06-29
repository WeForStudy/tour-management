export const confirm = ({
  msg,
  ok,
  unok,
}) => {
  this.$confirm(msg)
  .then(_ => {
    ok();
  })
  .catch(_ => unok());
}
export const success = message => {
  window.Vue.$message = ({
    message,
    type: 'success'
  })
}
export const warning = message => {
  window.Vue.$message = ({
    message,
    type: 'warning'
  })
}
export const error = message => {
  window.Vue.$message = ({
    message,
    type: 'error'
  })
}
export const info = message => {
  window.Vue.$message = (message)
}
