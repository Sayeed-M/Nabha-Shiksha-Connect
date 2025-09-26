import type { Locale } from './data/locales';

export enum View {
  DASHBOARD = 'DASHBOARD',
  DIGITAL_SKILLS = 'DIGITAL_SKILLS',
  TEACHER_PORTAL = 'TEACHER_PORTAL',
  STUDY_BUDDY = 'STUDY_BUDDY',
  FILE_MANAGEMENT = 'FILE_MANAGEMENT',
  USER_MANAGEMENT = 'USER_MANAGEMENT',
}

export enum UserRole {
  STUDENT = 'student',
  TEACHER = 'teacher',
  ADMIN = 'admin',
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  lastLogin?: string;
}

export interface UploadedFile {
  id: string;
  name: string;
  type: 'video' | 'pdf' | 'doc' | 'image' | 'other';
  url: string; // Data URL for simulation
  uploaderId: string;
  uploaderName: string;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  type: 'video' | 'pdf' | 'quiz';
  isOffline: boolean;
  isCompleted: boolean;
  offlineContent?: string;
  fileId?: string;
}

export interface TeacherResource {
  id: string;
  title: string;
  description: string;
  type?: 'video' | 'pdf' | 'doc' | 'image' | 'other';
  fileId?: string;
}

export interface Classroom {
  id: string;
  name: string;
  teacherId: string;
  studentIds: string[];
}

export interface DigitalSkill {
  id: string;
  title: keyof Locale;
  icon: React.ReactNode;
  description: keyof Locale;
}

export interface ChatMessage {
    role: 'user' | 'model';
    text: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface AIQuiz {
  title: string;
  description:string;
  questions: QuizQuestion[];
}