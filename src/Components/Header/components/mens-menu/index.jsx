import { Link } from "react-router-dom";
import { Links, SubMenus } from "../../styles";

const MensMenu = ({ toggleSubMenu, handleToggleSubMenu }) => {

  return (
    <li>
      <h3>Masculino</h3>
      <SubMenus>
        <div>
          <span onClick={() => handleToggleSubMenu('masculino-roupas')}>Roupas</span>

          <Links toggleSubMenu={toggleSubMenu === 'masculino-roupas'}>
            <li><Link to='/produtos/roupas/camisas?genre=masculino'>Camisas</Link></li>
            <li><Link to='/produtos/roupas/camisetas?genre=masculino'>Camisetas</Link></li>
            <li><Link to='/produtos/roupas/calcas?genre=masculino'>Calças</Link></li>
            <li><Link to='/produtos/roupas/bermudas?genre=masculino'>Bermudas</Link></li>
            <li><Link to='/produtos/roupas/moletons?genre=masculino'>Moletons</Link></li>
            <li><Link to='/produtos/roupas/jaquetas?genre=masculino'>Jaquetas</Link></li>
          </Links>
        </div>

        <div>
          <span onClick={() => handleToggleSubMenu('masculino-calcados')}>Calçados</span>
          <Links toggleSubMenu={toggleSubMenu === 'masculino-calcados'}>
            <li><Link to='/produtos/calçados/tenis?genre=masculino'>Tênis</Link></li>
            <li><Link to='/produtos/calçados/chinelos?genre=masculino'>Chinelos</Link></li>
          </Links>
        </div>

        <div>
          <span onClick={() => handleToggleSubMenu('masculino-acessorios')}>Acessórios</span>
          <Links toggleSubMenu={toggleSubMenu === 'masculino-acessorios'}>
            <li><Link to='/produtos/acessorios/mochilas?genre=masculino'>Mochilas</Link></li>
            <li><Link to='/produtos/acessorios/bones?genre=masculino'>Bones</Link></li>
            <li><Link to='/produtos/acessorios/carteiras?genre=masculino'>Carteiras</Link></li>
            <li><Link to='/produtos/acessorios/cintos?genre=masculino'>Cintos</Link></li>
            <li><Link to='/produtos/acessorios/toucas?genre=masculino'>Toucas</Link></li>
            <li><Link to='/produtos/acessorios/meias?genre=masculino'>Meias</Link></li>
            <li><Link to='/produtos/acessorios/oculos?genre=masculino'>Oculos</Link></li>
          </Links>
        </div>
      </SubMenus>
    </li>
  )
}

export default MensMenu;