import { BigInt } from "@graphprotocol/graph-ts"

import { Station, User } from "../generated/schema"
import {
  CreateDaoErc20 as CreateDaoErc20Event,
  CreateDaoErc721 as CreateDaoErc721Event,
  NewUser as NewUserEvent,
} from "../generated/StnxEmitter/StnxEmitter"

export function handleNewUser(event: NewUserEvent): void {
  let id =
    event.params._depositor.toHex() + "-" + event.params._daoAddress.toHex()
  let user = User.load(id)

  if (!user) {
    // Create a new user entity if none exists
    let user = new User(id)
    user.daoAddress = event.params._daoAddress
    user.userAddress = event.params._depositor
    user.tokenAddress = event.params._depositTokenAddress
    user.depositAmount = event.params._depositTokenAmount
    user.timeStamp = event.params._timeStamp
    user.gtAmount = event.params._gtToken
    user.daoName = fetchStationName(event.params._daoAddress.toHex())
    user.save()
  } else {
    // Update the depositAmount field for the existing user entity
    user.depositAmount = user.depositAmount.plus(
      event.params._depositTokenAmount
    )
    user.gtAmount = user.gtAmount.plus(event.params._gtToken)
    user.daoName = fetchStationName(event.params._daoAddress.toHex())
    user.save()
  }
}

export function handleCreateDaoErc20(event: CreateDaoErc20Event): void {
  let station = new Station(event.params.proxy.toHex())
  station.daoAddress = event.params.proxy
  station.ownerAddress = event.params.deployerAddress
  station.name = event.params.name
  station.symbol = event.params.symbol
  station.imageUrl = ""
  station.tokenType = "erc20"
  station.isGtTransferable = event.params.isTransferable
  station.isGovernanceActive = event.params.isGovernanceActive
  station.save()
}

export function handleCreateDaoErc721(event: CreateDaoErc721Event): void {
  let station = new Station(event.params.proxy.toHex())
  station.daoAddress = event.params.proxy
  station.ownerAddress = event.params.deployerAddress
  station.name = event.params.name
  station.symbol = event.params.symbol
  station.imageUrl = event.params.tokenURI
  station.tokenType = "erc721"
  station.isGtTransferable = event.params.isTransferable
  station.isGovernanceActive = event.params.isGovernanceActive
  station.save()
}

function fetchStationName(daoAddress: string): string {
  const station = Station.load(daoAddress)
  return station ? station.name : ""
}
