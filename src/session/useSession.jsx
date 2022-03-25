import { useContext } from 'react';
import { sessionContext } from './SessionProvider';

function useSession() {
  const contextValue = useContext(sessionContext);
  return contextValue;
}

export default useSession;
