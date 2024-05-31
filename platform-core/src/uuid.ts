import { Crypto } from "./common/crypto";

export type UUID = `${string}-${string}-${string}-${string}-${string}`

/**
 * This higher level module needs a crypto implementation.
 * 
 * Cryptography can be CPU heavy hence we don't want to just
 * use some algorithms written in js and download from npm.
 * 
 * Platform specific implementation is better and also fast 
 * if they are implemented in native code.
 * 
 * We provide a crypto abstraction that will be replaced with
 * platform specific implementation
 */
export class UUIDGenerator {
  constructor(private readonly crypto: Crypto) {}

  async v4(): Promise<UUID> {
    return await this.crypto.genUUIDv4()
  }
}