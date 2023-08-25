import Input from "../../input";

const ModalEdit = ({ setIsVisible }) => {
  return (
    <>
      <div>
        <h2>Editar Tecnologia</h2>
        <button onClick={() => setIsVisible(false)}>X</button>
      </div>

      <form>
        <div>
          <Input label="Nome" placeholder="Material UI" required />

          <label>Status</label>
          <select>
            <option>Iniciante</option>
            <option>Intermediário</option>
            <option>Avançado</option>
          </select>

          <button>Salvar alterações</button>
        </div>
      </form>
    </>
  );
};

export default ModalEdit;
