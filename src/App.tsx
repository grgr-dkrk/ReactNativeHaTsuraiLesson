import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import NativeModuleYobidashi from './native-module-yobidashi'

const App = () => {
  const [ans, setAns] = useState(0)
  const [strLength, setStrLength] = useState(0)
  NativeModuleYobidashi.sum(2, 3, (result) => {
    setAns(result)
  })
  useEffect(() => {
    const fn = async () => {
      const _strLength = await NativeModuleYobidashi.getStringLength('foo')
      setStrLength(_strLength)
    }
    fn()
  }, [])

  return (
    <View style={styles.wrapper}>
      <Text style={styles.ans}>2 + 3 = {ans}</Text>
      <Text style={styles.ans}>"foo".length = {strLength}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: { marginTop: 60 },
  ans: { fontSize: 56 },
})

export default App
