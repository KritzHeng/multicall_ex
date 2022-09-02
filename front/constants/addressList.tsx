export const CONTRACT_ADDRESS = {
  FACTORY: "0x1858F08ce7425B2715d870c20e0e2c79899994aa",
  ROUTER: "0x500b47A2470175D81eB37295EF7a494bED33F889",
  Multicall: "0x42Ad527de7d4e9d9d011aC45B31D8551f8Fe9821",
};

export const CONTRACT_NAMES = Object.entries(CONTRACT_ADDRESS).reduce<
  Record<string, string>
>((prev, cur) => {
  const [name, address]: any = cur;
  prev[address] = name;
  return prev;
}, {});

export const ADDRESS_LIST: Record<string, string> = {
  ...CONTRACT_ADDRESS,
  ...Object.values(CONTRACT_ADDRESS).reduce<Record<string, string>>(
    (prev, cur: any) => {
      prev[cur] = cur;
      return prev;
    },
    {}
  ),
};
