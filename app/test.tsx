import { Container } from "@/src"
import { StyleSheet, View } from 'react-native'
export default function test() {
    return (
        <Container
            title="Settings"
            icon="cog-outline"
            subtitle="Manage your preferences"
            onClose={() => console.log('Close settings')}
            customIcon={{
                source: require('../assets/images/react-logo.png'),
                tintColor: '#ff0000',
            }}
            actions={[{
                icon: "save-outline",
                onPress: () => console.log('Save settings'),
            },
            {
                icon: "trash",
                onPress: () => console.log('Delete settings'),
            }]}
        >
            <View className="h-[1000px]"></View>
        </Container>
    )
}

const styles = StyleSheet.create({})
