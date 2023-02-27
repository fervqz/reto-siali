import './styles.css';

interface Props {
    isLoading: boolean;
}

const Loader: React.FC<Props> = (props: Props) => {

    return props.isLoading
        ? (
            <div className="absolute flex z-50 h-full w-full m-auto justify-center items-center bg-white">
                <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
            </div>
        )
        : (<></>)


}

export default Loader;