import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUser, setUser } from '../actions'


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

const styles = StyleSheet.create({
    headermain: {
        backgroundColor: '#F3E5F5',
        height: 100,
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    txtName: {
        height: 40,
        color: '#4a148c',
        fontSize: 20,
        backgroundColor: '#fff',
        width: 260,
        padding: 5,
        marginLeft: 5,
        borderColor: 'gray',
        borderWidth: 1
    },
    buttonEnter: {
    },
    btnContainer: {
        width: 80,
        marginRight: 5
    }
});


export default connect(mapStateToProps, { setUser })(LoginComponent)