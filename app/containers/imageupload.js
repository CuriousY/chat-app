import React, { Component } from 'react';
import { TouchableHighlight, Modal, View, Text, StyleSheet, Button, TouchableOpacity, Image, TextInput, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import stylesheet from '../styles/signUpStyle';
import CameraRollPicker from 'react-native-camera-roll-picker';
import { Permissions } from 'expo';
import { SERVER_URL } from '../config'

const styles = StyleSheet.create(stylesheet());

class ImageUploadScreen extends Component {
    static navigationOptions = {
        title: 'Select Profile Image',
    };
    constructor(props) {
        super(props);
        this.state = {
            image: {}
        }
        this.getSelectedImage = this.getSelectedImage.bind(this);
        this.saveProfileImage = this.saveProfileImage.bind(this);
    }
    state = {
        modalVisible: false,
    };

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    componentWillMount() {
        Permissions.askAsync(Permissions.CAMERA_ROLL).then(({ status }) => {
        }).catch((error) => {
            alert('camera permission required !!!');
            this.props.navigation.navigate('ImageUpload');
        });

    }


    getSelectedImage(image) {
        this.setState({ image: image });
    }
    saveProfileImage() {
        let image = this.state.image;
        let imagePath = this.state.image[0].uri;
        const url = SERVER_URL + '/userSignUp';
        let body = new FormData();
        let navigation = this.props.navigation;
        let customImageName = this.props.userData.user.mobile + '.jpg';

        let user = {
            username: this.props.userData.user.username,
            mobile: this.props.userData.user.mobile
        }


        body.append('user', JSON.stringify(user));

        body.append('profilepic', {
            uri: imagePath,
            name: customImageName,
            type: `image/jpg`
        });

        let fetchData = {
            method: 'POST',
            body: body,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        fetch(url, fetchData)
            .then((response) => {
                if (response.status == 200) {
                    initiateSignUp();
                    navigation.navigate('Home');
                }
                else {
                    console.log('fail ', response.status);
                    alert('Image upload failed !!!');
                }
            }).catch((err) => {
                console.log('err ', err);
                alert('Image upload failed !!!');
            });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ height: 400 }}>
                    <CameraRollPicker selectSingleItem
                        callback={this.getSelectedImage} />
                </View>
                <View style={styles.btnEnterContainer}>
                    <TouchableOpacity style={styles.tchEnter} onPress={this.saveProfileImage}>
                        <Text style={styles.txtEnter}>Continue</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}



initiateSignUp = async () => {
    await AsyncStorage.setItem('signUpCompleteFlag', 'true');
};



function mapStateToProps(state) {
    return {
        userData: state.userReducer
    }
}


export default connect(mapStateToProps, {})(ImageUploadScreen);