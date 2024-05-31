import { Crypto, UUID } from "platform-core"
import crypto from "node:crypto"

/**
 * Here we use the platform specific implementation
 * and implement our interface to be able 
 * to use with common lib 
 * 
 * in node, "crypto" package implements what we need
 */
export class NodeCrypto implements Crypto {
  async genUUIDv4(): Promise<UUID> {
    return crypto.randomUUID()
  }
}