/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native';
const WEBVIEW_REF = 'webView';
export default class webViewTest extends Component {

  /**
   * 加载出错时返回视图
   * @returns {XML}错误视图
   * @private
   */
  _errorView = () => {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            this.refs[WEBVIEW_REF].reload();
          }}
        >
          <Text>
            加载出错啦
          </Text>
          <Text>
            点我重新加载
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  /**
   * 加载失败 或者刷新 重新加载页面
   * @private
   */
  _reload  = () => {
    this.refs[WEBVIEW_REF].reload();
  };

  render() {
    return (
      <View style={{flex:1,padding:0,marginTop:20}}>
       <WebView
         ref={WEBVIEW_REF}
         allowsInlineMediaPlayback={true} /*是否允许视频在浏览器内播放*/
         automaticallyAdjustContentInsets={false}  /*当使用 navigator 时候顶部会多出一部分 使用这个属性*/
         bounces={false}  /*是否允许用户拉伸*/
         dataDetectorTypes='all'  /*界面可点击的链接  此处为 all 表示检测所有 具体请参考 API*/
         decelerationRate='normal'  /*webView 滚动的速度*/
         domStorageEnabled={true}  /*是否允许 DOM 缓存 只适合 Android*/
         mediaPlaybackRequiresUserAction={false}  /*视频播放是否需要用户点击  默认为 true*/
         source={{uri:'https://www.baidu.com'}}  /*webView 加载的链接*/
         onLoad={() => {
           console.log('加载成功');
         }}
         onError={() => {
           console.log('加载出错');
         }}
         onLoadEnd={() => {
           console.log('加载结束');
         }}
         onLoadStart={() => {
           console.log('开始加载');
         }}
         renderError={() => {
           return (
             <View style={styles.container}>
             <TouchableOpacity

               onPress={() => {
           this._reload()
          }}
        >
          <Text>
            加载出错啦
          </Text>
          <Text>
            点我重新加载
          </Text>
        </TouchableOpacity>
        </View>
      );
         }}
         renderLoading={() => {
           return(
             <View style={styles.container}>
             <ActivityIndicator size='large' color='black' />
             <Text> 加载中</Text>
             </View>
           )
         }}
         startInLoadingState={true}
       >

       </WebView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('webViewTest', () => webViewTest);
