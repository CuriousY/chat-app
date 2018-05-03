var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "react", "react-native", "react-navigation"], function (require, exports, react_1, react_native_1, react_navigation_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    react_1 = __importDefault(react_1);
    class Main extends react_1.default.Component {
        render() {
            return (<RootStack />);
        }
    }
    exports.default = Main;
    class DetailsScreen extends react_1.default.Component {
        constructor(props) {
            super(props);
        }
        render() {
            const { params } = this.props.navigation.state;
            const name = params ? params.name : 'default';
            return (<react_native_1.View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <react_native_1.Text>Hello {name}, Welcome to Details Screen</react_native_1.Text>
        <react_native_1.Button title="Go to Details... again" onPress={() => this.props.navigation.navigate('Details', { name: 'Nitesh' })}/>
      </react_native_1.View>);
        }
    }
    DetailsScreen.navigationOptions = {
        title: 'Details',
    };
    class Home extends react_1.default.Component {
        render() {
            return (<react_native_1.View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <react_native_1.Text>Home Screen</react_native_1.Text>
        <react_native_1.Button title="Go to Details" onPress={() => this.props.navigation.navigate('Details', { name: 'Nitesh' })}/>
      </react_native_1.View>);
        }
    }
    Home.navigationOptions = {
        title: 'Home',
    };
    const RootStack = react_navigation_1.StackNavigator({
        Home: {
            screen: Home,
        },
        Details: {
            screen: DetailsScreen,
        }
    }, {
        initialRouteName: 'Home',
    });
});
