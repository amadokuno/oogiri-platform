import { AuthProvider } from '../context/AuthContext';
import '../styles/globals.css'; // globals.cssがない場合はこの行を削除

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;