export default function stylesheet() {
    return ({
        scrollView: {
            flex: 1,
            justifyContent: 'space-between'
        },
        cn1: {
            flex:1
        },
        container: {
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
            backgroundColor: 'blue'
        },
        bottomContainer: {
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'space-between',
            backgroundColor: '#F44336',
            alignSelf: 'flex-end',
            marginBottom: 5
        },
        bottomTextInput: {
            height: 60,
            color: '#4a148c',
            fontSize: 15,
            backgroundColor: '#fff',
            width: 300,
            paddingLeft: 10,
            alignSelf: 'flex-start',
            borderColor: 'gray',
            borderWidth: 1
        },
        bottomTouchable: {
            backgroundColor: '#8e24aa',
            height: 60,            
            paddingTop:15,
            width: 70,
            alignSelf: 'flex-end',
            paddingBottom: 5
        },
        bottomButtonText: {
            fontSize: 20,
            fontWeight: 'bold',
            color: '#F3E5F5',
            paddingLeft: 5
        }
    })
};