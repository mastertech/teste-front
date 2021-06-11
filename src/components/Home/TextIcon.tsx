import { IconType } from 'react-icons';
import '../../styles/components/TextIcon.css';

type TextIconProps = {
  Icon: IconType;
  text: string;
}

export const TextIcon: React.FC<TextIconProps> = ({ Icon, text }) => (
  <div className="text_icon__container">
    <Icon style={{ marginRight: 8 }} className="text_icon" />
    <span className="text_icon">{ text }</span>
  </div>
)