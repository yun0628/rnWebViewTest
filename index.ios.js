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
  ActivityIndicator
} from 'react-native';

export default class webViewTest extends Component {

   render() {
    return (
      <View style={{flex:1,padding:0,marginTop:20}}>
       <WebView
         allowsInlineMediaPlayback={true} /*是否允许视频在浏览器内播放*/
         automaticallyAdjustContentInsets={false}
         bounces={false}
         dataDetectorTypes='all'
         decelerationRate='normal'
         domStorageEnabled={true}
         mediaPlaybackRequiresUserAction={false}
         source={{uri:'https://www.baidu.com'}}
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
             <Text>
             加载出错啦
             </Text>
             </View>
           );
         }}
         renderLoading={() => {
           return(
             <View>
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
