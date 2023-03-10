import { NavLink } from 'react-router-dom';
import logoSiali from '../../assets/logo-siali.png';
import { RoutePaths } from '../../types/RoutePaths';

interface NavItem {
    to: string;
    title: string;
}

const NavBar: React.FC = () => {

    const navItems: NavItem[] = [
        { to: RoutePaths.SAMPLES, title: 'Muestras' },
        { to: RoutePaths.CONFIGURATION, title: 'Configuración' },
    ];

    return (
        <div className="grid grid-cols-12">
            <div className="col-span-2 p-3 ml-4">
                <img src={logoSiali} alt="" width={100} />
            </div>
            <div className="col-span-8 h-auto">
                <ul className="flex text-lg font-semibold  h-full">
                    {navItems.map((item: NavItem) => (
                        <li className="flex items-bottom" key={item.to}>
                            <NavLink
                                to={item.to}
                                className={({ isActive }) =>
                                    `navbar-item ${isActive
                                        ? 'border-almostblack-300 text-almostblack-300'
                                        : 'border-transparent'
                                    }`
                                }
                            >
                                {item.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default NavBar;