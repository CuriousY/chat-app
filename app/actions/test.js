import React from 'react';
import {
    StackNavigator,
    SwitchNavigator,
    addNavigationHelpers
} from 'react-navigation';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import {
    createReduxBoundAddListener,
    createReactNavigationReduxMiddleware
} from 'react-navigation-redux-helpers';
import { Provider, connect } from 'react-redux';

import Home from './app/screens/Home';

const LoginStack = StackNavigator({
    Login: {
        screen: Home
    },
    Register: {
        screen: Home
    }
});

const AppStack = StackNavigator({
    Login: {
        screen: Home
    },
    Register: {
        screen: Home
    }
});

const AppNavigator = SwitchNavigator({
    // Home: {
    //   screen: Home
    // },
    AuthStack: {
        screen: LoginStack
    },
    AppStack: {
        screen: AppStack
    }
});

const initialState = AppNavigator.router.getStateForAction(
    AppNavigator.router.getActionForPathAndParams('AuthStack')
    // AppNavigator.router.getActionForPathAndParams('Home')
);

const navReducer = (state = initialState, action) => {
    const nextState = AppNavigator.router.getStateForAction(action, state);
    return nextState || state;
};

const appReducer = combineReducers({
    nav: navReducer
});

const middleware = createReactNavigationReduxMiddleware(
    'root',
    state => state.nav
);

const addListener = createReduxBoundAddListener('root');

class App extends React.Component {
    render() {
        return (
            <AppNavigator
                navigation={addNavigationHelpers({
                    dispatch: this.props.dispatch,
                    state: this.props.nav,
                    addListener
                })}
            />
        );
    }
}

const mapStateToProps = state => ({
    nav: state.nav
});

const AppWithNavigationState = connect(mapStateToProps)(App);

const store = createStore(appReducer, applyMiddleware(middleware));

class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppWithNavigationState />
            </Provider>
        );
    }
}

export default Root;
