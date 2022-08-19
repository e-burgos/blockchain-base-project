export interface ILocalData {
  title: string;
  image: string;
  description: string;
}

export interface IMetamaskResponse {
  hash: string;
  type: number;
  accessList: null;
  blockHash: null;
  blockNumber: null;
  transactionIndex: null;
  confirmations: number;
  from: string;
  maxPriorityFeePerGas: {
    type: string;
    hex: string;
  };
  maxFeePerGas: {
    type: string;
    hex: string;
  };
  gasPrice: {
    type: string;
    hex: string;
  };
  gasLimit: {
    type: string;
    hex: string;
  };
  to: string;
  value: {
    type: string;
    hex: string;
  };
  nonce: number;
  data: string;
  r: string;
  s: string;
  v: number;
  creates: null;
  chainId: number;
}
