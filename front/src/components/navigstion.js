import {Link} from 'react-router-dom'
import './Home.css'
import {list} from 'phosphor-icons'
import * as Dialog from '@radix-ui/react-dialog'
import * as DropDownMenu from '@radix-ui/react-dropdown-menu  '

export function landinNavigation (){
  return(
    <header>
      <DropDownMenu.Root>
        <DropDownMenu.Trigger>
          <button>
            <List size={24}/>
          </button>
        </DropDownMenu.Trigger>
      </DropDownMenu.Root>

      <div>
        <div> {/ Suporte*/}

        </div>

        <div>{/ Nome da empresa e Logo*/}

        </div>
      </div>
    </header>
  )
}
export function Navigation(){

return(
    <header className="home-header">
        <div className="home-logo"></div>
        <nav className="home-nav">
          <ul className="home-nav-list">
            <li className="home-nav-item">
              <Link to='/Produto' className="home-nav-link">Produtos</Link>
            </li>
            <li className="home-nav-item">
              <Link to="/Financeiro" className="home-nav-link">Financeiro</Link>
            </li>
            <li className="home-nav-item">
              <Link to="/Documento" className="home-nav-link">Documento</Link>
            </li>
            <li className="home-nav-item">
              <Link to="/Parceiro" className="home-nav-link">Parceiro</Link>
            </li>
            <li className="home-nav-item">
              <Link to="/Register" className="home-nav-link">Registrar</Link>
            </li>
            <li className="home-nav-item">
              <Link to="/Login" className="home-nav-link">Logar</Link>
            </li>
          </ul>
        </nav>
      </header>
)
}