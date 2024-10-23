import '@/styles/index.css';
import '@/styles/Login.window.css';
import '@/styles/Register.window.css';
import '@/styles/Card.module.css';
import '@/styles/TypeCard.module.css';


import { AppProps } from 'next/app';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
      <div className="abc">
        <Component {...pageProps} />
      </div>
  )
};

export default App;
