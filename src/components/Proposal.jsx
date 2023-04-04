import React, {useState} from 'react';
import {Image, TouchableOpacity} from 'react-native';

const Proposal = ({grayImg, readImg}) => {
  const [isActive, setIsActive] = useState(false);

  const handleIsActive = () => {
    setIsActive(!isActive);
  };

  return (
    <TouchableOpacity
      onPress={handleIsActive}
      className="relative p-1 h-16 w-16 rounded-full space-y-[-4] items-center flex flex-col justify-center">
      {isActive ? (
        <Image source={readImg} className="" />
      ) : (
        <Image source={grayImg} className="" />
      )}
      {isActive ? (
        <Image
          source={require('../assests/GreenTick.png')}
          className="absolute top-0 right-0"
        />
      ) : null}
    </TouchableOpacity>
  );
};

export default Proposal;
