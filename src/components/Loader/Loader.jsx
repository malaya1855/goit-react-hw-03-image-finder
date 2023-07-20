import { RotatingLines } from 'react-loader-spinner';
import { BackDrop } from 'components';

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
