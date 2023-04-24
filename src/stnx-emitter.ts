import { BigInt } from "@graphprotocol/graph-ts"
import {
  StnxEmitter,
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
import { ExampleEntity } from "../generated/schema"

export function handleAirDropToken(event: AirDropToken): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity._daoAddress = event.params._daoAddress
  entity._token = event.params._token

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.DEFAULT_ADMIN_ROLE(...)
  // - contract.EMITTER(...)
  // - contract.FACTORY(...)
  // - contract.factoryAddress(...)
  // - contract.getRoleAdmin(...)
  // - contract.hasRole(...)
  // - contract.supportsInterface(...)
}

export function handleChangeMerkleRoot(event: ChangeMerkleRoot): void {}

export function handleCloseDeposit(event: CloseDeposit): void {}

export function handleCreateDaoErc20(event: CreateDaoErc20): void {}

export function handleCreateDaoErc721(event: CreateDaoErc721): void {}

export function handleDefineContracts(event: DefineContracts): void {}

export function handleDeposited(event: Deposited): void {}

export function handleFactoryCreated(event: FactoryCreated): void {}

export function handleInitialized(event: Initialized): void {}

export function handleMintGTToAddress(event: MintGTToAddress): void {}

export function handleMintNft(event: MintNft): void {}

export function handleNewUser(event: NewUser): void {}

export function handleRemoveWhitelistAddress(
  event: RemoveWhitelistAddress
): void {}

export function handleRoleAdminChanged(event: RoleAdminChanged): void {}

export function handleRoleGranted(event: RoleGranted): void {}

export function handleRoleRevoked(event: RoleRevoked): void {}

export function handleSendCustomToken(event: SendCustomToken): void {}

export function handleStartDeposit(event: StartDeposit): void {}

export function handleUpdateDistributionAmount(
  event: UpdateDistributionAmount
): void {}

export function handleUpdateGovernanceSettings(
  event: UpdateGovernanceSettings
): void {}

export function handleUpdateMaxTokensPerUser(
  event: UpdateMaxTokensPerUser
): void {}

export function handleUpdateMinMaxDeposit(event: UpdateMinMaxDeposit): void {}

export function handleUpdateNftTransferability(
  event: UpdateNftTransferability
): void {}

export function handleUpdateOwnerFee(event: UpdateOwnerFee): void {}

export function handleUpdatePricePerToken(event: UpdatePricePerToken): void {}

export function handleUpdateTotalSupplyOfToken(
  event: UpdateTotalSupplyOfToken
): void {}

export function handleWhitelistAddress(event: WhitelistAddress): void {}
