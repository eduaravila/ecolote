import React, {useState, useEffect} from 'react';

import GradientBackground from '../../../components/GradientBackground/GradientBackground';
import Header from '../components/header';
import Body from '../components/body/index';
import {ModalCode} from '../components/modal';

interface componentIdType {
  componentId: string;
  token: string;
  email: string;
  username: string;
}

const SingUpCode: React.FC<componentIdType> = props => {
  const [check, setCheck] = useState(true);
  const [codeInterval, setCodeInterval] = useState<number>(10);
  const [token, settoken] = useState(props.token);

  const _set_token = (e: string) => settoken(e);

  const _setCheck = (e: boolean) => {
    setCheck(e);
  };

  const updateStopWatch = (minutes: number) => {
    setCodeInterval(minutes * 60);
  };

  useEffect(() => {
    let interval = setInterval(() => setCodeInterval(codeInterval - 1), 1000);
    return () => clearInterval(interval);
  }, [codeInterval]);

  return (
    <GradientBackground>
      <Header componentId={props.componentId} />
      <Body
        setToken={_set_token}
        {...props}
        token={token}
        setCheck={_setCheck}
        check={check}
        codeInterval={codeInterval}
        updateStopWatch={updateStopWatch}
      />
      <ModalCode
        setCheck={_setCheck}
        check={check}
        setToken={_set_token}
        username={props.username}
        updateStopWatch={updateStopWatch}
      />
    </GradientBackground>
  );
};

export default SingUpCode;
