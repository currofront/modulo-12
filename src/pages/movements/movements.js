import {
  getMovementList, getAccount
} from './movements.api';
import {
  addMovementRows
} from './movements.helpers';
import {
  mapMovementApiToViewmodel
} from './movements.mappers'
import {
  history
} from '../../core/router';
import {
  onSetValues,
} from '../../common/helpers';


const params = history.getParams();

getAccount(params.id).then(account => {
  onSetValues(account);
})

getMovementList().then(movement => {
  if (movement.accountId === params.id) {
    const vmMovements = mapMovementApiToViewmodel(movement);
    addMovementRows(vmMovements);
  } else {
    const vmMovements = mapMovementApiToViewmodel(movement).filter(movement => movement.accountId === params.id );
    addMovementRows(vmMovements);
  }
});
