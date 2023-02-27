import { useState } from 'react';
import UploadIcon from '../UploadIcon';

const ImageUploader = () => {

    const [newSample, setNewSample] = useState<{ images: any[], }>({ images: [], });

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

    const handleFileUpload = (e: any) => {
        console.log(e.target.files);
        Promise.all([...e.target.files].map(URL.createObjectURL))
            .then(imagesSrc => {
                setNewSample({ images: imagesSrc })
            })
    }

    return (
        <label htmlFor="dropzone-file" className="flex flex-col items-center py-[5.6rem] justify-center w-full h-full cursor-pointer rounded-lg hover:bg-gray-100">

            {newSample.images.length > 0 ? <Gallery /> : <UploadIcon />}

            <h2 className="subtitle">Arrastrar y soltar imágenes</h2>
            <p className="text-mutted">JPG and PNG images - max 8 Mb por imagen</p>
            <p className="mt-4"><span className="text-mutted">o</span>&nbsp;
                <span className="bg-white py-2 px-4 border-2 border-gray text-xs rounded-sm font-semibold">Importar de tu ordenador</span>
            </p>
            <input id="dropzone-file" type="file" className="hidden" accept="image/png, image/jpeg" multiple onChange={handleFileUpload} />
        </label>
    );
}

export default ImageUploader;