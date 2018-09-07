/**
 * @flow
 * util 一些通用方法集合类
 */

/**
 * 跳转的方法
 * @param {*} routeName 
 * @param {*} params 
 * @param {*} navigation 
 */
function navigate(routeName: string, params: Object = {}, navigation: Object = global.navigation) {
  if (navigation) {
    routeName && navigation.navigate(routeName, params);
  } else {
    console.warn('navigation对象不存在!!!');
  }
}
 
/**
 * 测试的方法
 * @param {*} a 
 * @param {*} b 
 */
function test(a: number, b: number): number {
  return a + b;
}

/**
 * 检测是否是手机号码
 * @param {*} phoneNumber 
 */
function isMobilePhone(phoneNumber: string) {
  const sjmar = /^1[3-9][0-9]{9}$/;
  if (phoneNumber && phoneNumber !== '' && sjmar.test(phoneNumber)) {
    return true;
  }
  return false;
}

export default {
  navigate,
  test,
  isMobilePhone,
};

 