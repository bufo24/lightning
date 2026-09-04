import {FailureReason} from '../typescript';

export type FailureFromPaymentArgs = {
  payment_hash: string;
  failure_reason: FailureReason;
};

export type FailureFromPaymentResult = {
  /** Payment Hash Hex String */
  id: string;
  /** Payment Was Canceled Bool */
  is_canceled: boolean;
  /** Payment Failed With A Non-Recoverable Error Bool */
  is_error: boolean;
  /** Payment Failed Due to Insufficient Balance Bool */
  is_insufficient_balance: boolean;
  /** Payment Failed Due to Invalid Details Rejection Bool */
  is_invalid_payment: boolean;
  /** Failure Due To Pathfinding Timeout Failure Bool */
  is_pathfinding_timeout: boolean;
  /** Failure Due to No Route To Destination Found Bool */
  is_route_not_found: boolean;
};

export function failureFromPayment(payment: {
  payment_hash: string,
  failure_reason: 'FAILURE_REASON_CANCELED';
}): {
  id: string,
  is_canceled: true;
  is_error: false;
  is_insufficient_balance: false;
  is_invalid_payment: false;
  is_pathfinding_timeout: false;
  is_route_not_found: false;
};
export function failureFromPayment(payment: {
  payment_hash: string,
  failure_reason: 'FAILURE_REASON_ERROR';
}): {
  id: string,
  is_canceled: false;
  is_error: true;
  is_insufficient_balance: false;
  is_invalid_payment: false;
  is_pathfinding_timeout: false;
  is_route_not_found: false;
};
export function failureFromPayment(payment: {
  payment_hash: string,
  failure_reason: 'FAILURE_REASON_INSUFFICIENT_BALANCE';
}): {
  id: string,
  is_canceled: false;
  is_error: false;
  is_insufficient_balance: true;
  is_invalid_payment: false;
  is_pathfinding_timeout: false;
  is_route_not_found: false;
};
export function failureFromPayment(payment: {
  payment_hash: string,
  failure_reason: 'FAILURE_REASON_INCORRECT_PAYMENT_DETAILS';
}): {
  id: string,
  is_canceled: false;
  is_error: false;
  is_insufficient_balance: false;
  is_invalid_payment: true;
  is_pathfinding_timeout: false;
  is_route_not_found: false;
};
export function failureFromPayment(payment: {
  payment_hash: string,
  failure_reason: 'FAILURE_REASON_TIMEOUT';
}): {
  id: string,
  is_canceled: false;
  is_error: false;
  is_insufficient_balance: false;
  is_invalid_payment: false;
  is_pathfinding_timeout: true;
  is_route_not_found: false;
};
export function failureFromPayment(payment: {
  payment_hash: string,
  failure_reason: 'FAILURE_REASON_NO_ROUTE';
}): {
  id: string,
  is_canceled: false;
  is_error: false;
  is_insufficient_balance: false;
  is_invalid_payment: false;
  is_pathfinding_timeout: false;
  is_route_not_found: true;
};
export function failureFromPayment(
  payment: FailureFromPaymentArgs
): FailureFromPaymentResult;
