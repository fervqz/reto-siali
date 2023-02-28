import { useEffect, useState } from 'react';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SkeletoList from "../../components/Skeleton/SkeletonList";
import samplesService from "../../services/samples.service";
import { sortByDate } from "./utils";
import Sample from '../../types/Sample';
import moment from 'moment';
import { AxiosResponse } from 'axios';

const Searcher: React.FC = () => {

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [samples, setSamples] = useState<Sample[]>([]);
    const [filteredSamples, setFilteredSamples] = useState<Sample[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');

    useEffect(() => {
        handleFilterSamples();
    }, [searchTerm]);

    useEffect(() => {
        samplesService.getSamples()
            .then((response: AxiosResponse) => response.data.records)
            .then((samples: Sample[]) => {
                const sortedSamples = samples.sort((sampleA, sampleB) => sortByDate(sampleA.date, sampleB.date));
                setSamples(sortedSamples);
                setFilteredSamples(sortedSamples);
            })
            .catch((err) => console.error(err))
            .finally(() => setIsLoading(false));
    }, []);

    const handleFilterSamples = () => {
        const filtered = samples.filter((sample: Sample) => (
            sample.name.toLocaleLowerCase().includes(searchTerm) ||
            sample.date.toLocaleLowerCase().includes(searchTerm) ||
            moment(sample.date).fromNow().toLocaleLowerCase().includes(searchTerm)
        ));
        setFilteredSamples(filtered);
    }

    return (
        <>
            <h3 className="mt-4 text-xl font-semibold mb-2">Importar stack reciente</h3>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <SearchOutlinedIcon className="h-5 w-5 inline text-gray-500" />
                </div>
                <input
                    type="text"
                    className="input-file"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value.toLocaleLowerCase())}
                    placeholder="Buscar..."
                />
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
        </>
    );
}

export default Searcher;