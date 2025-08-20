import { StyleSheet, View } from 'react-native'
import { Container } from "rnmodal-header"
export default function test() {
    return (
        <Container
            title="Settings"
            icon="cog-outline"
            subtitle="Manage your preferences"
            onClose={() => console.log('Close settings')}
        >
            <View></View>
        </Container>
    )
}

const styles = StyleSheet.create({})
