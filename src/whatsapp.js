import { Navigate } from 'react-router-dom';

function WhatsAppLoginButton() {


  function otpless() {
    const waId = window.otplessWaId?.();
    if (waId) {
     Navigate('/home');
    }
  }

  return (
    <button id="whatsapp-login" onClick={otpless}>
      WhatsApp Login
    </button>
  );
}
export default WhatsAppLoginButton
