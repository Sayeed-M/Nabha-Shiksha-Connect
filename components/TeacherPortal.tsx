import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { View, TeacherResource, Lesson, AIQuiz, UploadedFile, Classroom, User, UserRole } from '../types';
import { BookOpenIcon, UsersIcon, SparklesIcon, LoaderIcon, PencilIcon, TrashIcon, VideoIcon, FileTextIcon } from './icons/Icons';
import BackButton from './BackButton';
import { generateAIQuiz } from '../services/geminiService';
import ResourceEditModal from './ResourceEditModal';
import { LessonCard } from './LessonCard';
import LessonEditModal from './LessonEditModal';
import { useAuth } from '../context/AuthContext';
import ClassroomEditModal from './ClassroomEditModal';

interface TeacherPortalProps {
  setView: (view: View) => void;
}

const LESSONS_STORAGE_KEY = 'nabha-shiksha-lessons';
const RESOURCES_STORAGE_KEY = 'nabha-shiksha-teacher-resources';
const FILES_STORAGE_KEY = 'nabha-shiksha-files';
const CLASSROOMS_STORAGE_KEY = 'nabha-shiksha-classrooms';
const USERS_STORAGE_KEY = 'nabha-shiksha-users';

const initialLessons: Lesson[] = [
    { id: '1', title: 'Maths: Algebra Basics', description: 'Introduction to variables and equations.', type: 'video', isOffline: false, isCompleted: false },
    { id: '2', title: 'Science: The Solar System', description: 'A journey through our cosmic neighborhood.', type: 'pdf', isOffline: true, isCompleted: false, offlineContent: 'This lesson on The Solar System is pre-downloaded for offline access.' },
    { id: '3', title: 'History: Ancient India', description: 'Learn about the Indus Valley Civilization.', type: 'video', isOffline: false, isCompleted: false },
    { id: '4', title: 'Geography: Rivers of Punjab', description: 'Quiz on the major rivers.', type: 'quiz', isOffline: true, isCompleted: false, offlineContent: 'This quiz on the Rivers of Punjab is pre-downloaded for offline access.' },
];

const initialResources: TeacherResource[] = [
    { id: '1', title: 'How to Use Smart Class', description: 'A video guide to operating the smart classroom equipment.', type: 'video' },
    { id: '2', title: 'Integrating DIKSHA Content', description: 'PDF manual for using government e-content in your lessons.', type: 'pdf' },
    { id: '3', title: 'Managing Student Data', description: 'Best practices for tracking student progress through the app.', type: 'pdf' },
];

const ResourceCard: React.FC<{ resource: TeacherResource, uploadedFiles: UploadedFile[], onEdit: (resource: TeacherResource) => void, onDelete: (id: string) => void }> = ({ resource, uploadedFiles, onEdit, onDelete }) => {
    const { t } = useLanguage();
    const resourceFile = resource.fileId ? uploadedFiles.find(f => f.id === resource.fileId) : null;
    
    // Determine icon based on file type if available, otherwise fallback
    const getIcon = () => {
        const type = resourceFile ? resourceFile.type : resource.type;
        switch (type) {
            case 'video': return <VideoIcon className="h-6 w-6 text-brand-blue" />;
            case 'pdf':
            case 'doc': return <FileTextIcon className="h-6 w-6 text-brand-blue" />;
            default: return <BookOpenIcon className="h-6 w-6 text-brand-blue" />;
        }
    }
    
    return (
        <div className="bg-white p-5 rounded-lg shadow-md flex items-center space-x-4">
            <div className="p-3 bg-brand-light rounded-full">
                {getIcon()}
            </div>
            <div className="flex-grow">
                <h3 className="font-semibold text-brand-dark">{resource.title}</h3>
                <p className="text-sm text-gray-500">{resource.description}</p>
            </div>
            <div className="flex items-center space-x-2 flex-shrink-0">
                 {resourceFile ? (
                    <a href={resourceFile.url} target="_blank" rel="noopener noreferrer" download={resourceFile.name} className="px-4 py-2 text-sm font-medium bg-brand-green text-white rounded-lg hover:bg-opacity-90 transition">
                        {t('view')}
                    </a>
                ) : (
                    <button className="px-4 py-2 text-sm font-medium bg-gray-300 text-gray-500 rounded-lg cursor-not-allowed">
                        {t('view')}
                    </button>
                )}
                 <button onClick={() => onEdit(resource)} className="p-2 text-gray-600 hover:text-brand-blue transition-colors" title={t('edit')}>
                    <PencilIcon className="h-5 w-5" />
                </button>
                <button onClick={() => onDelete(resource.id)} className="p-2 text-gray-600 hover:text-red-500 transition-colors" title={t('delete')}>
                    <TrashIcon className="h-5 w-5" />
                </button>
            </div>
        </div>
    );
};


const AIQuizGenerator: React.FC = () => {
    const { t } = useLanguage();
    const [topic, setTopic] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);
    const [feedback, setFeedback] = useState<{ type: 'success' | 'error', message: string } | null>(null);

    const handleGenerateQuiz = async () => {
        if (!topic.trim()) return;
        
        setIsGenerating(true);
        setFeedback(null);

        try {
            const aiQuiz: AIQuiz = await generateAIQuiz(topic);

            const newLesson: Lesson = {
                id: Date.now().toString(),
                title: `Quiz: ${aiQuiz.title}`,
                description: aiQuiz.description,
                type: 'quiz',
                isOffline: false,
                isCompleted: false,
                offlineContent: JSON.stringify(aiQuiz.questions),
            };

            const savedLessonsRaw = localStorage.getItem(LESSONS_STORAGE_KEY);
            const savedLessons: Lesson[] = savedLessonsRaw ? JSON.parse(savedLessonsRaw) : [];
            const updatedLessons = [...savedLessons, newLesson];
            localStorage.setItem(LESSONS_STORAGE_KEY, JSON.stringify(updatedLessons));

            setFeedback({ type: 'success', message: t('quizGeneratedSuccess') });
            setTopic('');

        } catch (error) {
            const errorMessage = (error instanceof Error) ? error.message : t('quizGeneratedError');
            setFeedback({ type: 'error', message: errorMessage });
        } finally {
            setIsGenerating(false);
        }
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg mt-8">
             <div className="flex items-center mb-4">
                <div className="p-3 bg-brand-light rounded-full mr-4">
                    <SparklesIcon className="h-8 w-8 text-brand-blue" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-brand-dark">{t('aiQuizGenerator')}</h3>
                    <p className="text-gray-600 text-sm">{t('aiQuizGeneratorDesc')}</p>
                </div>
            </div>
            <div className="space-y-4">
                 <div>
                    <label htmlFor="quiz-topic" className="block text-sm font-medium text-gray-700">{t('quizTopic')}</label>
                    <input
                        id="quiz-topic"
                        type="text"
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        placeholder={t('quizTopicPlaceholder')}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue"
                        disabled={isGenerating}
                    />
                </div>
                <button
                    onClick={handleGenerateQuiz}
                    disabled={isGenerating || !topic.trim()}
                    className="w-full flex justify-center items-center px-4 py-2 bg-brand-blue text-white font-semibold rounded-lg hover:bg-brand-blue-dark disabled:bg-gray-400 transition-colors"
                >
                    {isGenerating ? (
                        <>
                            <LoaderIcon className="h-5 w-5 mr-2 animate-spin" />
                            {t('generatingQuiz')}
                        </>
                    ) : (
                        t('generateQuiz')
                    )}
                </button>
                {feedback && (
                    <div className={`text-sm p-3 rounded-md ${feedback.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        {feedback.message}
                    </div>
                )}
            </div>
        </div>
    );
};

const TeacherPortal: React.FC<TeacherPortalProps> = ({ setView }) => {
  const { t } = useLanguage();
  const { currentUser } = useAuth();
  const [resources, setResources] = useState<TeacherResource[]>([]);
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [classrooms, setClassrooms] = useState<Classroom[]>([]);
  const [allStudents, setAllStudents] = useState<User[]>([]);
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  
  const [isResourceModalOpen, setIsResourceModalOpen] = useState(false);
  const [editingResource, setEditingResource] = useState<TeacherResource | null>(null);
  
  const [isLessonModalOpen, setIsLessonModalOpen] = useState(false);
  const [editingLesson, setEditingLesson] = useState<Lesson | null>(null);

  const [isClassroomModalOpen, setIsClassroomModalOpen] = useState(false);
  const [editingClassroom, setEditingClassroom] = useState<Classroom | null>(null);

  useEffect(() => {
    try {
        // Load all data on mount
        const savedResources = localStorage.getItem(RESOURCES_STORAGE_KEY);
        setResources(savedResources ? JSON.parse(savedResources) : initialResources);
        
        const savedLessons = localStorage.getItem(LESSONS_STORAGE_KEY);
        setLessons(savedLessons ? JSON.parse(savedLessons) : initialLessons);

        const savedClassrooms = localStorage.getItem(CLASSROOMS_STORAGE_KEY);
        setClassrooms(savedClassrooms ? JSON.parse(savedClassrooms) : []);

        const savedFiles = localStorage.getItem(FILES_STORAGE_KEY);
        setUploadedFiles(savedFiles ? JSON.parse(savedFiles) : []);

        const allUsersRaw = localStorage.getItem(USERS_STORAGE_KEY);
        const allUsers: User[] = allUsersRaw ? JSON.parse(allUsersRaw) : [];
        setAllStudents(allUsers.filter(user => user.role === UserRole.STUDENT));

    } catch (error) {
        console.error("Failed to load data from localStorage", error);
    }
  }, []);

  useEffect(() => { localStorage.setItem(RESOURCES_STORAGE_KEY, JSON.stringify(resources)); }, [resources]);
  useEffect(() => { localStorage.setItem(LESSONS_STORAGE_KEY, JSON.stringify(lessons)); }, [lessons]);
  useEffect(() => { localStorage.setItem(CLASSROOMS_STORAGE_KEY, JSON.stringify(classrooms)); }, [classrooms]);
  
  const handleAddResource = () => { setEditingResource(null); setIsResourceModalOpen(true); };
  const handleEditResource = (resource: TeacherResource) => { setEditingResource(resource); setIsResourceModalOpen(true); };
  const handleDeleteResource = (id: string) => {
    if (window.confirm(t('deleteResourceConfirm'))) { setResources(resources.filter(r => r.id !== id)); }
  };
  const handleSaveResource = (resourceData: Omit<TeacherResource, 'id' | 'type'>) => {
    const file = resourceData.fileId ? uploadedFiles.find(f => f.id === resourceData.fileId) : null;
    const resourceType = file ? file.type : 'other';
    if (editingResource) {
        setResources(resources.map(r => r.id === editingResource.id ? { ...editingResource, ...resourceData, type: resourceType } : r));
    } else {
        const newResource: TeacherResource = { id: Date.now().toString(), ...resourceData, type: resourceType };
        setResources([...resources, newResource]);
    }
    setIsResourceModalOpen(false);
  };
  
  const handleAddLesson = () => { setEditingLesson(null); setIsLessonModalOpen(true); };
  const handleEditLesson = (lesson: Lesson) => { setEditingLesson(lesson); setIsLessonModalOpen(true); };
  const handleDeleteLesson = (id: string) => {
    if (window.confirm(t('deleteLessonConfirm'))) { setLessons(lessons.filter(l => l.id !== id)); }
  };
  const handleSaveLesson = (lessonData: Omit<Lesson, 'id' | 'isOffline' | 'isCompleted' | 'offlineContent'>) => {
    if (editingLesson) {
        setLessons(lessons.map(l => l.id === editingLesson.id ? { ...l, ...lessonData } : l));
    } else {
        const newLesson: Lesson = { id: Date.now().toString(), ...lessonData, isOffline: false, isCompleted: false };
        setLessons([...lessons, newLesson]);
    }
    setIsLessonModalOpen(false);
  };

  const handleAddClassroom = () => { setEditingClassroom(null); setIsClassroomModalOpen(true); };
  const handleEditClassroom = (classroom: Classroom) => { setEditingClassroom(classroom); setIsClassroomModalOpen(true); };
  const handleDeleteClassroom = (id: string) => {
      if (window.confirm(t('deleteClassroomConfirm'))) { setClassrooms(classrooms.filter(c => c.id !== id)); }
  };
  const handleSaveClassroom = (classroomData: Omit<Classroom, 'id' | 'teacherId'>) => {
      if (!currentUser) return;
      if (editingClassroom) {
          setClassrooms(classrooms.map(c => c.id === editingClassroom.id ? { ...c, ...classroomData } : c));
      } else {
          const newClassroom: Classroom = { id: Date.now().toString(), ...classroomData, teacherId: currentUser.id };
          setClassrooms([...classrooms, newClassroom]);
      }
      setIsClassroomModalOpen(false);
  };


  return (
    <div>
      <BackButton setView={setView} />
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-brand-blue-dark">{t('teacherPortalTitle')}</h2>
        <p className="text-gray-600 mt-2">{t('teacherPortalDesc')}</p>
      </div>
      <div className="space-y-8 max-w-3xl mx-auto">
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold text-brand-dark">{t('myClassrooms')}</h3>
              <button 
                  onClick={handleAddClassroom} 
                  className="px-4 py-2 bg-brand-blue text-white font-semibold rounded-lg hover:bg-brand-blue-dark transition-colors"
              >
                  {t('createClassroom')}
              </button>
            </div>
             <div className="space-y-4">
                {classrooms.length > 0 ? classrooms.map(classroom => (
                    <div key={classroom.id} className="bg-white p-5 rounded-lg shadow-md flex items-center space-x-4">
                        <div className="p-3 bg-brand-light rounded-full"><UsersIcon className="h-6 w-6 text-brand-blue" /></div>
                        <div className="flex-grow">
                            <h4 className="font-semibold text-brand-dark">{classroom.name}</h4>
                            <p className="text-sm text-gray-500">{classroom.studentIds.length} {t('students')}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <button onClick={() => handleEditClassroom(classroom)} className="p-2 text-gray-600 hover:text-brand-blue transition-colors" title={t('edit')}><PencilIcon className="h-5 w-5" /></button>
                            <button onClick={() => handleDeleteClassroom(classroom.id)} className="p-2 text-gray-600 hover:text-red-500 transition-colors" title={t('delete')}><TrashIcon className="h-5 w-5" /></button>
                        </div>
                    </div>
                )) : <p className="text-gray-500 text-center py-4">{t('noClassroomsCreated')}</p>}
             </div>
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold text-brand-dark">{t('teacherPortalTitle')}</h3>
              <button onClick={handleAddResource} className="px-4 py-2 bg-brand-blue text-white font-semibold rounded-lg hover:bg-brand-blue-dark transition-colors">{t('addResource')}</button>
            </div>
             <div className="space-y-4">
                {resources.map(resource => ( <ResourceCard key={resource.id} resource={resource} uploadedFiles={uploadedFiles} onEdit={handleEditResource} onDelete={handleDeleteResource} /> ))}
             </div>
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-brand-dark">{t('manageLessons')}</h3>
                <button onClick={handleAddLesson} className="px-4 py-2 bg-brand-blue text-white font-semibold rounded-lg hover:bg-brand-blue-dark transition-colors">{t('addLesson')}</button>
            </div>
            <div className="space-y-4">
                {lessons.map(lesson => ( <LessonCard key={lesson.id} lesson={lesson} onDownload={() => {}} onToggleComplete={() => {}} isDownloading={false} onEdit={handleEditLesson} onDelete={handleDeleteLesson} uploadedFiles={uploadedFiles} /> ))}
            </div>
          </div>

          <AIQuizGenerator />
      </div>

       <ResourceEditModal isOpen={isResourceModalOpen} onClose={() => setIsResourceModalOpen(false)} onSave={handleSaveResource} resource={editingResource} uploadedFiles={uploadedFiles} />
       <LessonEditModal isOpen={isLessonModalOpen} onClose={() => setIsLessonModalOpen(false)} onSave={handleSaveLesson} lesson={editingLesson} uploadedFiles={uploadedFiles} />
       <ClassroomEditModal isOpen={isClassroomModalOpen} onClose={() => setIsClassroomModalOpen(false)} onSave={handleSaveClassroom} classroom={editingClassroom} allStudents={allStudents} />
    </div>
  );
};

export default TeacherPortal;