import React from 'react'
import { StyleSheet, View } from 'react-native'
import Container from '../src/components/Container'

export default function settings() {
  return (
    <Container
      title="Settings"
      icon="cog-outline"
      subtitle="Manage your preferences"
      onClose={() => console.log('Close settings')}
      onBack={() => console.log('Go back')}
    >
      <View></View>
    </Container>
  )
}

const styles = StyleSheet.create({})
