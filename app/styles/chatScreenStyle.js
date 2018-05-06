export default function stylesheet() {
    return ({
        bottomContainer: {
            flexDirection: 'row',
            height: 40,
            justifyContent: 'space-between',
            backgroundColor: '#F44336',
            alignSelf: 'flex-end'
        },
        bottomTextInput: {
            height: 40,
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
            height: 40,
            width: 70,
            alignSelf: 'flex-end',
            paddingBottom: 5
        },
        bottomButtonText: {
            fontSize: 20,
            fontWeight: 'bold',
            color: '#F3E5F5',
            paddingTop: 5,
            paddingLeft: 5
        }
    })
};