import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Container from '../components/Container'

export default function settings() {
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
