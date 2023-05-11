import { crypto, ByteArray, BigInt, Bytes } from "@graphprotocol/graph-ts"

export function pseudoRandomNumber(seed: BigInt, blockNumber: BigInt): BigInt {
  // Generate a deterministic hash based on the seed and block number
  let input = seed.toString() + blockNumber.toString()
  let hash = crypto.keccak256(ByteArray.fromUTF8(input))

  // Convert the first 4 bytes of the hash to a BigInt
  let randomNumber = BigInt.fromSignedBytes(
    Bytes.fromUint8Array(hash.subarray(0, 4))
  )

  // Ensure the random number is positive
  randomNumber = randomNumber.abs()

  // Scale the random number to the desired range and shift by the minimum value
  let min = BigInt.fromI32(0)
  let max = BigInt.fromI32(6)
  let range = max.minus(min).plus(BigInt.fromI32(1))

  let result = randomNumber.mod(range).plus(min)

  return result
}
