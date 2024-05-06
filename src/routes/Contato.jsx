import {} from 'react';
import '../css/estilo.css';

function Contato() {
  return (
    <>
       <h2 className='PageTitle'>Entre em Contato</h2>
      <section className='Contact'>
        <form action="">
          <label htmlFor="name">Nome:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="message">Mensagem:</label>
          <textarea name="message" id="message" cols="30" rows="10" required></textarea>
          <button>Enviar</button>
        </form>
        <div className='ContactInfo'>
          <h3>Informações de Contato</h3>
          <p>Telefone: (11) 99999-9999</p>
        </div>
      </section>
    </>
  );
}
export default Contato;