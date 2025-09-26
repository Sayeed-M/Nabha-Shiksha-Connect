import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import { View, UploadedFile } from '../types';
import BackButton from './BackButton';
import { UploadCloudIcon, VideoIcon, FileTextIcon, ImageIcon } from './icons/Icons';

interface FileManagementProps {
  setView: (view: View) => void;
}

const FILES_STORAGE_KEY = 'nabha-shiksha-files';

const getFileType = (fileName: string): UploadedFile['type'] => {
    const extension = fileName.split('.').pop()?.toLowerCase() || '';
    if (['mp4', 'mov', 'avi', 'webm'].includes(extension)) return 'video';
    if (['pdf', 'doc', 'docx', 'txt'].includes(extension)) return 'doc';
    if (['jpg', 'jpeg', 'png', 'gif'].includes(extension)) return 'image';
    return 'other';
};

const readFileAsDataURL = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
};

const FileCard: React.FC<{ file: UploadedFile, onDelete: (id: string) => void }> = ({ file, onDelete }) => {
    const { t } = useLanguage();
    
    const getFileIcon = (type: UploadedFile['type']) => {
        switch (type) {
            case 'video': return <VideoIcon className="h-8 w-8 text-brand-blue" />;
            case 'pdf':
            case 'doc': return <FileTextIcon className="h-8 w-8 text-brand-blue" />;
            case 'image': return <ImageIcon className="h-8 w-8 text-brand-blue" />;
            default: return <FileTextIcon className="h-8 w-8 text-brand-blue" />;
        }
    };
    return (
         <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
            <div className="flex items-center space-x-4">
                {getFileIcon(file.type)}
                <div>
                    <h4 className="font-semibold text-brand-dark break-all">{file.name}</h4>
                    <p className="text-xs text-gray-500">{t('uploadedBy')}: {file.uploaderName}</p>
                </div>
            </div>
            <button onClick={() => onDelete(file.id)} className="px-3 py-1 text-sm font-semibold bg-red-500 text-white rounded-full hover:bg-red-600 transition">
                {t('delete')}
            </button>
        </div>
    );
};

const FileManagement: React.FC<FileManagementProps> = ({ setView }) => {
  const { t } = useLanguage();
  const { currentUser } = useAuth();
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
      try {
          const savedFiles = localStorage.getItem(FILES_STORAGE_KEY);
          setFiles(savedFiles ? JSON.parse(savedFiles) : []);
      } catch (error) {
          console.error("Failed to load files from localStorage", error);
      }
  }, []);
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files[0]) {
          setSelectedFile(e.target.files[0]);
      }
  };

  const handleUpload = async () => {
    if (!selectedFile || !currentUser) return;
    setIsUploading(true);

    try {
        const fileDataUrl = await readFileAsDataURL(selectedFile);
        const newFile: UploadedFile = {
            id: Date.now().toString(),
            name: selectedFile.name,
            type: getFileType(selectedFile.name),
            url: fileDataUrl,
            uploaderId: currentUser.id,
            uploaderName: currentUser.name,
        };
        const updatedFiles = [...files, newFile];
        setFiles(updatedFiles);
        localStorage.setItem(FILES_STORAGE_KEY, JSON.stringify(updatedFiles));
        setSelectedFile(null); // Reset file input
    } catch (error) {
        console.error("Error uploading file:", error);
        alert("Failed to upload file.");
    } finally {
        setIsUploading(false);
    }
  };

  const handleDelete = (id: string) => {
      if (window.confirm("Are you sure you want to delete this file?")) {
          const updatedFiles = files.filter(f => f.id !== id);
          setFiles(updatedFiles);
          localStorage.setItem(FILES_STORAGE_KEY, JSON.stringify(updatedFiles));
      }
  };

  return (
    <div>
      <BackButton setView={setView} />
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-brand-blue-dark">{t('fileManagementTitle')}</h2>
        <p className="text-gray-600 mt-2">{t('fileManagementDesc')}</p>
      </div>

      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg mb-8">
        <h3 className="text-xl font-bold text-brand-dark mb-4">{t('uploadFile')}</h3>
        <div className="flex items-center space-x-4">
            <label className="w-full flex items-center px-4 py-2 bg-white text-brand-blue rounded-lg border-2 border-dashed border-brand-blue cursor-pointer hover:bg-brand-light">
                <UploadCloudIcon className="w-6 h-6 mr-2" />
                <span className="flex-grow text-sm font-medium truncate">{selectedFile ? selectedFile.name : t('selectFile')}</span>
                <input type='file' className="hidden" onChange={handleFileChange} />
            </label>
            <button onClick={handleUpload} disabled={!selectedFile || isUploading} className="px-6 py-2 bg-brand-blue text-white font-semibold rounded-lg hover:bg-brand-blue-dark disabled:bg-gray-400 transition">
                {isUploading ? t('downloading') : t('uploadFile')}
            </button>
        </div>
      </div>
      
      <div className="max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold text-brand-dark mb-4">{t('uploadedFiles')}</h3>
        <div className="space-y-4">
            {files.length > 0 ? (
                files.map(file => <FileCard key={file.id} file={file} onDelete={handleDelete} />)
            ) : (
                <p className="text-center text-gray-500 py-8">{t('noFilesUploaded')}</p>
            )}
        </div>
      </div>
    </div>
  );
};

export default FileManagement;
