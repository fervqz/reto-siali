import { AxiosResponse } from 'axios';
import moment from 'moment';
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import samplesService from '../../services/samples.service';
import UploadIcon from '../UploadIcon';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import RestartAltOutlinedIcon from '@mui/icons-material/RestartAltOutlined';
import { Message, Spinner } from './utils';

interface Error {
    code: string;
    message: string;
}

const ImageUploader: React.FC = () => {

    const [hasLargerFile, setHasLargerFile] = useState<boolean>(false);
    const [hasUnsupportedFile, setHasUnsupportedFile] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [sended, setSended] = useState<boolean>(false);
    const [message, setMessage] = useState<{ icon: any, text: string }>({
        icon: <CheckCircleOutlineOutlinedIcon />,
        text: 'Muestra importada correctamente'
    });

    const onDrop = (files: any, error: any) => {

        const errorCode = error[0]?.errors[0].code;
        setHasLargerFile(false);

        if (!!error && errorCode === 'file-too-large') {
            setHasLargerFile(true);
            return;
        }

        const payload = {
            name: "New Stack",
            date: moment().format('dd, DD MMM YYYY HH:mm:ss'), // Fri, 01 Jan 2010 00:00:00 GMT
            img_stack: files
        }

        console.log('PAYLOAD', payload);

        setIsLoading(true);
        samplesService.uploadSamples(payload)
            .then((res: AxiosResponse) => {
                console.log('RESPONSE', res);
                setMessage({
                    icon: <CheckCircleOutlineOutlinedIcon className='w-25 h-25' />,
                    text: 'Muestra importada correctamente',
                });
            })
            .catch((error: any) => {
                console.log('ERROR', error);
                setMessage({
                    icon: <CancelOutlinedIcon className='w-25 h-25' />,
                    text: 'Hubo un error al importar la muestra',
                });
            })
            .finally(() => {
                console.log('FINALLY');
                setSended(true);
                setIsLoading(false);
            })

    };

    const { acceptedFiles, getRootProps, getInputProps, open } = useDropzone({
        onDrop,
        maxSize: 8192000,
        multiple: true,
        accept: { 'image/*': ['.jpg', '.png'], }
    });

    const files = acceptedFiles.map((file: any) => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));

    return (
        <section>
            {
                sended
                    ? <Message {...message} />
                    : (isLoading
                        ? <Spinner />
                        : <div {...getRootProps({ className: 'dropzone' })}>
                            <input {...getInputProps()} />
                            <div className="flex flex-col relative items-center py-[5.2rem] justify-center w-full h-full cursor-pointer rounded-lg border-2 border-transparent border-dashed hover:bg-gray-100 hover:border-2 hover:border-gray-300">
                                <UploadIcon />
                                <h2 className="subtitle">Arrastrar y soltar imágenes</h2>
                                <p className="text-mutted">JPG and PNG images - max 8 Mb por imagen</p>
                                <input id="dropzone-file" {...getInputProps()} />
                                <p className="mt-4"><span className="text-mutted">o</span>&nbsp;
                                    <button type="button" onClick={open} className="bg-white py-2 px-4 border-2 border-gray text-xs rounded-sm font-semibold">Importar de tu ordenador</button>
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