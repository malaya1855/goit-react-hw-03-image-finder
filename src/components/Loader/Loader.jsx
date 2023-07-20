import { RotatingLines } from 'react-loader-spinner';
import { BackDrop } from './Loader.styled';

export const Loader = () => {
  return (
    <BackDrop>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </BackDrop>
  );
};
