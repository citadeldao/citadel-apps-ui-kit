export const formatAddress = (address, offset = 0) => {
    if (address?.length > 20) {
      return (
        address.slice(0, offset || 6) +
        "****" +
        address.slice(address.length - (offset || 4), address.length)
      );
    }
    return address;
};

export const addressMask = (e, setValidAddress, ethAddress) => {
  if(ethAddress) {
    e.target.maxLength = 42
  }
  let value = e.target.value
  let regex;
  if(ethAddress){
    regex = /^0x[a-fA-F0-9]{40}$/;
  }
  else {
    regex = /0x[a-fA-F0-9]/g;
  }

  if(regex.test(value)) {
      setValidAddress(true)
  }
  else{
      setValidAddress(false)
  }
  e.target.value = value
  return e
}