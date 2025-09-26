import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Classroom, User } from '../types';
import { XIcon } from './icons/Icons';

interface ClassroomEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (classroomData: Omit<Classroom, 'id' | 'teacherId'>) => void;
  classroom: Classroom | null;
  allStudents: User[];
}

const ClassroomEditModal: React.FC<ClassroomEditModalProps> = ({ isOpen, onClose, onSave, classroom, allStudents }) => {
  const { t } = useLanguage();
  const [name, setName] = useState('');
  const [selectedStudentIds, setSelectedStudentIds] = useState<string[]>([]);

  useEffect(() => {
    if (isOpen) {
        if (classroom) {
            setName(classroom.name);
            setSelectedStudentIds(classroom.studentIds);
        } else {
            setName('');
            setSelectedStudentIds([]);
        }
    }
  }, [classroom, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
        alert("Classroom name cannot be empty.");
        return;
    }
    onSave({
      name,
      studentIds: selectedStudentIds,
    });
  };

  const handleStudentSelect = (studentId: string) => {
    setSelectedStudentIds(prev =>
      prev.includes(studentId)
        ? prev.filter(id => id !== studentId)
        : [...prev, studentId]
    );
  };

  return (
    <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="classroom-modal-title"
    >
      <div 
        className="bg-white rounded-lg shadow-xl w-full max-w-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 border-b flex justify-between items-center">
          <h3 id="classroom-modal-title" className="text-xl font-bold text-brand-blue-dark">
            {classroom ? t('editClassroom') : t('createClassroom')}
          </h3>
          <button onClick={onClose} className="p-1 text-gray-400 hover:text-gray-700">
            <XIcon className="h-5 w-5" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="p-6 space-y-4">
            <div>
              <label htmlFor="classroom-name" className="block text-sm font-medium text-gray-700">{t('classroomName')}</label>
              <input id="classroom-name" type="text" value={name} onChange={(e) => setName(e.target.value)} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue" />
            </div>
            
            <div>
                <h4 className="text-sm font-medium text-gray-700">{t('selectStudents')}</h4>
                <div className="mt-2 border border-gray-200 rounded-md max-h-60 overflow-y-auto">
                    {allStudents.length > 0 ? (
                        allStudents.map(student => (
                            <div key={student.id} className="flex items-center p-2 border-b last:border-b-0">
                                <input
                                    id={`student-${student.id}`}
                                    type="checkbox"
                                    checked={selectedStudentIds.includes(student.id)}
                                    onChange={() => handleStudentSelect(student.id)}
                                    className="h-4 w-4 text-brand-blue border-gray-300 rounded focus:ring-brand-blue"
                                />
                                <label htmlFor={`student-${student.id}`} className="ml-3 block text-sm text-gray-900">
                                    {student.name} <span className="text-gray-500">({student.email})</span>
                                </label>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-500 p-4">{t('noStudentsInClassroom')}</p>
                    )}
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
      </div>
    </div>
  );
};

export default ClassroomEditModal;
