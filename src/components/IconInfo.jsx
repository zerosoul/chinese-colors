import Icon from './Icon';
import { GoInfo } from 'react-icons/go';

const IconInfo = ({ showInfoModal }) => {
  return <Icon handleClick={showInfoModal} icon={<GoInfo size="34" />}></Icon>;
};

export default IconInfo;
