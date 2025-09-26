import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import { View, User, UserRole } from '../types';
import BackButton from './BackButton';
import UserEditModal from './UserEditModal';
import { PencilIcon, TrashIcon } from './icons/Icons';

interface UserManagementProps {
  setView: (view: View) => void;
}

type StoredUser = User & { passwordHash: string };
const USERS_STORAGE_KEY = 'nabha-shiksha-users';

const UserManagement: React.FC<UserManagementProps> = ({ setView }) => {
  const { t } = useLanguage();
  const { currentUser } = useAuth();
  const [users, setUsers] = useState<StoredUser[]>([]);
  const [editingUser, setEditingUser] = useState<StoredUser | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    try {
      const storedUsers = localStorage.getItem(USERS_STORAGE_KEY);
      setUsers(storedUsers ? JSON.parse(storedUsers) : []);
    } catch (error) {
      console.error("Failed to load users from localStorage", error);
    }
  }, []);

  const handleEdit = (user: StoredUser) => {
    setEditingUser(user);
    setIsModalOpen(true);
  };

  const handleDelete = (userId: string) => {
    if (userId === currentUser?.id) {
      alert("You cannot delete your own account.");
      return;
    }
    if (window.confirm(t('deleteUserConfirm'))) {
      const updatedUsers = users.filter(u => u.id !== userId);
      setUsers(updatedUsers);
      localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(updatedUsers));
    }
  };

  const handleSave = (userData: { name: string; email: string; password?: string }) => {
    if (!editingUser) return;
    
    const updatedUsers = users.map(u => {
      if (u.id === editingUser.id) {
        return {
          ...u,
          name: userData.name,
          email: userData.email,
          // Only update passwordHash if a new password is provided
          passwordHash: userData.password ? userData.password : u.passwordHash,
        };
      }
      return u;
    });

    setUsers(updatedUsers);
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(updatedUsers));
    setIsModalOpen(false);
    setEditingUser(null);
  };
  
  const teachers = users.filter(u => u.role === UserRole.TEACHER);
  const students = users.filter(u => u.role === UserRole.STUDENT);

  const UserTable: React.FC<{ title: string, userList: StoredUser[] }> = ({ title, userList }) => (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold text-brand-dark mb-4">{title}</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">{t('name')}</th>
              <th scope="col" className="px-6 py-3">{t('email')}</th>
              <th scope="col" className="px-6 py-3">{t('lastLogin')}</th>
              <th scope="col" className="px-6 py-3 text-right">{t('actions')}</th>
            </tr>
          </thead>
          <tbody>
            {userList.map(user => (
              <tr key={user.id} className="bg-white border-b hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{user.name}</td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">
                  {user.lastLogin 
                    ? new Date(user.lastLogin).toLocaleString()
                    : <span className="text-gray-400 italic">{t('never')}</span>}
                </td>
                <td className="px-6 py-4 text-right space-x-2">
                  <button onClick={() => handleEdit(user)} className="p-2 text-gray-600 hover:text-brand-blue transition-colors" title={t('edit')}>
                    <PencilIcon className="h-5 w-5" />
                  </button>
                  <button onClick={() => handleDelete(user.id)} className="p-2 text-gray-600 hover:text-red-500 transition-colors" title={t('delete')}>
                    <TrashIcon className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      <BackButton setView={setView} />
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-brand-blue-dark">{t('userManagementTitle')}</h2>
        <p className="text-gray-600 mt-2">{t('userManagementDesc')}</p>
      </div>

      <div className="space-y-8">
        <UserTable title={t('allTeachers')} userList={teachers} />
        <UserTable title={t('allStudents')} userList={students} />
      </div>

      <UserEditModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
        user={editingUser}
      />
    </div>
  );
};

export default UserManagement;