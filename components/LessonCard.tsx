import React from 'react';
import { Lesson, UploadedFile, UserRole } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import { DownloadCloudIcon, CheckCircleIcon, CheckSquareIcon, LoaderIcon, PencilIcon, TrashIcon } from './icons/Icons';

interface LessonCardProps {
    lesson: Lesson;
    onDownload: (id: string) => void;
    onToggleComplete: (id: string) => void;
    isDownloading: boolean;
    onEdit: (lesson: Lesson) => void;
    onDelete: (id: string) => void;
    uploadedFiles: UploadedFile[];
}

export const LessonCard: React.FC<LessonCardProps> = ({ lesson, onDownload, onToggleComplete, isDownloading, onEdit, onDelete, uploadedFiles }) => {
    const { t } = useLanguage();
    const { currentUser } = useAuth();
    const isTeacherOrAdmin = currentUser?.role === UserRole.TEACHER || currentUser?.role === UserRole.ADMIN;

    const lessonFile = lesson.fileId ? uploadedFiles.find(f => f.id === lesson.fileId) : null;

    return (
        <div className={`bg-white p-4 rounded-lg shadow-md flex items-center justify-between transition-opacity ${lesson.isCompleted && !isTeacherOrAdmin ? 'opacity-70' : ''}`}>
            <div>
                <h4 className={`font-bold text-brand-dark ${lesson.isCompleted && !isTeacherOrAdmin ? 'line-through text-gray-500' : ''}`}>{lesson.title}</h4>
                <p className="text-sm text-gray-500">{lesson.description}</p>
            </div>
            <div className="flex items-center space-x-2">
                 {isTeacherOrAdmin ? (
                    <>
                        <button onClick={() => onEdit(lesson)} className="p-2 text-gray-600 hover:text-brand-blue transition-colors" title={t('edit')}>
                            <PencilIcon className="h-5 w-5" />
                        </button>
                        <button onClick={() => onDelete(lesson.id)} className="p-2 text-gray-600 hover:text-red-500 transition-colors" title={t('delete')}>
                            <TrashIcon className="h-5 w-5" />
                        </button>
                    </>
                 ) : (
                    <>
                        <button
                            onClick={() => onToggleComplete(lesson.id)}
                            title={t(lesson.isCompleted ? 'completed' : 'markAsComplete')}
                            className={`p-2 rounded-full transition-colors ${lesson.isCompleted ? 'text-green-600 bg-green-100' : 'text-gray-500 hover:bg-gray-100'}`}
                            aria-label={t(lesson.isCompleted ? 'completed' : 'markAsComplete')}
                        >
                            {lesson.isCompleted ? <CheckCircleIcon className="h-5 w-5" /> : <CheckSquareIcon className="h-5 w-5" />}
                        </button>
                        {lessonFile ? (
                             <a href={lessonFile.url} target="_blank" rel="noopener noreferrer" download={lessonFile.name} className="px-3 py-1 text-sm font-semibold bg-brand-green text-white rounded-full hover:bg-opacity-90 transition">
                                {t('view')}
                            </a>
                        ) : (
                            <button 
                                className="px-3 py-1 text-sm font-semibold bg-gray-300 text-gray-500 rounded-full cursor-not-allowed" 
                                title="No material available for this lesson">
                                {t('view')}
                            </button>
                        )}
                        {lesson.isOffline ? (
                            <div className="flex items-center text-green-600 px-3 py-1">
                                <CheckCircleIcon className="h-5 w-5 mr-1" />
                                <span className="text-sm font-medium">{t('downloaded')}</span>
                            </div>
                        ) : (
                            <button 
                                onClick={() => onDownload(lesson.id)}
                                disabled={isDownloading}
                                className="flex items-center justify-center w-[130px] px-3 py-1 text-sm font-semibold bg-brand-blue text-white rounded-full hover:bg-brand-blue-dark transition disabled:bg-gray-400 disabled:cursor-wait"
                            >
                                {isDownloading ? (
                                    <>
                                        <LoaderIcon className="h-5 w-5 mr-1 animate-spin" />
                                        {t('downloading')}
                                    </>
                                ) : (
                                    <>
                                        <DownloadCloudIcon className="h-5 w-5 mr-1" />
                                        {t('download')}
                                    </>
                                )}
                            </button>
                        )}
                    </>
                 )}
            </div>
        </div>
    );
};