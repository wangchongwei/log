/**
 * @flow
 * 图标的公共样式
 */
import { StyleSheet } from 'react-native';

const iconStyles = StyleSheet.create({
  topArrow: {
    width:0,
    height:0,
    borderStyle:'solid',
    borderWidth:6,
    borderTopColor:'#fff',//下箭头颜色
    borderLeftColor:'#fff',//右箭头颜色
    borderBottomColor:'#f76260',//上箭头颜色
    borderRightColor:'#fff'//左箭头颜色
  },
});

export default iconStyles;