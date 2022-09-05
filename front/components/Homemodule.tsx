import { useEffect, useState } from 'react';
import { pairLength, getAccounts } from '../services/pairToken.service';


export default function Homemodule() {
  const [length, setLength] = useState(0);
  const [balanceOfList, setBalanceOfList] = useState([{}]);
//      await Funtion(name).then((tx) => tx.wait());

  useEffect(()=>{
    async function getData(){
      const dataLength:any = await Promise.resolve(await pairLength());
      const balanceof: any = await Promise.resolve(getAccounts().then((tx) => console.log(tx)));
      setBalanceOfList(balanceof);
      
      setLength(dataLength);
    }
    

    getData();
  }, [])


  return (
    <div>{length}</div>
  );


}
