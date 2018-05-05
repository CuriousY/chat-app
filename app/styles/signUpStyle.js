export default function stylesheet() {
    return ({
        container: {
            width: 'auto',
            flex: 1,
            flexDirection: 'column',
            backgroundColor: '#d1c4e9',
            alignItems: 'stretch',
            justifyContent: 'center'
        },
        txtLabel: {
            fontSize: 18,
            fontWeight: 'bold',
            color: '#263238'
        },
        txtTitleContainer: {
            marginBottom: 50
        },
        textBox: {
            height: 50,
            marginTop: 20,
            color: '#4a148c',
            fontSize: 30,
            backgroundColor: '#fff',
            width: 400,
            borderColor: 'gray',
            borderWidth: 1
        },
        tchEnter: {
            backgroundColor: '#8e24aa',
            height: 40,
            width: 200,
            alignItems: 'center',
            borderRadius: 25,
            paddingTop: 5,
            marginBottom: 20
        },
        btnEnterContainer: {
            height: 100,
            width: 200,
            marginRight: 10,
            marginLeft: 10,
            marginTop: 50,
            alignSelf: 'center'
        },
        txtEnter: {
            fontSize: 20,
            fontWeight: 'bold',
            color: '#F3E5F5'
        },
    })
};