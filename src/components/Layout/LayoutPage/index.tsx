import Loader from "../../Loader";
import NavBar from "../../NavBar";

interface Props {
    children: React.ReactNode;
}

const PageLayout: React.FC<Props> = (props: Props) => {
    return (
        <header>
            {/* Background */}
            <div className="absolute bg-white h-[23rem] border-b-2 w-full z-10"></div>

            {/* Main Container */}
            <div className="absolute z-20 w-full">
                <NavBar />
                {props.children}
            </div>
        </header>
    );
}

export default PageLayout;