import { Link } from "react-router-dom";
import { Links, SubMenus } from "../../styles";

const SportsMenu = ({ toggleSubMenu, handleToggleSubMenu }) => {

  return (
    <li>  
      <h3>Esportes</h3>
      <SubMenus>
        <div>
          <span onClick={() => handleToggleSubMenu('longboard')}>Longboard</span>
          <Links toggleSubMenu={toggleSubMenu === 'longboard'}>
            <li><Link to='/produtos/longboard/completo'>Completo</Link></li>
            <li><Link to='/produtos/longboard/shapes'>Shapes</Link></li>
            <li><Link to='/produtos/longboard/trucks'>Trucks</Link></li>
            <li><Link to='/produtos/longboard/rodas'>Rodas</Link></li>
            <li><Link to='/produtos/longboard/rolamentos'>Rolamentos</Link></li>
            <li><Link to='/produtos/longboard/amortecedores'>Amortecedores</Link></li>
          </Links>
        </div>
      </SubMenus>
    </li>
  )
}

export default SportsMenu;