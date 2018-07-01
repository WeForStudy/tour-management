export const filterAdminTypes = val => {
  const arr = Object.keys(AdminTypes)
  let key = ''
  arr.some(item => {
    if (AdminTypes[item].value === val) {
      key = AdminTypes[item].key
    }
  })
  return key
}

export const filterPassword = (val, char = '*') => {
  const arr = val.split('')
  const len = arr.length
  const dis = len -4
  let str = ''
  for(let i = 0; i < dis; i++) str += char
  arr.splice(2, dis, str)
  val = arr.join('')
  return val
}

export const filterMoney = (val, char = '¥') => {
  const value =  val === null ? 0 : val
  return value + `.00${char}`
}
export const filterCarNo = (val) => {
  if (val) return val
  else return '未实名'
}
