import { MdOutlineCloudDownload } from 'react-icons/md';
import Icon from './Icon';

const IconInfo = ({ showPreview }) => {
  return <Icon handleClick={showPreview} icon={<MdOutlineCloudDownload className="icon" />}></Icon>;
};

export default IconInfo;
