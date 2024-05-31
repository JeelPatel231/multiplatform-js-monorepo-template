import { UUID } from "../uuid"

export type Crypto = {
  genUUIDv4: () => Promise<UUID>
}