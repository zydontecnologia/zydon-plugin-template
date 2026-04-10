import { PropsWithChildren } from 'react';
import { Authed } from '@zydon/auth';
import Common from '@zydon/common/components/Common';

const ComponentPluginWrapper = ({ children }: PropsWithChildren) => {
  return (
    <Authed
      mode={import.meta.env.VITE_MODE}
      username={import.meta.env.VITE_USERNAME}
      password={import.meta.env.VITE_PASSWORD}
      fallback={<>Acesso negado</>}
    >
      <Common primaryColor="#4E5BEC" cssVarPrefix="configs">
        {children}
      </Common>
    </Authed>
  );
};

export default ComponentPluginWrapper;
