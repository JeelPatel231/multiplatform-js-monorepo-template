export * from "platform-core"

/**
 * we export our platform specific implementation 
 * in the shadow of Crypto in common lib for keeping consistency among platforms
 */ 
export { NodeCrypto as Crypto } from "./common"