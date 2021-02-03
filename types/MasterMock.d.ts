/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface MasterMockContract
  extends Truffle.Contract<MasterMockInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<MasterMockInstance>;
}

type AllEvents = never;

export interface MasterMockInstance extends Truffle.ContractInstance {
  checkIsAuthToGoverned(
    caller: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  dAppLocker(txDetails?: Truffle.TransactionDetails): Promise<string>;

  dAppToken(txDetails?: Truffle.TransactionDetails): Promise<string>;

  delegateCallBack: {
    (arg0: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(arg0: string, txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(
      arg0: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      arg0: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  enrollGovernance: {
    (newGov: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(newGov: string, txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(
      newGov: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      newGov: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  enrollInternal: {
    (newInternal: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(
      newInternal: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      newInternal: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      newInternal: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  enrollMember: {
    (
      newMember: string,
      role: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      newMember: string,
      role: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      newMember: string,
      role: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      newMember: string,
      role: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  getLatestAddress(
    contractName: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  isInternal(
    caller: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  isMember(
    caller: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  isOwner(
    arg0: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  isPause(txDetails?: Truffle.TransactionDetails): Promise<boolean>;

  masterInitialized(txDetails?: Truffle.TransactionDetails): Promise<boolean>;

  owner(txDetails?: Truffle.TransactionDetails): Promise<string>;

  pause: {
    (txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
    estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
  };

  pauseTime(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  setLatestAddress: {
    (
      contractName: string,
      contractAddress: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      contractName: string,
      contractAddress: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      contractName: string,
      contractAddress: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      contractName: string,
      contractAddress: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  setTokenAddress: {
    (_tokenAddress: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(
      _tokenAddress: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _tokenAddress: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _tokenAddress: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  tokenAddress(txDetails?: Truffle.TransactionDetails): Promise<string>;

  unpause: {
    (txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
    estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
  };

  updatePauseTime: {
    (
      arg0: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      arg0: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      arg0: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      arg0: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  upgradeCapitalPool: {
    (
      currentPoolAddress: string,
      newPoolAddress: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      currentPoolAddress: string,
      newPoolAddress: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      currentPoolAddress: string,
      newPoolAddress: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      currentPoolAddress: string,
      newPoolAddress: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  methods: {
    checkIsAuthToGoverned(
      caller: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;

    dAppLocker(txDetails?: Truffle.TransactionDetails): Promise<string>;

    dAppToken(txDetails?: Truffle.TransactionDetails): Promise<string>;

    delegateCallBack: {
      (arg0: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(arg0: string, txDetails?: Truffle.TransactionDetails): Promise<void>;
      sendTransaction(
        arg0: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        arg0: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    enrollGovernance: {
      (newGov: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        newGov: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        newGov: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        newGov: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    enrollInternal: {
      (newInternal: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        newInternal: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        newInternal: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        newInternal: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    enrollMember: {
      (
        newMember: string,
        role: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        newMember: string,
        role: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        newMember: string,
        role: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        newMember: string,
        role: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    getLatestAddress(
      contractName: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;

    isInternal(
      caller: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;

    isMember(
      caller: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;

    isOwner(
      arg0: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;

    isPause(txDetails?: Truffle.TransactionDetails): Promise<boolean>;

    masterInitialized(txDetails?: Truffle.TransactionDetails): Promise<boolean>;

    owner(txDetails?: Truffle.TransactionDetails): Promise<string>;

    pause: {
      (txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(txDetails?: Truffle.TransactionDetails): Promise<void>;
      sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
      estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
    };

    pauseTime(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    setLatestAddress: {
      (
        contractName: string,
        contractAddress: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        contractName: string,
        contractAddress: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        contractName: string,
        contractAddress: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        contractName: string,
        contractAddress: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    setTokenAddress: {
      (_tokenAddress: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        _tokenAddress: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _tokenAddress: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _tokenAddress: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    tokenAddress(txDetails?: Truffle.TransactionDetails): Promise<string>;

    unpause: {
      (txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(txDetails?: Truffle.TransactionDetails): Promise<void>;
      sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
      estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
    };

    updatePauseTime: {
      (
        arg0: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        arg0: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        arg0: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        arg0: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    upgradeCapitalPool: {
      (
        currentPoolAddress: string,
        newPoolAddress: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        currentPoolAddress: string,
        newPoolAddress: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        currentPoolAddress: string,
        newPoolAddress: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        currentPoolAddress: string,
        newPoolAddress: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };
  };

  getPastEvents(event: string): Promise<EventData[]>;
  getPastEvents(
    event: string,
    options: PastEventOptions,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
  getPastEvents(event: string, options: PastEventOptions): Promise<EventData[]>;
  getPastEvents(
    event: string,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
}
