import React, { Component } from 'react';
import { TouchableHighlight, Modal, View, Text, StyleSheet, Button, TouchableOpacity, Image, TextInput, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { setUser } from '../actions';
import { bindActionCreators } from 'redux'
import stylesheet from '../styles/signUpStyle';
import CameraRollPicker from 'react-native-camera-roll-picker';
import { Permissions } from 'expo';

const styles = StyleSheet.create(stylesheet());

class ImageUploadScreen extends Component {
    static navigationOptions = {
        title: 'Select Profile Image',
    };
    componentWillMount() {
    }
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
            console.log('camera')
        }).catch((error) => {
            alert('camera permission required !!!');
            this.props.navigation.navigate('ImageUpload');
        });;
    }

    getSelectedImage(image) {
        this.setState({ image: image });
    }
    saveProfileImage() {
        let image = this.state.image;
        let imagePath = this.state.image[0].uri;
        const url = 'http://192.168.1.208:3000/postImage';
        let body = new FormData();

        body.append('profilepic', {
            uri: imagePath,
            name: `photo.jpg`,
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
            .then(function (response) {
                if (response.status == 200) {
                    alert('Image upload successful !!!');
                }
                else {
                    console.log('fail ');
                    alert('Image upload successful !!!');
                }
            }).catch((err) => {
                alert('Image upload successful !!!');
                console.log('err ', err);
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



export default ImageUploadScreen;