const LayoutContent: React.FC<React.PropsWithChildren> = (props: React.PropsWithChildren) => {
    return (
        <section className="grid grid-cols-12 pt-10">
            <div className="col-start-3 col-span-8 p-5">
                {props.children}
            </div>
        </section>
    );
}

export default LayoutContent;