import { useAuth as useAuthentication } from '@zydon/auth';

import { MODE } from 'constants/constants';

const useAuth = () => {
  const authData = useAuthentication(MODE);

  return authData;
};

export default useAuth;
