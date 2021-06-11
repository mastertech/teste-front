import '../styles/components/Layout.css';

type LayoutProps = {
  buttonTitle: string;
  buttonAction: () => void;
}

export const Layout: React.FC<LayoutProps> = ({ buttonTitle, buttonAction, children }) => (
  <div className="container">
    { children }
    <button onClick={buttonAction}>{ buttonTitle }</button>
  </div>
);