import React, {Component} from 'react';
import { StyleSheet, Text, View, StatusBar, Button, btnChecked} from 'react-native';
import Header from './components/common/Header';
import Footer from './components/common/Footer'

//const obj = {greeting: "hi"};
export default class App  extends Component {
  constructor(props){
    super(props);

    this.state = {
      logo: "naver",
      btnChecked: true
    };
  }

  changeTitle = () => {
    this.setState({
       logo: "JY",
       btnChecked: false
    })
  };

  render() {
    return ( // 반환 할 값 / 하나의 태그만 가능 함
      <View>
        <Header />
        <Footer />
        <Text>{this.state.logo}</Text>
        <Button title="button" onPress={this.changeTitle} />
        {
          this.state.btnChecked
          ? <Button title="button1" onPress={this.changeTitle} />
          :<Text>No</Text>
        }
      </View>
    )
  };
}
