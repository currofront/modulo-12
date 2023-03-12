export const mapMovementApiToViewmodel = movementList =>
  Array.isArray(movementList) ?
  movementList.map(movement => MovementApiToVm(movement)) :
  [];

const MovementApiToVm = movement => ({
  accountId: movement.accountId,
  amount: movement.amount + '€',
  balance: `${movement.balance} €`,
  description: movement.description,
  id: movement.id,
  realTransaction: new Date(movement.realTransaction).toLocaleDateString(),
  transaction: new Date(movement.transaction).toLocaleDateString(),
});
