import { Toaster } from 'sonner';
import AuthProvider from '../context/AuthProvider';
import AppRoute from '../routes/AppRoute';

function App() {
  return (
    <>
      <AuthProvider>
        <Toaster position="bottom-right" />
        <AppRoute />
      </AuthProvider>
    </>
  );
}

export default App;
