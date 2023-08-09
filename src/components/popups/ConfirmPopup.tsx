import React, {SetStateAction} from 'react';
import AwesomeAlert from 'react-native-awesome-alerts';

type Props = {
  title: string;
  message?: string;
  show: boolean;
  onConfirmPressed?: () => void;
  onCancelPressed?: () => void;
  setShow: React.Dispatch<SetStateAction<boolean>>;
};

/**
 * Confirm popup base,  have Confirm or Cancel options
 */
const ConfirmPopup = ({
  title,
  message,
  show,
  onConfirmPressed,
  onCancelPressed,
  setShow,
}: Props) => {
  return (
    <AwesomeAlert
      show={show}
      showProgress={false}
      title={title}
      message={message}
      messageStyle={{textAlign: 'center'}}
      closeOnTouchOutside={true}
      closeOnHardwareBackPress={false}
      showCancelButton={true}
      showConfirmButton={true}
      confirmText="Confirmar"
      confirmButtonColor="#3d5afe"
      cancelText="Cancelar"
      cancelButtonColor="#f44336"
      onConfirmPressed={onConfirmPressed}
      onCancelPressed={onCancelPressed}
      onDismiss={() => setShow(false)}
    />
  );
};

export default ConfirmPopup;
