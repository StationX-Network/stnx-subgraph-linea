import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  AirDropToken,
  ChangeMerkleRoot,
  CloseDeposit,
  CreateDaoErc20,
  CreateDaoErc721,
  DefineContracts,
  Deposited,
  FactoryCreated,
  Initialized,
  MintGTToAddress,
  MintNft,
  NewUser,
  RemoveWhitelistAddress,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  SendCustomToken,
  StartDeposit,
  UpdateDistributionAmount,
  UpdateGovernanceSettings,
  UpdateMaxTokensPerUser,
  UpdateMinMaxDeposit,
  UpdateNftTransferability,
  UpdateOwnerFee,
  UpdatePricePerToken,
  UpdateTotalSupplyOfToken,
  WhitelistAddress
} from "../generated/StnxEmitter/StnxEmitter"

export function createAirDropTokenEvent(
  _daoAddress: Address,
  _token: Address,
  _amount: BigInt,
  _ownersAirdropFees: BigInt
): AirDropToken {
  let airDropTokenEvent = changetype<AirDropToken>(newMockEvent())

  airDropTokenEvent.parameters = new Array()

  airDropTokenEvent.parameters.push(
    new ethereum.EventParam(
      "_daoAddress",
      ethereum.Value.fromAddress(_daoAddress)
    )
  )
  airDropTokenEvent.parameters.push(
    new ethereum.EventParam("_token", ethereum.Value.fromAddress(_token))
  )
  airDropTokenEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )
  airDropTokenEvent.parameters.push(
    new ethereum.EventParam(
      "_ownersAirdropFees",
      ethereum.Value.fromUnsignedBigInt(_ownersAirdropFees)
    )
  )

  return airDropTokenEvent
}

export function createChangeMerkleRootEvent(
  factory: Address,
  daoAddress: Address,
  newMerkleRoot: Bytes
): ChangeMerkleRoot {
  let changeMerkleRootEvent = changetype<ChangeMerkleRoot>(newMockEvent())

  changeMerkleRootEvent.parameters = new Array()

  changeMerkleRootEvent.parameters.push(
    new ethereum.EventParam("factory", ethereum.Value.fromAddress(factory))
  )
  changeMerkleRootEvent.parameters.push(
    new ethereum.EventParam(
      "daoAddress",
      ethereum.Value.fromAddress(daoAddress)
    )
  )
  changeMerkleRootEvent.parameters.push(
    new ethereum.EventParam(
      "newMerkleRoot",
      ethereum.Value.fromFixedBytes(newMerkleRoot)
    )
  )

  return changeMerkleRootEvent
}

export function createCloseDepositEvent(
  _proxy: Address,
  closeTime: BigInt
): CloseDeposit {
  let closeDepositEvent = changetype<CloseDeposit>(newMockEvent())

  closeDepositEvent.parameters = new Array()

  closeDepositEvent.parameters.push(
    new ethereum.EventParam("_proxy", ethereum.Value.fromAddress(_proxy))
  )
  closeDepositEvent.parameters.push(
    new ethereum.EventParam(
      "closeTime",
      ethereum.Value.fromUnsignedBigInt(closeTime)
    )
  )

  return closeDepositEvent
}

export function createCreateDaoErc20Event(
  deployerAddress: Address,
  proxy: Address,
  name: string,
  symbol: string,
  distributionAmount: BigInt,
  pricePerToken: BigInt,
  minDeposit: BigInt,
  maxDeposit: BigInt,
  ownerFee: BigInt,
  _days: BigInt,
  quorum: BigInt,
  threshold: BigInt,
  depositTokenAddress: Address,
  emitter: Address,
  gnosisAddress: Address,
  _isGovernanceActive: boolean,
  isTransferable: boolean,
  assetsStoredOnGnosis: boolean
): CreateDaoErc20 {
  let createDaoErc20Event = changetype<CreateDaoErc20>(newMockEvent())

  createDaoErc20Event.parameters = new Array()

  createDaoErc20Event.parameters.push(
    new ethereum.EventParam(
      "deployerAddress",
      ethereum.Value.fromAddress(deployerAddress)
    )
  )
  createDaoErc20Event.parameters.push(
    new ethereum.EventParam("proxy", ethereum.Value.fromAddress(proxy))
  )
  createDaoErc20Event.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  createDaoErc20Event.parameters.push(
    new ethereum.EventParam("symbol", ethereum.Value.fromString(symbol))
  )
  createDaoErc20Event.parameters.push(
    new ethereum.EventParam(
      "distributionAmount",
      ethereum.Value.fromUnsignedBigInt(distributionAmount)
    )
  )
  createDaoErc20Event.parameters.push(
    new ethereum.EventParam(
      "pricePerToken",
      ethereum.Value.fromUnsignedBigInt(pricePerToken)
    )
  )
  createDaoErc20Event.parameters.push(
    new ethereum.EventParam(
      "minDeposit",
      ethereum.Value.fromUnsignedBigInt(minDeposit)
    )
  )
  createDaoErc20Event.parameters.push(
    new ethereum.EventParam(
      "maxDeposit",
      ethereum.Value.fromUnsignedBigInt(maxDeposit)
    )
  )
  createDaoErc20Event.parameters.push(
    new ethereum.EventParam(
      "ownerFee",
      ethereum.Value.fromUnsignedBigInt(ownerFee)
    )
  )
  createDaoErc20Event.parameters.push(
    new ethereum.EventParam("_days", ethereum.Value.fromUnsignedBigInt(_days))
  )
  createDaoErc20Event.parameters.push(
    new ethereum.EventParam("quorum", ethereum.Value.fromUnsignedBigInt(quorum))
  )
  createDaoErc20Event.parameters.push(
    new ethereum.EventParam(
      "threshold",
      ethereum.Value.fromUnsignedBigInt(threshold)
    )
  )
  createDaoErc20Event.parameters.push(
    new ethereum.EventParam(
      "depositTokenAddress",
      ethereum.Value.fromAddress(depositTokenAddress)
    )
  )
  createDaoErc20Event.parameters.push(
    new ethereum.EventParam("emitter", ethereum.Value.fromAddress(emitter))
  )
  createDaoErc20Event.parameters.push(
    new ethereum.EventParam(
      "gnosisAddress",
      ethereum.Value.fromAddress(gnosisAddress)
    )
  )
  createDaoErc20Event.parameters.push(
    new ethereum.EventParam(
      "_isGovernanceActive",
      ethereum.Value.fromBoolean(_isGovernanceActive)
    )
  )
  createDaoErc20Event.parameters.push(
    new ethereum.EventParam(
      "isTransferable",
      ethereum.Value.fromBoolean(isTransferable)
    )
  )
  createDaoErc20Event.parameters.push(
    new ethereum.EventParam(
      "assetsStoredOnGnosis",
      ethereum.Value.fromBoolean(assetsStoredOnGnosis)
    )
  )

  return createDaoErc20Event
}

export function createCreateDaoErc721Event(
  deployerAddress: Address,
  proxy: Address,
  name: string,
  symbol: string,
  pricePerToken: BigInt,
  distributionAmount: BigInt,
  maxTokensPerUser: BigInt,
  ownerFee: BigInt,
  _days: BigInt,
  quorum: BigInt,
  threshold: BigInt,
  depositTokenAddress: Address,
  emitter: Address,
  gnosisAddress: Address,
  assetsStoredOnGnosis: boolean
): CreateDaoErc721 {
  let createDaoErc721Event = changetype<CreateDaoErc721>(newMockEvent())

  createDaoErc721Event.parameters = new Array()

  createDaoErc721Event.parameters.push(
    new ethereum.EventParam(
      "deployerAddress",
      ethereum.Value.fromAddress(deployerAddress)
    )
  )
  createDaoErc721Event.parameters.push(
    new ethereum.EventParam("proxy", ethereum.Value.fromAddress(proxy))
  )
  createDaoErc721Event.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  createDaoErc721Event.parameters.push(
    new ethereum.EventParam("symbol", ethereum.Value.fromString(symbol))
  )
  createDaoErc721Event.parameters.push(
    new ethereum.EventParam(
      "pricePerToken",
      ethereum.Value.fromUnsignedBigInt(pricePerToken)
    )
  )
  createDaoErc721Event.parameters.push(
    new ethereum.EventParam(
      "distributionAmount",
      ethereum.Value.fromUnsignedBigInt(distributionAmount)
    )
  )
  createDaoErc721Event.parameters.push(
    new ethereum.EventParam(
      "maxTokensPerUser",
      ethereum.Value.fromUnsignedBigInt(maxTokensPerUser)
    )
  )
  createDaoErc721Event.parameters.push(
    new ethereum.EventParam(
      "ownerFee",
      ethereum.Value.fromUnsignedBigInt(ownerFee)
    )
  )
  createDaoErc721Event.parameters.push(
    new ethereum.EventParam("_days", ethereum.Value.fromUnsignedBigInt(_days))
  )
  createDaoErc721Event.parameters.push(
    new ethereum.EventParam("quorum", ethereum.Value.fromUnsignedBigInt(quorum))
  )
  createDaoErc721Event.parameters.push(
    new ethereum.EventParam(
      "threshold",
      ethereum.Value.fromUnsignedBigInt(threshold)
    )
  )
  createDaoErc721Event.parameters.push(
    new ethereum.EventParam(
      "depositTokenAddress",
      ethereum.Value.fromAddress(depositTokenAddress)
    )
  )
  createDaoErc721Event.parameters.push(
    new ethereum.EventParam("emitter", ethereum.Value.fromAddress(emitter))
  )
  createDaoErc721Event.parameters.push(
    new ethereum.EventParam(
      "gnosisAddress",
      ethereum.Value.fromAddress(gnosisAddress)
    )
  )
  createDaoErc721Event.parameters.push(
    new ethereum.EventParam(
      "assetsStoredOnGnosis",
      ethereum.Value.fromBoolean(assetsStoredOnGnosis)
    )
  )

  return createDaoErc721Event
}

export function createDefineContractsEvent(
  factory: Address,
  ERC20ImplementationAddress: Address,
  ERC721ImplementationAddress: Address,
  emitterImplementationAddress: Address
): DefineContracts {
  let defineContractsEvent = changetype<DefineContracts>(newMockEvent())

  defineContractsEvent.parameters = new Array()

  defineContractsEvent.parameters.push(
    new ethereum.EventParam("factory", ethereum.Value.fromAddress(factory))
  )
  defineContractsEvent.parameters.push(
    new ethereum.EventParam(
      "ERC20ImplementationAddress",
      ethereum.Value.fromAddress(ERC20ImplementationAddress)
    )
  )
  defineContractsEvent.parameters.push(
    new ethereum.EventParam(
      "ERC721ImplementationAddress",
      ethereum.Value.fromAddress(ERC721ImplementationAddress)
    )
  )
  defineContractsEvent.parameters.push(
    new ethereum.EventParam(
      "emitterImplementationAddress",
      ethereum.Value.fromAddress(emitterImplementationAddress)
    )
  )

  return defineContractsEvent
}

export function createDepositedEvent(
  _daoAddress: Address,
  _depositor: Address,
  _depositTokenAddress: Address,
  _amount: BigInt,
  _timeStamp: BigInt,
  _ownerFee: BigInt,
  _adminShare: BigInt
): Deposited {
  let depositedEvent = changetype<Deposited>(newMockEvent())

  depositedEvent.parameters = new Array()

  depositedEvent.parameters.push(
    new ethereum.EventParam(
      "_daoAddress",
      ethereum.Value.fromAddress(_daoAddress)
    )
  )
  depositedEvent.parameters.push(
    new ethereum.EventParam(
      "_depositor",
      ethereum.Value.fromAddress(_depositor)
    )
  )
  depositedEvent.parameters.push(
    new ethereum.EventParam(
      "_depositTokenAddress",
      ethereum.Value.fromAddress(_depositTokenAddress)
    )
  )
  depositedEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )
  depositedEvent.parameters.push(
    new ethereum.EventParam(
      "_timeStamp",
      ethereum.Value.fromUnsignedBigInt(_timeStamp)
    )
  )
  depositedEvent.parameters.push(
    new ethereum.EventParam(
      "_ownerFee",
      ethereum.Value.fromUnsignedBigInt(_ownerFee)
    )
  )
  depositedEvent.parameters.push(
    new ethereum.EventParam(
      "_adminShare",
      ethereum.Value.fromUnsignedBigInt(_adminShare)
    )
  )

  return depositedEvent
}

export function createFactoryCreatedEvent(
  _ERC20Implementation: Address,
  _ERC721Implementation: Address,
  _wrappedTokenAddress: Address,
  _factory: Address,
  _emitter: Address
): FactoryCreated {
  let factoryCreatedEvent = changetype<FactoryCreated>(newMockEvent())

  factoryCreatedEvent.parameters = new Array()

  factoryCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "_ERC20Implementation",
      ethereum.Value.fromAddress(_ERC20Implementation)
    )
  )
  factoryCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "_ERC721Implementation",
      ethereum.Value.fromAddress(_ERC721Implementation)
    )
  )
  factoryCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "_wrappedTokenAddress",
      ethereum.Value.fromAddress(_wrappedTokenAddress)
    )
  )
  factoryCreatedEvent.parameters.push(
    new ethereum.EventParam("_factory", ethereum.Value.fromAddress(_factory))
  )
  factoryCreatedEvent.parameters.push(
    new ethereum.EventParam("_emitter", ethereum.Value.fromAddress(_emitter))
  )

  return factoryCreatedEvent
}

export function createInitializedEvent(version: i32): Initialized {
  let initializedEvent = changetype<Initialized>(newMockEvent())

  initializedEvent.parameters = new Array()

  initializedEvent.parameters.push(
    new ethereum.EventParam(
      "version",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(version))
    )
  )

  return initializedEvent
}

export function createMintGTToAddressEvent(
  _daoAddress: Address,
  _amount: Array<BigInt>,
  _userAddress: Array<Address>
): MintGTToAddress {
  let mintGtToAddressEvent = changetype<MintGTToAddress>(newMockEvent())

  mintGtToAddressEvent.parameters = new Array()

  mintGtToAddressEvent.parameters.push(
    new ethereum.EventParam(
      "_daoAddress",
      ethereum.Value.fromAddress(_daoAddress)
    )
  )
  mintGtToAddressEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigIntArray(_amount)
    )
  )
  mintGtToAddressEvent.parameters.push(
    new ethereum.EventParam(
      "_userAddress",
      ethereum.Value.fromAddressArray(_userAddress)
    )
  )

  return mintGtToAddressEvent
}

export function createMintNftEvent(
  _to: Address,
  _daoAddress: Address,
  _tokenURI: string,
  _tokenId: BigInt
): MintNft {
  let mintNftEvent = changetype<MintNft>(newMockEvent())

  mintNftEvent.parameters = new Array()

  mintNftEvent.parameters.push(
    new ethereum.EventParam("_to", ethereum.Value.fromAddress(_to))
  )
  mintNftEvent.parameters.push(
    new ethereum.EventParam(
      "_daoAddress",
      ethereum.Value.fromAddress(_daoAddress)
    )
  )
  mintNftEvent.parameters.push(
    new ethereum.EventParam("_tokenURI", ethereum.Value.fromString(_tokenURI))
  )
  mintNftEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenId",
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    )
  )

  return mintNftEvent
}

export function createNewUserEvent(
  _daoAddress: Address,
  _depositor: Address,
  _depositTokenAddress: Address,
  _depositTokenAmount: BigInt,
  _timeStamp: BigInt,
  _gtToken: BigInt,
  _isAdmin: boolean
): NewUser {
  let newUserEvent = changetype<NewUser>(newMockEvent())

  newUserEvent.parameters = new Array()

  newUserEvent.parameters.push(
    new ethereum.EventParam(
      "_daoAddress",
      ethereum.Value.fromAddress(_daoAddress)
    )
  )
  newUserEvent.parameters.push(
    new ethereum.EventParam(
      "_depositor",
      ethereum.Value.fromAddress(_depositor)
    )
  )
  newUserEvent.parameters.push(
    new ethereum.EventParam(
      "_depositTokenAddress",
      ethereum.Value.fromAddress(_depositTokenAddress)
    )
  )
  newUserEvent.parameters.push(
    new ethereum.EventParam(
      "_depositTokenAmount",
      ethereum.Value.fromUnsignedBigInt(_depositTokenAmount)
    )
  )
  newUserEvent.parameters.push(
    new ethereum.EventParam(
      "_timeStamp",
      ethereum.Value.fromUnsignedBigInt(_timeStamp)
    )
  )
  newUserEvent.parameters.push(
    new ethereum.EventParam(
      "_gtToken",
      ethereum.Value.fromUnsignedBigInt(_gtToken)
    )
  )
  newUserEvent.parameters.push(
    new ethereum.EventParam("_isAdmin", ethereum.Value.fromBoolean(_isAdmin))
  )

  return newUserEvent
}

export function createRemoveWhitelistAddressEvent(
  _daoAddress: Address,
  _address: Address
): RemoveWhitelistAddress {
  let removeWhitelistAddressEvent = changetype<RemoveWhitelistAddress>(
    newMockEvent()
  )

  removeWhitelistAddressEvent.parameters = new Array()

  removeWhitelistAddressEvent.parameters.push(
    new ethereum.EventParam(
      "_daoAddress",
      ethereum.Value.fromAddress(_daoAddress)
    )
  )
  removeWhitelistAddressEvent.parameters.push(
    new ethereum.EventParam("_address", ethereum.Value.fromAddress(_address))
  )

  return removeWhitelistAddressEvent
}

export function createRoleAdminChangedEvent(
  role: Bytes,
  previousAdminRole: Bytes,
  newAdminRole: Bytes
): RoleAdminChanged {
  let roleAdminChangedEvent = changetype<RoleAdminChanged>(newMockEvent())

  roleAdminChangedEvent.parameters = new Array()

  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "previousAdminRole",
      ethereum.Value.fromFixedBytes(previousAdminRole)
    )
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newAdminRole",
      ethereum.Value.fromFixedBytes(newAdminRole)
    )
  )

  return roleAdminChangedEvent
}

export function createRoleGrantedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleGranted {
  let roleGrantedEvent = changetype<RoleGranted>(newMockEvent())

  roleGrantedEvent.parameters = new Array()

  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleGrantedEvent
}

export function createRoleRevokedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleRevoked {
  let roleRevokedEvent = changetype<RoleRevoked>(newMockEvent())

  roleRevokedEvent.parameters = new Array()

  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleRevokedEvent
}

export function createSendCustomTokenEvent(
  _daoAddress: Address,
  _token: Address,
  _amount: Array<BigInt>,
  _addresses: Array<Address>
): SendCustomToken {
  let sendCustomTokenEvent = changetype<SendCustomToken>(newMockEvent())

  sendCustomTokenEvent.parameters = new Array()

  sendCustomTokenEvent.parameters.push(
    new ethereum.EventParam(
      "_daoAddress",
      ethereum.Value.fromAddress(_daoAddress)
    )
  )
  sendCustomTokenEvent.parameters.push(
    new ethereum.EventParam("_token", ethereum.Value.fromAddress(_token))
  )
  sendCustomTokenEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigIntArray(_amount)
    )
  )
  sendCustomTokenEvent.parameters.push(
    new ethereum.EventParam(
      "_addresses",
      ethereum.Value.fromAddressArray(_addresses)
    )
  )

  return sendCustomTokenEvent
}

export function createStartDepositEvent(
  _proxy: Address,
  startTime: BigInt,
  closeTime: BigInt
): StartDeposit {
  let startDepositEvent = changetype<StartDeposit>(newMockEvent())

  startDepositEvent.parameters = new Array()

  startDepositEvent.parameters.push(
    new ethereum.EventParam("_proxy", ethereum.Value.fromAddress(_proxy))
  )
  startDepositEvent.parameters.push(
    new ethereum.EventParam(
      "startTime",
      ethereum.Value.fromUnsignedBigInt(startTime)
    )
  )
  startDepositEvent.parameters.push(
    new ethereum.EventParam(
      "closeTime",
      ethereum.Value.fromUnsignedBigInt(closeTime)
    )
  )

  return startDepositEvent
}

export function createUpdateDistributionAmountEvent(
  _daoAddress: Address,
  _amount: BigInt
): UpdateDistributionAmount {
  let updateDistributionAmountEvent = changetype<UpdateDistributionAmount>(
    newMockEvent()
  )

  updateDistributionAmountEvent.parameters = new Array()

  updateDistributionAmountEvent.parameters.push(
    new ethereum.EventParam(
      "_daoAddress",
      ethereum.Value.fromAddress(_daoAddress)
    )
  )
  updateDistributionAmountEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )

  return updateDistributionAmountEvent
}

export function createUpdateGovernanceSettingsEvent(
  _daoAddress: Address,
  _quorum: BigInt,
  _threshold: BigInt
): UpdateGovernanceSettings {
  let updateGovernanceSettingsEvent = changetype<UpdateGovernanceSettings>(
    newMockEvent()
  )

  updateGovernanceSettingsEvent.parameters = new Array()

  updateGovernanceSettingsEvent.parameters.push(
    new ethereum.EventParam(
      "_daoAddress",
      ethereum.Value.fromAddress(_daoAddress)
    )
  )
  updateGovernanceSettingsEvent.parameters.push(
    new ethereum.EventParam(
      "_quorum",
      ethereum.Value.fromUnsignedBigInt(_quorum)
    )
  )
  updateGovernanceSettingsEvent.parameters.push(
    new ethereum.EventParam(
      "_threshold",
      ethereum.Value.fromUnsignedBigInt(_threshold)
    )
  )

  return updateGovernanceSettingsEvent
}

export function createUpdateMaxTokensPerUserEvent(
  _daoAddress: Address,
  _maxTokensPerUser: BigInt
): UpdateMaxTokensPerUser {
  let updateMaxTokensPerUserEvent = changetype<UpdateMaxTokensPerUser>(
    newMockEvent()
  )

  updateMaxTokensPerUserEvent.parameters = new Array()

  updateMaxTokensPerUserEvent.parameters.push(
    new ethereum.EventParam(
      "_daoAddress",
      ethereum.Value.fromAddress(_daoAddress)
    )
  )
  updateMaxTokensPerUserEvent.parameters.push(
    new ethereum.EventParam(
      "_maxTokensPerUser",
      ethereum.Value.fromUnsignedBigInt(_maxTokensPerUser)
    )
  )

  return updateMaxTokensPerUserEvent
}

export function createUpdateMinMaxDepositEvent(
  _proxy: Address,
  _minDeposit: BigInt,
  _maxDeposit: BigInt
): UpdateMinMaxDeposit {
  let updateMinMaxDepositEvent = changetype<UpdateMinMaxDeposit>(newMockEvent())

  updateMinMaxDepositEvent.parameters = new Array()

  updateMinMaxDepositEvent.parameters.push(
    new ethereum.EventParam("_proxy", ethereum.Value.fromAddress(_proxy))
  )
  updateMinMaxDepositEvent.parameters.push(
    new ethereum.EventParam(
      "_minDeposit",
      ethereum.Value.fromUnsignedBigInt(_minDeposit)
    )
  )
  updateMinMaxDepositEvent.parameters.push(
    new ethereum.EventParam(
      "_maxDeposit",
      ethereum.Value.fromUnsignedBigInt(_maxDeposit)
    )
  )

  return updateMinMaxDepositEvent
}

export function createUpdateNftTransferabilityEvent(
  _daoAddress: Address,
  _isNftTransferable: boolean
): UpdateNftTransferability {
  let updateNftTransferabilityEvent = changetype<UpdateNftTransferability>(
    newMockEvent()
  )

  updateNftTransferabilityEvent.parameters = new Array()

  updateNftTransferabilityEvent.parameters.push(
    new ethereum.EventParam(
      "_daoAddress",
      ethereum.Value.fromAddress(_daoAddress)
    )
  )
  updateNftTransferabilityEvent.parameters.push(
    new ethereum.EventParam(
      "_isNftTransferable",
      ethereum.Value.fromBoolean(_isNftTransferable)
    )
  )

  return updateNftTransferabilityEvent
}

export function createUpdateOwnerFeeEvent(
  _proxy: Address,
  _ownerFee: BigInt
): UpdateOwnerFee {
  let updateOwnerFeeEvent = changetype<UpdateOwnerFee>(newMockEvent())

  updateOwnerFeeEvent.parameters = new Array()

  updateOwnerFeeEvent.parameters.push(
    new ethereum.EventParam("_proxy", ethereum.Value.fromAddress(_proxy))
  )
  updateOwnerFeeEvent.parameters.push(
    new ethereum.EventParam(
      "_ownerFee",
      ethereum.Value.fromUnsignedBigInt(_ownerFee)
    )
  )

  return updateOwnerFeeEvent
}

export function createUpdatePricePerTokenEvent(
  _daoAddress: Address,
  _amount: BigInt
): UpdatePricePerToken {
  let updatePricePerTokenEvent = changetype<UpdatePricePerToken>(newMockEvent())

  updatePricePerTokenEvent.parameters = new Array()

  updatePricePerTokenEvent.parameters.push(
    new ethereum.EventParam(
      "_daoAddress",
      ethereum.Value.fromAddress(_daoAddress)
    )
  )
  updatePricePerTokenEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )

  return updatePricePerTokenEvent
}

export function createUpdateTotalSupplyOfTokenEvent(
  _daoAddress: Address,
  _totalSupplyOfToken: BigInt
): UpdateTotalSupplyOfToken {
  let updateTotalSupplyOfTokenEvent = changetype<UpdateTotalSupplyOfToken>(
    newMockEvent()
  )

  updateTotalSupplyOfTokenEvent.parameters = new Array()

  updateTotalSupplyOfTokenEvent.parameters.push(
    new ethereum.EventParam(
      "_daoAddress",
      ethereum.Value.fromAddress(_daoAddress)
    )
  )
  updateTotalSupplyOfTokenEvent.parameters.push(
    new ethereum.EventParam(
      "_totalSupplyOfToken",
      ethereum.Value.fromUnsignedBigInt(_totalSupplyOfToken)
    )
  )

  return updateTotalSupplyOfTokenEvent
}

export function createWhitelistAddressEvent(
  _daoAddress: Address,
  _address: Address
): WhitelistAddress {
  let whitelistAddressEvent = changetype<WhitelistAddress>(newMockEvent())

  whitelistAddressEvent.parameters = new Array()

  whitelistAddressEvent.parameters.push(
    new ethereum.EventParam(
      "_daoAddress",
      ethereum.Value.fromAddress(_daoAddress)
    )
  )
  whitelistAddressEvent.parameters.push(
    new ethereum.EventParam("_address", ethereum.Value.fromAddress(_address))
  )

  return whitelistAddressEvent
}
