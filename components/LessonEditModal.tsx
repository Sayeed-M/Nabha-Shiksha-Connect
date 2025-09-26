import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Lesson, UploadedFile } from '../types';
import { VideoIcon, FileTextIcon, ImageIcon, XIcon } from './icons/Icons';

interface LessonEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (lessonData: Omit<Lesson, 'id' | 'isOffline' | 'isCompleted' | 'offlineContent'>) => void;
  lesson: Lesson | null;
  uploadedFiles: UploadedFile[];
}

const getFileIcon = (type: UploadedFile['type']) => {
    switch (type) {
        case 'video': return <VideoIcon className="h-6 w-6 text-brand-blue" />;
        case 'pdf':
        case 'doc': return <FileTextIcon className="h-6 w-6 text-brand-blue" />;
        case 'image': return <ImageIcon className="h-6 w-6 text-brand-blue" />;
        default: return <FileTextIcon className="h-6 w-6 text-brand-blue" />;
    }
};

const LessonEditModal: React.FC<LessonEditModalProps> = ({ isOpen, onClose, onSave, lesson, uploadedFiles }) => {
  const { t } = useLanguage();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState<'video' | 'pdf' | 'quiz'>('video');
  const [selectedFileId, setSelectedFileId] = useState<string | undefined>(undefined);
  const [isExploringFiles, setIsExploringFiles] = useState(false);

  useEffect(() => {
    if (isOpen) {
        setIsExploringFiles(false); // Reset to form view on open
        if (lesson) {
            setTitle(lesson.title);
            setDescription(lesson.description);
            setType(lesson.type);
            setSelectedFileId(lesson.fileId);
        } else {
            setTitle('');
            setDescription('');
            setType('video');
            setSelectedFileId(undefined);
        }
    }
  }, [lesson, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      title,
      description,
      type,
      fileId: selectedFileId,
    });
  };
  
  const handleFileSelect = (file: UploadedFile) => {
      setSelectedFileId(file.id);
      setIsExploringFiles(false);
  };

  const selectedFileName = selectedFileId ? uploadedFiles.find(f => f.id === selectedFileId)?.name : t('noFileSelected');

  return (
    <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="lesson-modal-title"
    >
      <div 
        className="bg-white rounded-lg shadow-xl w-full max-w-lg"
        onClick={(e) => e.stopPropagation()}
    >
        <div className="p-6 border-b flex justify-between items-center">
          <h3 id="lesson-modal-title" className="text-xl font-bold text-brand-blue-dark">
            {isExploringFiles ? t('selectAFile') : (lesson ? t('editLesson') : t('addLesson'))}
          </h3>
          <button onClick={onClose} className="p-1 text-gray-400 hover:text-gray-700">
            <XIcon className="h-5 w-5" />
          </button>
        </div>

        {isExploringFiles ? (
          <>
            <div className="p-4 space-y-2 max-h-96 overflow-y-auto">
              {uploadedFiles.length > 0 ? (
                uploadedFiles.map(file => (
                    <div key={file.id} className="p-2 flex items-center justify-between hover:bg-brand-light rounded-md">
                        <div className="flex items-center space-x-3">
                            {getFileIcon(file.type)}
                            <span className="font-medium text-sm text-gray-800 truncate">{file.name}</span>
                        </div>
                        <button 
                            onClick={() => handleFileSelect(file)}
                            className="px-3 py-1 text-sm font-semibold bg-brand-blue text-white rounded-full hover:bg-brand-blue-dark transition"
                        >
                            {t('select')}
                        </button>
                    </div>
                ))
              ) : (
                <p className="text-center text-gray-500 py-8">{t('noFilesUploaded')}</p>
              )}
            </div>
            <div className="p-4 bg-gray-50 flex justify-end">
              <button
                type="button"
                onClick={() => setIsExploringFiles(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
              >
                {t('back')}
              </button>
            </div>
          </>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="p-6 space-y-4">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">{t('title')}</label>
                <input id="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue" />
              </div>
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">{t('description')}</label>
                <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} required rows={3} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue" />
              </div>
              <div>
                <label htmlFor="type" className="block text-sm font-medium text-gray-700">{t('lessonType')}</label>
                <select id="type" value={type} onChange={(e) => setType(e.target.value as 'video' | 'pdf' | 'quiz')} className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue">
                  <option value="video">Video</option>
                  <option value="pdf">PDF</option>
                  <option value="quiz">Quiz</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">{t('sourceFile')}</label>
                <div className="mt-1 flex items-center justify-between p-2 pr-1 border border-gray-300 rounded-md bg-white">
                  <span className="truncate text-sm text-gray-800" title={selectedFileName}>
                    {selectedFileName}
                  </span>
                  <div className="flex-shrink-0 flex items-center space-x-1">
                      {selectedFileId && (
                          <button type="button" onClick={() => setSelectedFileId(undefined)} className="p-1 rounded-full text-gray-400 hover:bg-gray-100 hover:text-red-600" title={t('clearSelection')}>
                              <XIcon className="h-4 w-4" />
                          </button>
                      )}
                      <button
                          type="button"
                          onClick={() => setIsExploringFiles(true)}
                          className="px-3 py-1 text-sm font-medium text-brand-blue border border-brand-blue rounded-md hover:bg-brand-light transition-colors"
                      >
                          {t('browseFiles')}
                      </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 bg-gray-50 flex justify-end space-x-2">
              <button type="button" onClick={onClose} className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                {t('cancel')}
              </button>
              <button type="submit" className="px-4 py-2 text-sm font-medium text-white bg-brand-blue rounded-md hover:bg-brand-blue-dark">
                {t('save')}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default LessonEditModal;