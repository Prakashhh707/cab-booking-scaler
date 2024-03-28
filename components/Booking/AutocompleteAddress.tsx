import React, {useEffect, useState} from 'react'

function AutocompleteAddress() {

  // const onSourceAddressClick=()=>{
  //   setSource(item.full_adress);
  //   setAddressList([]);setSourceChange(false)
  // }

  const [source,setSource]=useState<any>()
  const [sourceCoordinates, setSourceCoordinates]=useState<any>([]);
  const [addressList,setAddressList]=useState<any>([]);

  useEffect(()=>{
    const delayDebounceFn= setTimeout(()=>{
      getAddressList()
    },1000)

    return ()=> clearTimeout(delayDebounceFn)
  },[source]);

  const getAddressList=async()=>{
    const res=await  fetch('/api/search-address?q='+source,{
      headers:{
        "content-Type": "application/json",
      }
    });

    const result=await res.json();
    setAddressList(result)

    // setSourceCoordinates({
    //   lng:result.features[0].geometry.coordinates[0],
    //   lat:result.features[0].geometry.coordinates[1],
    // })
    console.log(result);
  }


  return (
    <div className='mt-5'>
      <div className='relative'>
        <label className='text-gray-400'>"Where From?"</label>
        <input type="text"
        className='bg-white p-1 border-[1px] w-full rounded-md outline-none
        focus:border-blue-300'
        value={source}
        onChange={(e)=>setSource(e.target.value)}
        />

        {addressList?.suggestions?
        <div className='shadow-md p-1 rounded-md absolute w-full bg-white'>
       {addressList?.suggestions.map((item:any, index:number)=>(
        <h2 className='p-3 hover:bg-gray-100 cursor-pointer'
        onClick={()=>{setSource(item.full_address);
        setAddressList}}
        >{item.full_address}</h2>
       ))}
       </div>:null}
      </div>
      <div className='mt-3'>
        <label className='text-gray-400'>"Where To?"</label>
        <input type="text"
        className='bg-white p-1 border-[1px] w-full rounded-md outline-none
        focus:border-blue-300'/>
      </div>
    </div>
  )
}

export default AutocompleteAddress
