import { Link } from "react-router-dom";
import { Links, SubMenus } from "../../styles";

const WomansMenu = ({ toggleSubMenu, handleToggleSubMenu }) => {

  return (
    <li>
      <h3>Feminino</h3>
      <SubMenus>
        <div>
          <span onClick={() => handleToggleSubMenu('feminino-roupas')}>Roupas</span>
          <Links toggleSubMenu={toggleSubMenu === 'feminino-roupas'}>
            <li><Link to='/produtos/roupas/camisas?genre=feminino'>Camisas</Link></li>
            <li><Link to='/produtos/roupas/camisetas?genre=feminino'>Camisetas</Link></li>
            <li><Link to='/produtos/roupas/calcas?genre=feminino'>Calças</Link></li>
            <li><Link to='/produtos/roupas/shorts?genre=feminino'>Shorts</Link></li>
            <li><Link to='/produtos/roupas/moletons?genre=feminino'>Moletons</Link></li>
            <li><Link to='/produtos/roupas/jaquetas?genre=feminino'>Jaquetas</Link></li>
          </Links>
        </div>

        <div>
          <span onClick={() => handleToggleSubMenu('feminino-calcados')}>Calçados</span>
          <Links toggleSubMenu={toggleSubMenu === 'feminino-calcados'}>
            <li><Link to='/produtos/calcados/tenis?genre=feminino'>Tênis</Link></li>
            <li><Link to='/produtos/calcados/chinelos?genre=feminino'>Chinelos</Link></li>
          </Links>
        </div>

        <div>
          <span onClick={() => handleToggleSubMenu('feminino-acessorios')}>Acessórios</span>
          <Links toggleSubMenu={toggleSubMenu === 'feminino-acessorios'}>
            <li><Link to='/produtos/acessorios/mochilas?genre=feminino'>Mochilas</Link></li>
            <li><Link to='/produtos/acessorios/bones?genre=feminino'>Bonés</Link></li>
            <li><Link to='/produtos/acessorios/carteiras?genre=feminino'>Carteiras</Link></li>
            <li><Link to='/produtos/acessorios/cintos?genre=feminino'>Cintos</Link></li>
            <li><Link to='/produtos/acessorios/toucas?genre=feminino'>Toucas</Link></li>
            <li><Link to='/produtos/acessorios/meias?genre=feminino'>Meias</Link></li>
            <li><Link to='/produtos/acessorios/oculos?genre=feminino'>Oculos</Link></li>
          </Links>
        </div>
      </SubMenus>
    </li>
  )
}

export default WomansMenu;