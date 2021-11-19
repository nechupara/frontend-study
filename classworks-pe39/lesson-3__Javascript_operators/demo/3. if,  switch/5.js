const PRODUCT_ACTION_DISABLE = '1';
const PRODUCT_ACTION_ACTIVE = '2';
const PRODUCT_STATUS_PENDING_SETUP = '3';
const PRODUCT_STATUS_RENEWAL_DUE = '4';
const PRODUCT_ACTION_EMPTY = '5';

const PRODUCT = prompt('1,2,3,4,5')

switch (PRODUCT) {
	case PRODUCT_ACTION_DISABLE:
		alert('PRODUCT, status-disable');
		 break;
	case PRODUCT_ACTION_ACTIVE:
		alert('PRODUCT, status-active');
		 break;
	case PRODUCT_STATUS_PENDING_SETUP:
		alert('PRODUCT, status-pending');
		 break;
	case PRODUCT_STATUS_RENEWAL_DUE:
		alert('PRODUCT, status-renewal');
		 break;
	case PRODUCT_ACTION_EMPTY:
		alert('PRODUCT, status-empty');
		 break;
	default:
		alert('status-error');
}