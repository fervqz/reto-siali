import moment from "moment";
import { useEffect, useState } from "react";
import SkeletoList from "../../components/Skeleton/SkeletonList";
import UploadIcon from '../../components/UploadIcon';
import samplesService from "../../services/samples.service";
import { ApiResponse } from "../../types/Api";
import Sample from "../../types/Sample";
import { sortByDate } from "./utils";
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const ViewSamples: React.FC = () => {

    const [samples, setSamples] = useState<Sample[]>([]);
    const [filteredSamples, setFilteredSamples] = useState<Sample[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [newSample, setNewSample] = useState<{ images: any[], }>({ images: [], });

    useEffect(() => {
        samplesService.getSamples()
            .then((response: ApiResponse) => response.data.records)
            .then((samples: Sample[]) => {
                const sortedSamples = samples.sort((sampleA, sampleB) => sortByDate(sampleA.date, sampleB.date));
                setSamples(sortedSamples);
                setFilteredSamples(sortedSamples);
            })
            .catch((err) => console.error(err))
            .finally(() => setIsLoading(false));
    }, []);

    useEffect(() => {
        handleFilterSamples();
    }, [searchTerm]);

    const handleFileUpload = (e: any) => {
        console.log(e.target.files);
        Promise.all([...e.target.files].map(URL.createObjectURL))
            .then(imagesSrc => {
                setNewSample({ images: imagesSrc })
            })
    }

    const handleFilterSamples = () => {
        const filtered = samples.filter((sample: Sample) => (
            sample.name.toLocaleLowerCase().includes(searchTerm) ||
            sample.date.toLocaleLowerCase().includes(searchTerm) ||
            moment(sample.date).fromNow().toLocaleLowerCase().includes(searchTerm)
        ));
        setFilteredSamples(filtered);
    }

    const Gallery = () => {
        return (
            <div className="grid grid-cols-8 p-4">
                {newSample.images.map((image, i) => (
                    <div className="cold-span-1" key={`preview-${i}`}>
                        <img src={image} className="px-1 rounded w-15 h-15" />
                    </div>
                ))}
            </div>
        );
    }

    return (
        <>
            <div className="grid md:grid-cols-12 md:gap-5 grid-cols-1 py-10">
                <div className="col-start-3 col-span-8">
                    <h1 className="title">Examinar una nueva muestra.</h1>
                    <p>Para evaluar una nueva muestra, importa un stack de fotos o utiliza uno de los antiores.</p>
                </div>
            </div>

            <div className="grid md:grid-cols-12 md:gap-5 grid-cols-1">

                <div className="md:col-start-3 md:col-span-4 md:my-5 col-start-0 col-span-1 px-6 md:px-0">
                    <div className="card">
                        <label htmlFor="dropzone-file" className="flex flex-col items-center py-[5.6rem] justify-center w-full h-full cursor-pointer rounded-lg hover:bg-gray-100">

                            {
                                newSample.images.length > 0
                                    ? <Gallery />
                                    : <UploadIcon />
                            }

                            <h2 className="subtitle">Arrastrar y soltar imágenes</h2>
                            <p className="text-mutted">JPG and PNG images - max 8 Mb por imagen</p>
                            <p className="mt-4"><span className="text-mutted">o</span>&nbsp;
                                <span className="bg-white py-2 px-4 border-2 border-gray text-xs rounded-sm font-semibold">Importar de tu ordenador</span>
                            </p>
                            <input id="dropzone-file" type="file" className="hidden" accept="image/png, image/jpeg" multiple onChange={handleFileUpload} />
                        </label>
                    </div>
                </div>

                <div className="md:col-span-4 md:my-5 col-span-1 px-6 md:px-0 my-10">
                    <div className="card">

                        <h3 className="mt-4 text-xl font-semibold mb-2">Importar stack reciente</h3>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <SearchOutlinedIcon className="h-5 w-5 inline text-gray-500" />
                            </div>
                            <input type="text" className="input-file" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value.toLocaleLowerCase())} placeholder="Buscar..." />
                        </div>

                        <div className="border mt-4 border-gray-300 rounded-md min-h-72 max-h-72 overflow-auto">

                            {
                                isLoading
                                    ? <SkeletoList length={10} />
                                    : <ul>
                                        {filteredSamples.map((sample, i) => (
                                            <li className="relative px-2 py-3 border-b border-gray-300 hover:bg-gray-50" key={`sample-item-${i}`}>
                                                <ScienceOutlinedIcon className="pl-1 h-5 w-5 inline text-primary-300" />
                                                <span className="pl-2 font-semibold text-sm">{sample.name}</span>
                                                <span className="pl-1 text-mutted">- {moment(sample.date).fromNow()}</span>
                                                <button className="absolute right-0 bg-primary-300 hover:bg-primary-400 mx-2 py-1 px-3 rounded text-xs">
                                                    Importar
                                                </button>
                                            </li>
                                        ))}

                                    </ul>
                            }

                        </div>

                    </div>
                </div>

            </div>
        </>
    );
}

export default ViewSamples;