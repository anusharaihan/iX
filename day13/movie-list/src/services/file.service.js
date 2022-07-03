import {
    ref,
    uploadBytesResumable,
    getDownloadURL,
    deleteObject
} from 'firebase/storage'

import {storage} from '../firebase/firebase'

class FileService {
    uploadImage(file, onUploadProgress) {
        return new Promise((resolve, reject) => {
            const fileRef =ref(storage, 'images/' + file.name);
            const uploadTask = uploadBytesResumable(fileRef,file)
            uploadTask.on('state_changed',
                (snapshot) => {
                    //handle update
                    this.handleProgressUpdate(snapshot, onUploadProgress)
                },
                (error) => {
                    //handle error
                    reject(error.message); //change this switch for each error
                },
                () => {
                    //get downloadUrl for complete upload
                    //resolve our promise
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
                        //resolve the download url
                        resolve(downloadUrl);
                    })
                }
            );
        });
    }

    getUniqueFileName(file) {
        const dotIndex = file.name.lastIndexOf('.');

        const fileName = file.name.substring(0, dotIndex);
        const fileExtension = file.name.substring(dotIndex);
        const timestamp = (new Date()).getTime();
        return fileName + '-' + timestamp + fileExtension;

    }


    handleProgressUpdate(snapshot, onUploadProgress) {
        if (onUploadProgress) {
            const progress = snapshot.bytesTransferred / snapshot/totalBytes * 100;
            onUploadProgress(progress);
        }
    }

    async deleteFile(downloadUrl) {
        //get a reference to the file to delete
        const fileRef = ref(storage, downloadUrl);
        //use the reference to delete the file
        await deleteObject(fileRef);
    }

}


const service = new FileService();

try {
    const value = await service.uploadImage(file);
} catch(err) {

}

service.uploadImage(file).then((value) => {});
export default service;