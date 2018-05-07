
<View style={styles.container}>
    <StatusBar barStyle="light-content" />
    <View style={styles.header}>
        <Text style={styles.description}>
            This demo shows how to avoid covering important UI elements with the software keyboard.
            Focus the email input below and notice that the Sign Up button and the text adjusted
            positions to make sure they are not hidden under the keyboard.
          </Text>
    </View>
    <KeyboardAvoidingView behavior="padding" style={styles.form}>
        <TextInput
            style={styles.input}
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            ref={ref => { this._emailInput = ref }}
            placeholder="email@example.com"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            returnKeyType="send"
            onSubmitEditing={this._submit}
            blurOnSubmit={true}
        />
        <View>
            <Button title="Sign Up" onPress={this._submit} />
            <Text style={styles.legal}>
                Some important legal fine print here
            </Text>
        </View>
    </KeyboardAvoidingView>
</View>