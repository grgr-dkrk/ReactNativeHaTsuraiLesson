# ReactNativeHaTsuraiLesson

## 目標
`src/native-module-yobidashi/` から `sum` と `getStringLength` を持った NativeModule を呼び出せるようにする。  
型は以下の通り

```typescript
type NativeModuleYobidashiType = {
  sum: (num1: number, num2: number, callback: (result: number) => void) => void
  getStringLength: (str: string) => Promise<number>
}
```

iOS, Android でそれぞれ Native Module を実装し、`yarn ios` と `yarn andorid` で起動できれば OK です

## Clone & Install
```shell
git clone git@github.com:grgr-dkrk/ReactNativeHaTsuraiLesson.git
# ghq
ghq get git@github.com:grgr-dkrk/ReactNativeHaTsuraiLesson.git
```

```shell
# In ReactNativeHaTsuraiLesson/
yarn
npx pod-install
yarn ios
yarn android
```

## 資料
[仮](https://hackmd.io/@grgrdkrk/HJL_dpwWY)
