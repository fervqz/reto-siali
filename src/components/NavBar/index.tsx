import logoSiali from '../../assets/logo-siali.png';
import { RoutePaths } from '../../types/RoutePaths';

const NavBar: React.FC = () => {
    return (
        <div className="grid grid-cols-12">
            <div className="col-span-2 p-3 ml-4">
                <img src={logoSiali} alt="" width={100} />
            </div>
            <div className="col-span-8 h-auto">
                <ul className="flex text-lg font-semibold  h-full">
                    <li className="flex items-bottom">
                        <a href={RoutePaths.SAMPLES} className="mt-auto py-1 mr-10 mb-6 border-b-2 border-black text-black ">Muestras</a>
                    </li>
                    <li className="flex items-bottom">
                        <a href={RoutePaths.CONFIGURATION} className="mt-auto py-1 mr-10 mb-6 text-gray-600 hover:text-black border-b-2 border-transparent hover:border-b-2 hover:border-black">Configuración</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;