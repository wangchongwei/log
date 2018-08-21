import lodash from 'lodash';

/**
 * 
 * @param {*} data 需要分解的数据 
 * @param {*} needLengh  需要获取的长度
 */
function getRandomArray(data: Array<Object>, needLengh: number) {
  if (needLengh > data.length) {
    console.warn('要获取的随机数组长度大于指定数组长度，错误！！！')
    return
  }
  // 被筛选剩下的
  const leftArr = [];
  // 被选中的条目数组
  const selectedArr = [];
  // 最后返回的数据格式
  let newArray = {}
  // 被选中的索引
  const selectedIndexArr = [];
  // 获取needLength个随机索引
  while (selectedIndexArr.length < needLengh) {
    const randonNumber = lodash.random(data.length - 1);
    if (lodash.findIndex(selectedIndexArr, {index:randonNumber}) == -1) {
      selectedIndexArr.push({index: randonNumber})
    }
  }
  // 根据获取的索引来push数组
  data.forEach((item, index) => {
    if (lodash.findIndex(selectedIndexArr, {index}) != -1) {
      selectedArr.push(item)
    } else {
      leftArr.push(item)
    }
  })
  newArray = {
    selectedArr: selectedArr,
    leftArr: leftArr,
  }
  return newArray;
}

export default {
  getRandomArray,
}