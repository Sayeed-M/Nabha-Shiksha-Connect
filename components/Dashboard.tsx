
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import { View, Lesson, UploadedFile, UserRole, Classroom, User } from '../types';
import { ComputerIcon, UsersIcon, SparklesIcon, VideoIcon, FileTextIcon, ImageIcon, SlidersIcon } from './icons/Icons';
import type { Locale } from '../data/locales';
import LessonEditModal from './LessonEditModal';
import { LessonCard } from './LessonCard';
import RoleDistributionChart from './RoleDistributionChart';

interface DashboardProps {
  setView: (view: View) => void;
}

const initialLessons: Lesson[] = [
    { id: '1', title: 'Maths: Algebra Basics', description: 'Introduction to variables and equations.', type: 'video', isOffline: false, isCompleted: false },
    { id: '2', title: 'Science: The Solar System', description: 'A journey through our cosmic neighborhood.', type: 'pdf', isOffline: true, isCompleted: false, offlineContent: 'This lesson on The Solar System is pre-downloaded for offline access.' },
    { id: '3', title: 'History: Ancient India', description: 'Learn about the Indus Valley Civilization.', type: 'video', isOffline: false, isCompleted: false },
    { id: '4', title: 'Geography: Rivers of Punjab', description: 'Quiz on the major rivers.', type: 'quiz', isOffline: true, isCompleted: false, offlineContent: 'This quiz on the Rivers of Punjab is pre-downloaded for offline access.' },
];

const LESSONS_STORAGE_KEY = 'nabha-shiksha-lessons';
const FILES_STORAGE_KEY = 'nabha-shiksha-files';
const CLASSROOMS_STORAGE_KEY = 'nabha-shiksha-classrooms';
const USERS_STORAGE_KEY = 'nabha-shiksha-users';

const FeatureCard: React.FC<{ title: string; description: string; icon: React.ReactNode; onClick: () => void }> = ({ title, description, icon, onClick }) => (
    <div 
        className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col items-start"
        onClick={onClick}
        role="button"
        tabIndex={0}
        onKeyPress={(e) => e.key === 'Enter' && onClick()}
    >
        <div className="p-3 bg-brand-light rounded-full mb-4">
            {icon}
        </div>
        <h3 className="text-lg font-bold text-brand-blue-dark mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
    </div>
);

const UploadedFileCard: React.FC<{ file: UploadedFile }> = ({ file }) => {
    const { t } = useLanguage();
    
    const getFileIcon = (type: UploadedFile['type']) => {
        switch (type) {
            case 'video': return <VideoIcon className="h-6 w-6 text-brand-blue" />;
            case 'pdf':
            case 'doc': return <FileTextIcon className="h-6 w-6 text-brand-blue" />;
            case 'image': return <ImageIcon className="h-6 w-6 text-brand-blue" />;
            default: return <FileTextIcon className="h-6 w-6 text-brand-blue" />;
        }
    };

    return (
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
            <div className="flex items-center space-x-3">
                <div className="p-2 bg-brand-light rounded-full">{getFileIcon(file.type)}</div>
                <div>
                    <h4 className="font-bold text-brand-dark">{file.name}</h4>
                    <p className="text-xs text-gray-500">{t('uploadedBy')}: {file.uploaderName}</p>
                </div>
            </div>
            <a href={file.url} target="_blank" rel="noopener noreferrer" download={file.name} className="px-3 py-1 text-sm font-semibold bg-brand-green text-white rounded-full hover:bg-opacity-90 transition">
                {t('view')}
            </a>
        </div>
    );
};


const Dashboard: React.FC<DashboardProps> = ({ setView }) => {
  const { t } = useLanguage();
  const { currentUser } = useAuth();
  const [lessons, setLessons] = useState<Lesson[]>(() => {
      try {
          const savedLessons = localStorage.getItem(LESSONS_STORAGE_KEY);
          return savedLessons ? JSON.parse(savedLessons) : initialLessons;
      } catch (error) {
          return initialLessons;
      }
  });
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingLesson, setEditingLesson] = useState<Lesson | null>(null);
  const [myClassrooms, setMyClassrooms] = useState<Classroom[]>([]);
  const [allUsers, setAllUsers] = useState<User[]>([]);

  const isTeacher = currentUser?.role === UserRole.TEACHER;
  const isStudent = currentUser?.role === UserRole.STUDENT;
  const isAdmin = currentUser?.role === UserRole.ADMIN;

  useEffect(() => {
    try {
      const savedFiles = localStorage.getItem(FILES_STORAGE_KEY);
      setUploadedFiles(savedFiles ? JSON.parse(savedFiles) : []);
      const users = localStorage.getItem(USERS_STORAGE_KEY);
      setAllUsers(users ? JSON.parse(users) : []);

      if (isStudent) {
        const classroomsRaw = localStorage.getItem(CLASSROOMS_STORAGE_KEY);
        const allClassrooms: Classroom[] = classroomsRaw ? JSON.parse(classroomsRaw) : [];
        const studentClassrooms = allClassrooms.filter(c => c.studentIds.includes(currentUser.id));
        setMyClassrooms(studentClassrooms);
      }
    } catch (error) {
      console.error("Failed to parse data from localStorage", error);
    }
  }, [isStudent, currentUser?.id]);

  useEffect(() => {
      localStorage.setItem(LESSONS_STORAGE_KEY, JSON.stringify(lessons));
  }, [lessons]);

  const handleDownload = async (id: string) => {
    setDownloadingId(id);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setLessons(lessons.map(l => {
        if (l.id === id) {
            const offlineContent = `Offline content for "${l.title}".`;
            return { ...l, isOffline: true, offlineContent };
        }
        return l;
    }));
    setDownloadingId(null);
  };
  
  const handleToggleComplete = (id: string) => {
      setLessons(lessons.map(l => l.id === id ? { ...l, isCompleted: !l.isCompleted } : l));
  };
  
  const handleAddLesson = () => {
    setEditingLesson(null);
    setIsModalOpen(true);
  };

  const handleEditLesson = (lesson: Lesson) => {
    setEditingLesson(lesson);
    setIsModalOpen(true);
  };

  const handleDeleteLesson = (id: string) => {
    if (window.confirm(t('deleteLessonConfirm'))) {
        setLessons(lessons.filter(l => l.id !== id));
    }
  };

  const handleSaveLesson = (lessonData: Omit<Lesson, 'id' | 'isOffline' | 'isCompleted' | 'offlineContent'>) => {
    if (editingLesson) {
        setLessons(lessons.map(l => l.id === editingLesson.id ? { ...l, ...lessonData } : l));
    } else {
        const newLesson: Lesson = {
            id: Date.now().toString(),
            ...lessonData,
            isOffline: false,
            isCompleted: false,
        };
        setLessons([...lessons, newLesson]);
    }
    setIsModalOpen(false);
    setEditingLesson(null);
  };

  const categorizedFiles = uploadedFiles.reduce((acc, file) => {
    let category: keyof typeof acc = 'other';
    if (file.type === 'video') category = 'videos';
    else if (file.type === 'doc' || file.type === 'pdf') category = 'documents';
    else if (file.type === 'image') category = 'images';
    
    if (!acc[category]) {
        acc[category] = [];
    }
    acc[category].push(file);
    return acc;
  }, {} as Record<'videos' | 'documents' | 'images' | 'other', UploadedFile[]>);


  return (
    <div className="space-y-8">
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <h2 className="text-3xl font-bold text-brand-blue-dark mb-2">{t('welcome')}, {currentUser?.name}!</h2>
            <p className="text-gray-600">{t('welcomeDesc')}</p>
        </div>

        {(isTeacher || isAdmin) && allUsers.length > 0 && (
            <RoleDistributionChart users={allUsers} />
        )}

        <div className={`grid grid-cols-1 ${(isTeacher || isAdmin) ? 'md:grid-cols-3' : 'md:grid-cols-2'} gap-6`}>
            <FeatureCard title={t('digitalSkills')} description={t('digitalSkillsDesc')} icon={<ComputerIcon className="h-8 w-8 text-brand-blue"/>} onClick={() => setView(View.DIGITAL_SKILLS)}/>
            {isTeacher && 
                <FeatureCard title={t('teacherPortal')} description={t('teacherPortalDesc')} icon={<UsersIcon className="h-8 w-8 text-brand-blue"/>} onClick={() => setView(View.TEACHER_PORTAL)}/>
            }
            {isAdmin &&
                <FeatureCard title={t('userManagement')} description={t('userManagementDesc')} icon={<SlidersIcon className="h-8 w-8 text-brand-blue"/>} onClick={() => setView(View.USER_MANAGEMENT)}/>
            }
            <FeatureCard title={t('studyBuddy')} description={t('studyBuddyDesc')} icon={<SparklesIcon className="h-8 w-8 text-brand-blue"/>} onClick={() => setView(View.STUDY_BUDDY)}/>
        </div>

        {isStudent && myClassrooms.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-brand-dark mb-4">{t('myClassrooms')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {myClassrooms.map(classroom => {
                const teacher = allUsers.find(u => u.id === classroom.teacherId);
                return (
                  <div key={classroom.id} className="bg-white p-4 rounded-lg shadow-md">
                    <h4 className="font-bold text-brand-dark">{classroom.name}</h4>
                    {teacher && <p className="text-sm text-gray-500">{t('taughtBy')}: {teacher.name}</p>}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <div>
            <h3 className="text-2xl font-bold text-brand-dark mb-4">{t('uploadedFiles')}</h3>
            {uploadedFiles.length === 0 ? (
                <p className="text-gray-500">{t('noFilesUploaded')}</p>
            ) : (
                <div className="space-y-6">
                    {Object.entries(categorizedFiles).map(([category, files]) => (
                        files.length > 0 && (
                            <div key={category}>
                                <h4 className="text-lg font-semibold text-brand-dark mb-2 capitalize">{t(category as keyof Locale)}</h4>
                                <div className="space-y-3">
                                    {files.map(file => <UploadedFileCard key={file.id} file={file} />)}
                                </div>
                            </div>
                        )
                    ))}
                </div>
            )}
        </div>
        
        <div>
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-brand-dark">{t('myLessons')}</h3>
                {(currentUser?.role === UserRole.TEACHER || currentUser?.role === UserRole.ADMIN) && (
                    <button 
                        onClick={handleAddLesson} 
                        className="px-4 py-2 bg-brand-blue text-white font-semibold rounded-lg hover:bg-brand-blue-dark transition-colors"
                    >
                        {t('addLesson')}
                    </button>
                )}
            </div>
            <div className="space-y-4">
                {lessons.map(lesson => (
                    <LessonCard 
                        key={lesson.id} 
                        lesson={lesson} 
                        onDownload={handleDownload} 
                        onToggleComplete={handleToggleComplete} 
                        isDownloading={downloadingId === lesson.id}
                        onEdit={handleEditLesson}
                        onDelete={handleDeleteLesson}
                        uploadedFiles={uploadedFiles}
                    />
                ))}
            </div>
        </div>
        <LessonEditModal 
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onSave={handleSaveLesson}
            lesson={editingLesson}
            uploadedFiles={uploadedFiles}
        />
    </div>
  );
};

export default Dashboard;