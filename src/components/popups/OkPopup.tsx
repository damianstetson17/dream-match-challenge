import AwesomeAlert from 'react-native-awesome-alerts';
import React, {SetStateAction} from 'react';

type Props = {
  title: string;
  message?: string;
  show: boolean;
  onConfirmPressed?: () => void;
  onDismiss?: () => void;
  setShow: React.Dispatch<SetStateAction<boolean>>;
};

/**
 * Ok popup base, just have Confirm button
 */
const OkPopup = ({title, message, show, onConfirmPressed, onDismiss, setShow}: Props) => {
  return (
    <AwesomeAlert
      show={show}
      showProgress={false}
      title={title}
      message={message}
      messageStyle={{textAlign: 'center'}}
      closeOnTouchOutside={true}
      closeOnHardwareBackPress={false}
      showCancelButton={false}
      showConfirmButton={true}
      confirmText="Confirmar"
      confirmButtonColor="#3d5afe"
      onConfirmPressed={onConfirmPressed}
      onDismiss={() => setShow(false)}
    />
  );
};

export default OkPopup;
