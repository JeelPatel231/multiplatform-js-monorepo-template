// for browser, need to explicitly use named exports, else they wont be bundled
export { UUIDGenerator, UUID } from "platform-core"

/**
 * we export our platform specific implementation 
 * in the shadow of Crypto in common lib for keeping consistency among platforms
 */ 
export { BrowserCrypto as Crypto } from "./common"
