import ImageUploader from "../../components/ImageUploader";
import PageLayout from "../../components/Layout/LayoutPage";
import Searcher from "../../components/Searcher";

const ViewSamples: React.FC = () => {
    return (
        <PageLayout>
            <div className="grid md:grid-cols-12 md:gap-5 grid-cols-1 py-10 px-6 md:px-0">
                <div className="col-start-3 col-span-8">
                    <h1 className="title">Examinar una nueva muestra.</h1>
                    <p>Para evaluar una nueva muestra, importa un stack de fotos o utiliza uno de los anteriores.</p>
                </div>
            </div>

            <div className="grid md:grid-cols-12 md:gap-5 grid-cols-1">

                <div className="md:col-start-3 md:col-span-4 md:my-5 col-start-0 col-span-1 px-6 md:px-0">
                    <div className="card">
                        <ImageUploader />
                    </div>
                </div>

                <div className="md:col-span-4 md:my-5 col-span-1 px-6 md:px-0 my-10">
                    <div className="card">

                        <Searcher />

                    </div>
                </div>

            </div>
        </PageLayout>
    );
}

export default ViewSamples;