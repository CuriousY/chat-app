import  React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator} from 'react-navigation';

export default class Main extends React.Component {
  render() {
    return (
      <RootStack />
    )
  }
}

class DetailsScreen extends React.Component {
  constructor(props){
    super(props);
  }
  static navigationOptions = {
    title: 'Details',
  };

  render() {

    const {params} = this.props.navigation.state;
    const name = params ? params.name : 'default';
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Hello {name}, Welcome to Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.navigate('Details', { name: 'Nitesh' })} />
      </View >
    )
  }
}

class Home extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };  
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details', { name: 'Nitesh' })}
        />
      </View>
    )
  }
}

const RootStack = StackNavigator({
  Home: {
    screen: Home,
  },
  Details: {
    screen: DetailsScreen,
  }
},
  {
    initialRouteName: 'Home',
  }
);
