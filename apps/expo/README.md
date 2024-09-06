## Instructions

1. `yarn install`
2. open [this file](node_modules/react-native/Libraries/Core/Devtools/getDevServer.js)
3. This step is required for testing. Go to line 33 and replace it with the
   following code:

```js
const match = scriptUrl?.match(
```

4. Devops should have created iOS and android apps for your firebase project.
   You will need to get the `google-services.json` for android and
   `GoogleServices-Info.plist` for iOS. After you get this files paste them in
   the root of your project.
5. Change artisan
