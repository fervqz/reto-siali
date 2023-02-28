import { AxiosResponse } from 'axios';
import moment from 'moment';
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import samplesService from '../../services/samples.service';
import UploadIcon from '../UploadIcon';
import { Message, Spinner } from './utils';
import { ErrorFiles } from '../../types/ErrorFiles';

const ImageUploader: React.FC = () => {

    const [hasLargerFile, setHasLargerFile] = useState<boolean>(false);
    const [hasUnsupportedFile, setHasUnsupportedFile] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [sended, setSended] = useState<boolean>(false);
    const [isSucess, setIsSucess] = useState<boolean | undefined>(undefined);

    const onDrop = (files: any, filesRejections: any) => {
        !!filesRejections.length
            ? handleDropRejected(filesRejections)
            : handleDropAccepted(files);
    }

    const handleDropAccepted = (files: any) => {

        setIsLoading(true);

        const payload = {
            name: "New Stack",
            date: moment().format('dd, DD MMM YYYY HH:mm:ss'),
            img_stack: files,
        }

        samplesService.uploadSamples(payload)
            .then((res: AxiosResponse) => setIsSucess(true))
            .catch((error: any) => setIsSucess(false))
            .finally(() => {
                setSended(true);
                setIsLoading(false);
            });
    };

    const handleDropRejected = (fileRejections: any) => {

        setHasLargerFile(false);
        setHasUnsupportedFile(false);

        const errors = fileRejections
            .map((rejection: any) => rejection.errors)
            .flat()
            .map((item: any) => item.code);

        setHasLargerFile(errors.includes(ErrorFiles.FILE_TOO_LARGE));
        setHasUnsupportedFile(errors.includes(ErrorFiles.FILE_INVALID_TYPE));

    }

    const { acceptedFiles, getRootProps, getInputProps, open } = useDropzone({
        onDrop,
        onError: (error: any) => console.log('ERROR', error),
        maxSize: 8192000,
        multiple: true,
        accept: {
            'image/png': ['.png'],
            'image/jpg': ['.jpg'],
        },
    });

    return (
        <section>
            {
                isSucess !== undefined
                    ? <Message isSucess={isSucess} />
                    : (isLoading
                        ? <Spinner />
                        : <div {...getRootProps({ className: 'dropzone' })}>
                            <input {...getInputProps()} />
                            <div className="image-uploader--container">
                                <UploadIcon />
                                <h2 className="subtitle">Arrastrar y soltar imágenes</h2>
                                <p className="text-mutted">JPG and PNG images - max 8 Mb por imagen</p>
                                <input id="dropzone-file" {...getInputProps()} />
                                <p className="mt-4"><span className="text-mutted mr-3">o</span>
                                    <button type="button" onClick={open} className="image-uploader--button">Importar de tu ordenador</button>
                                </p>
                                <div className="absolute bottom-6 text-center">
                                    {hasLargerFile && <p className="text-red-400 text-xs">Solo se admiten archivos menores a 8 Mb</p>}
                                    {hasUnsupportedFile && <p className="text-red-400 text-xs">Solo se admiten archivos JPG o PNG</p>}
                                </div>
                            </div>
                        </div>
                    )
            }
        </section>
    );
}

export default ImageUploader;