interface Props {
    length: number;
}

const SkeletoList: React.FC<Props> = (props: Props) => {
    return (
        <div className="w-full mx-auto bg-white overflow-auto">
            {
                (Array(props.length).fill({}).map((_, i) => (
                    <div className="animate-pulse flex space-x-2 border-b-2" key={i}>
                        <div className="rounded-md bg-slate-300 h-8 w-8 ml-2 my-2"></div>
                        <div className="grid grid-cols-4 w-full m-auto gap-2 pr-2">
                            <div className="col-span-2 h-2 bg-slate-300 m-2 rounded"></div>
                            <div className="h-2 bg-slate-300 m-2 rounded"></div>
                            <div className="h-6 bg-slate-300 rounded"></div>
                        </div>
                    </div>
                )))
            }
        </div>
    );
}

export default SkeletoList;