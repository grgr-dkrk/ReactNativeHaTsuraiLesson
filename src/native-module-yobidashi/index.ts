import { NativeModules } from 'react-native'
const { NativeModuleYobidashi } = NativeModules
type NativeModuleYobidashiType = {
  sum: (num1: number, num2: number, callback: (result: number) => void) => void
  getStringLength: (str: string) => Promise<number>
}
export default NativeModuleYobidashi as NativeModuleYobidashiType
