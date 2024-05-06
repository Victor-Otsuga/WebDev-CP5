import {} from 'react';
import '../css/estilo.css';
import { AiFillLinkedin, AiFillInstagram,  } from 'react-icons/ai';
import {BiLogoFacebook, BiLogoGmail} from 'react-icons/bi';
function Footer() {

  return (
    <>
      <footer>
      <p>Copyright © 2024 Evo Music. Todos os direitos reservados.</p>
      <p>Powered by <a href="#">Evo</a></p>
      <div className='logos'>
        <AiFillLinkedin/>
        <AiFillInstagram/>
        <BiLogoFacebook/>
        <BiLogoGmail/>
      </div>
    </footer>
    </>
  );
}
export default Footer;