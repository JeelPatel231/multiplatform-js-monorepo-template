import { Crypto, UUID } from "platform-core";

/**
 * Here we use the platform specific implementation
 * and implement our interface to be able 
 * to use with common lib 
 * 
 * in browser (with secure context) window.crypto is available
 */
export class BrowserCrypto implements Crypto {
  async genUUIDv4(): Promise<UUID> {
    return window.crypto.randomUUID()
  }
}