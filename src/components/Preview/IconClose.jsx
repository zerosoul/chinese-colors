import { IoMdCloseCircleOutline } from 'react-icons/io';
import Icon from '../Icon';

const IconClose = ({ closePreview }) => {
  return <Icon handleClick={closePreview} icon={<IoMdCloseCircleOutline size="32" />} />;
};

export default IconClose;
