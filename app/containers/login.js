import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUser, setUser } from '../actions';
import stylesheet from '../styles/signUpStyle';


const styles = StyleSheet.create(stylesheet());

class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.addUser = this.addUser.bind(this);
    }

    componentWillReceiveProps(props) {
        console.log('new props ', props)
    }

    addUser(e) {
        let user = {
            name: 'nitesh'
        };
        this.props.setUser(user)
    }

    render() {
        console.log('render ', this.props.user);
        let name = this.props.user ? this.props.user.name : "test";
        return (
            <View style={styles.headermain}>
                <View>
                    <TextInput underlineColorAndroid='transparent' style={styles.txtName} placeholder="Enter task" />
                </View>
                <View style={styles.btnContainer}>
                    <Button onPress={this.addUser} title="login" />
                </View>
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.userReducer.user
    }
}
export default connect(mapStateToProps, { setUser })(LoginComponent)