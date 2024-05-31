import { UUIDGenerator, Crypto } from "./index"

const a = new UUIDGenerator(new Crypto())
a.v4().then(x => console.log(x))