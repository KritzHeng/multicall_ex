import { ADDRESS_LIST } from "../constants/addressList";
// import { tenXBankContract } from "../contracts/index";
import { pancakeFactoryContract } from "../contracts/index";
import { PancakeFactory__factory } from "../typechain/factories/PancakeFactory__factory";
import { PancakeFactory } from "../typechain";
// import { ContractCallContext } from "ethereum-multicall";
// import { getMulticall as multicall } from "../utils/getMulticall";
// import { TenXBank__factory } from "../typechain-types";
import { formatEther, parseEther } from "ethers/lib/utils";

// const bankContract = tenXBankContract(ADDRESS_LIST["TenXBank"]);

// total lenght
const factoryContract = pancakeFactoryContract(ADDRESS_LIST["FACTORY"])
// loop get All address


export const pairLength = async () =>{
    const lenght =  await factoryContract.feeToSetter();
    return lenght
}
// const getPairs = async () =>{

// }/*[0x1,0x2,0x3,,]*/


// const getAccounts = async (walletAddress: string) => {
//   const accounts = await bankContract.getOwnerAccounts(walletAddress);/*[0x1,0x2,0x3,,]*/
//   const contractCallContext: ContractCallContext[] = accounts.map(
//     (account) => ({
//       reference: account,
//       contractAddress: ADDRESS_LIST["TenXBank"],
//       abi: TenXBank__factory.abi,
//       calls: [
//         {
//           reference: account,
//           methodName: "accounts",
//           methodParameters: [account],
//         },
//       ],
//     })
//   );
//   const response = await multicall.call(contractCallContext);
//   return Object.entries(response.results).map(([name, data]) => {
//     return {
//       name,
//       balance: +formatEther(data.callsReturnContext[0].returnValues[2]),
//     };
//   }) as { name: string; balance: number }[];
// };