import getProvider from "../utils/getProvider";
import { PancakeFactory__factory, PancakePair__factory, PancakeRouter__factory } from "../typechain";

export const pancakeFactoryContract = (address: string, provider = getProvider()) =>{
    PancakeFactory__factory.connect(address, provider);
}
export const pancakePairContract = (address: string, provider = getProvider()) =>{
    PancakePair__factory.connect(address, provider);
}
export const pancakeRouterContract = (address: string, provider = getProvider()) =>{
    PancakeRouter__factory.connect(address, provider);
}