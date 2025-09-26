export interface Locale {
  appName: string;
  dashboard: string;
  digitalSkills: string;
  teacherPortal: string;
  studyBuddy: string;
  welcome: string;
  welcomeDesc: string;
  myLessons: string;
  manageLessons: string;
  download: string;
  downloading: string;
  downloaded: string;
  view: string;
  backToDashboard: string;
  digitalSkillsTitle: string;
  digitalSkillsDesc: string;
  teacherPortalTitle: string;
  teacherPortalDesc: string;
  studyBuddyTitle: string;
  studyBuddyDesc: string;
  askMeAnything: string;
  sendMessage: string;
  isOffline: string;
  isOnline: string;
  markAsComplete: string;
  completed: string;

  // Auth
  login: string;
  loginTitle: string;
  register: string;
  registerTitle: string;
  logout: string;
  email: string;
  password: string;
  name: string;
  role: string;
  student: string;
  teacher: string;
  admin: string;
  dontHaveAccount: string;
  alreadyHaveAccount: string;
  
  // File Management
  fileManagement: string;
  fileManagementTitle: string;
  fileManagementDesc: string;
  uploadFile: string;
  selectFile: string;
  noFileChosen: string;
  uploadedFiles: string;
  uploadedBy: string;
  noFilesUploaded: string;
  delete: string;
  
  // File types
  videos: string;
  documents: string;
  images: string;
  other: string;

  // Lesson Management
  addLesson: string;
  editLesson: string;
  save: string;
  cancel: string;
  title: string;
  description: string;
  lessonType: string;
  edit: string;
  deleteLessonConfirm: string;
  sourceFile: string;
  noFileAttached: string;
  
  // File Explorer
  selectAFile: string;
  browseFiles: string;
  clearSelection: string;
  noFileSelected: string;
  back: string;
  select: string;

  // AI Quiz Generator
  aiQuizGenerator: string;
  aiQuizGeneratorDesc: string;
  quizTopic: string;
  quizTopicPlaceholder: string;
  generateQuiz: string;
  generatingQuiz: string;
  quizGeneratedSuccess: string;
  quizGeneratedError: string;

  // Teacher Portal Resource Management
  addResource: string;
  editResource: string;
  deleteResourceConfirm: string;
  resource: string;

  // Classroom Management
  myClassrooms: string;
  createClassroom: string;
  editClassroom: string;
  classroomName: string;
  selectStudents: string;
  students: string;
  noStudentsInClassroom: string;
  deleteClassroomConfirm: string;
  noClassroomsCreated: string;
  classroom: string;
  taughtBy: string;

  // Digital Skills Modules
  skillKeyboardTitle: string;
  skillKeyboardDesc: string;
  skillFileOrgTitle: string;
  skillFileOrgDesc: string;
  skillInternetSafetyTitle: string;
  skillInternetSafetyDesc: string;

  // Digital Skills Detail Content
  backToSkills: string;
  // Keyboard & Mouse
  keyboardMouseDetailTitle: string;
  keyboardIntroTitle: string;
  keyboardIntroContent: string;
  keyTypesTitle: string;
  keyTypesTyping: string;
  keyTypesTypingDesc: string;
  keyTypesControl: string;
  keyTypesControlDesc: string;
  keyTypesFunction: string;
  keyTypesFunctionDesc: string;
  mouseIntroTitle: string;
  mouseIntroContent: string;
  mouseActionsTitle: string;
  mouseActionsClick: string;
  mouseActionsClickDesc: string;
  mouseActionsDoubleClick: string;
  mouseActionsDoubleClickDesc: string;
  mouseActionsRightClick: string;
  mouseActionsRightClickDesc: string;
  mouseActionsScroll: string;
  mouseActionsScrollDesc: string;

  // File Organization
  fileOrgDetailTitle: string;
  fileOrgIntroTitle: string;
  fileOrgIntroContent: string;
  whatAreFilesTitle: string;
  whatAreFilesContent: string;
  whatAreFoldersTitle: string;
  whatAreFoldersContent: string;
  howToOrganizeTitle: string;
  howToOrganizeStep1: string;
  howToOrganizeStep1Desc: string;
  howToOrganizeStep2: string;
  howToOrganizeStep2Desc: string;
  howToOrganizeStep3: string;
  howToOrganizeStep3Desc: string;

  // Internet Safety
  internetSafetyDetailTitle: string;
  internetSafetyIntroTitle: string;
  internetSafetyIntroContent: string;
  strongPasswordsTitle: string;
  strongPasswordsContent: string;
  strongPasswordsTip1: string;
  strongPasswordsTip2: string;
  strongPasswordsTip3: string;
  phishingTitle: string;
  phishingContent: string;
  phishingTip1: string;
  phishingTip2: string;
  personalInfoTitle: string;
  personalInfoContent: string;

  // Admin/Teacher Dashboard
  userDistribution: string;

  // User Management
  userManagement: string;
  userManagementTitle: string;
  userManagementDesc: string;
  allTeachers: string;
  allStudents: string;
  editUser: string;
  deleteUserConfirm: string;
  lastLogin: string;
  newPassword: string;
  newPasswordHelp: string;
  actions: string;
  never: string;
}

export const locales: { [key: string]: Locale } = {
  en: {
    appName: 'Nabha Shiksha Connect',
    dashboard: 'Dashboard',
    digitalSkills: 'Digital Skills',
    teacherPortal: 'Teacher Portal',
    studyBuddy: 'Study Buddy',
    welcome: 'Welcome',
    welcomeDesc: 'Your journey to learning starts here. Explore your lessons and tools.',
    myLessons: 'My Lessons',
    manageLessons: 'Manage Lessons',
    download: 'Download',
    downloading: 'Downloading...',
    downloaded: 'Downloaded',
    view: 'View',
    backToDashboard: 'Back to Dashboard',
    digitalSkillsTitle: 'Learn Digital Skills',
    digitalSkillsDesc: 'Interactive modules to help you master computer basics.',
    teacherPortalTitle: 'Teacher Resources',
    teacherPortalDesc: 'Guides and manuals for effective teaching with technology.',
    studyBuddyTitle: 'AI Study Buddy',
    studyBuddyDesc: 'Have a question? Ask your AI friend, Shiksha Dost, for help!',
    askMeAnything: 'Ask me anything about your lessons...',
    sendMessage: 'Send',
    isOffline: "You're offline. Some features may be limited.",
    isOnline: "You're back online!",
    markAsComplete: 'Mark as Complete',
    completed: 'Completed',
    // Auth
    login: 'Login',
    loginTitle: 'Login to your Account',
    register: 'Register',
    registerTitle: 'Create a New Account',
    logout: 'Logout',
    email: 'Email Address',
    password: 'Password',
    name: 'Full Name',
    role: 'Role',
    student: 'Student',
    teacher: 'Teacher',
    admin: 'Admin',
    dontHaveAccount: "Don't have an account?",
    alreadyHaveAccount: 'Already have an account?',
    // File Management
    fileManagement: 'File Management',
    fileManagementTitle: 'File Management Portal',
    fileManagementDesc: 'Upload and manage educational resources for students.',
    uploadFile: 'Upload File',
    selectFile: 'Select a file',
    noFileChosen: 'No file chosen',
    uploadedFiles: 'Uploaded Resources',
    uploadedBy: 'Uploaded by',
    noFilesUploaded: 'No files have been uploaded yet.',
    delete: 'Delete',
    // File types
    videos: 'Videos',
    documents: 'Documents & PDFs',
    images: 'Images',
    other: 'Other Files',
    // Lesson Management
    addLesson: 'Add New Lesson',
    editLesson: 'Edit Lesson',
    save: 'Save',
    cancel: 'Cancel',
    title: 'Title',
    description: 'Description',
    lessonType: 'Lesson Type',
    edit: 'Edit',
    deleteLessonConfirm: 'Are you sure you want to delete this lesson?',
    sourceFile: 'Source File (Optional)',
    noFileAttached: 'No file attached',
    // File Explorer
    selectAFile: 'Select a File',
    browseFiles: 'Browse',
    clearSelection: 'Clear selection',
    noFileSelected: 'No file selected',
    back: 'Back',
    select: 'Select',
    // AI Quiz Generator
    aiQuizGenerator: 'AI Quiz Generator',
    aiQuizGeneratorDesc: 'Instantly create a 5-question multiple-choice quiz on any topic.',
    quizTopic: 'Quiz Topic',
    quizTopicPlaceholder: 'e.g., The Solar System',
    generateQuiz: 'Generate Quiz',
    generatingQuiz: 'Generating...',
    quizGeneratedSuccess: 'Quiz generated successfully and added to lessons!',
    quizGeneratedError: 'Failed to generate quiz. Please try again.',
    // Teacher Portal Resource Management
    addResource: 'Add New Resource',
    editResource: 'Edit Resource',
    deleteResourceConfirm: 'Are you sure you want to delete this resource?',
    resource: 'Resource',
    // Classroom Management
    myClassrooms: 'My Classrooms',
    createClassroom: 'Create Classroom',
    editClassroom: 'Edit Classroom',
    classroomName: 'Classroom Name',
    selectStudents: 'Select Students',
    students: 'Students',
    noStudentsInClassroom: 'No students have been added to this classroom.',
    deleteClassroomConfirm: 'Are you sure you want to delete this classroom? This cannot be undone.',
    noClassroomsCreated: 'You have not created any classrooms yet.',
    classroom: 'Classroom',
    taughtBy: 'Taught by',
    // Digital Skills Modules
    skillKeyboardTitle: 'Keyboard & Mouse Basics',
    skillKeyboardDesc: 'Learn to type and navigate with precision.',
    skillFileOrgTitle: 'File Organization',
    skillFileOrgDesc: 'Understand how to create folders and manage your files.',
    skillInternetSafetyTitle: 'Internet Safety',
    skillInternetSafetyDesc: 'Browse the web safely and protect your information.',
    // Digital Skills Detail Content
    backToSkills: 'Back to Skills',
    // Keyboard & Mouse
    keyboardMouseDetailTitle: 'Keyboard & Mouse Basics',
    keyboardIntroTitle: 'Understanding the Keyboard',
    keyboardIntroContent: 'The keyboard is your main tool for typing text into the computer. It has many keys, each with a special function. Learning them will help you work faster.',
    keyTypesTitle: 'Types of Keys',
    keyTypesTyping: 'Typing Keys',
    keyTypesTypingDesc: 'These are the letter (A-Z) and number (0-9) keys, used for typing words and numbers.',
    keyTypesControl: 'Control Keys',
    keyTypesControlDesc: 'Keys like Ctrl, Alt, and the Windows key are used in combination with other keys to perform special actions (shortcuts).',
    keyTypesFunction: 'Function Keys',
    keyTypesFunctionDesc: 'These are labeled F1 through F12 at the top. They have different functions depending on the program you are using.',
    mouseIntroTitle: 'Mastering the Mouse',
    mouseIntroContent: 'The mouse lets you point to, select, and move items on your screen. It is a key tool for interacting with the computer visually.',
    mouseActionsTitle: 'Basic Mouse Actions',
    mouseActionsClick: 'Click (Left-Click)',
    mouseActionsClickDesc: 'Pressing and releasing the left mouse button once. Used to select an item or press a button.',
    mouseActionsDoubleClick: 'Double-Click',
    mouseActionsDoubleClickDesc: 'Quickly pressing the left mouse button twice. Used to open a program or a file.',
    mouseActionsRightClick: 'Right-Click',
    mouseActionsRightClickDesc: 'Pressing the right mouse button once. This usually opens a menu with more options related to the item you clicked on.',
    mouseActionsScroll: 'Scroll',
    mouseActionsScrollDesc: 'Many mice have a scroll wheel. You can roll it to move up and down on a page or document.',
    // File Organization
    fileOrgDetailTitle: 'File Organization',
    fileOrgIntroTitle: 'Why Organize Files?',
    fileOrgIntroContent: 'Just like keeping your notebooks organized helps you find your notes, organizing computer files helps you find your documents, photos, and videos easily. It saves time and prevents losing important work.',
    whatAreFilesTitle: 'What are Files?',
    whatAreFilesContent: 'A file is a single piece of information, like a text document, a picture, a song, or a video. Each file has a name and an icon that shows its type.',
    whatAreFoldersTitle: 'What are Folders?',
    whatAreFoldersContent: 'A folder is like a container where you can store files and even other folders. Using folders helps you group related files together.',
    howToOrganizeTitle: 'Steps to Good Organization',
    howToOrganizeStep1: 'Create a Main Folder',
    howToOrganizeStep1Desc: 'Start by creating a main folder for your schoolwork. You can name it "My Schoolwork" or "Class 8".',
    howToOrganizeStep2: 'Create Sub-folders for Subjects',
    howToOrganizeStep2Desc: 'Inside your main folder, create separate folders for each subject, like "Maths," "Science," and "English."',
    howToOrganizeStep3: 'Give Files Clear Names',
    howToOrganizeStep3Desc: 'When you save a file, give it a name that describes what it is. For example, "Science_Solar_System_Homework.docx" is much better than "file1.docx."',
    // Internet Safety
    internetSafetyDetailTitle: 'Internet Safety',
    internetSafetyIntroTitle: 'Staying Safe Online',
    internetSafetyIntroContent: 'The internet is a wonderful place to learn and connect with others, but it is important to be careful. Following these safety tips will help protect you and your personal information.',
    strongPasswordsTitle: 'Use Strong Passwords',
    strongPasswordsContent: 'A strong password is like a strong lock on a door. It helps keep your accounts safe from others.',
    strongPasswordsTip1: 'Use a mix of letters (both capital and small), numbers, and symbols (like !, @, #).',
    strongPasswordsTip2: 'Make it long - at least 8 characters.',
    strongPasswordsTip3: 'Do not use personal information like your name, birthday, or school name.',
    phishingTitle: 'Beware of Phishing',
    phishingContent: 'Phishing is when someone tries to trick you into giving them your personal information, like passwords or bank details, by sending fake emails or messages.',
    phishingTip1: 'Do not click on links or download attachments from emails you do not recognize.',
    phishingTip2: 'Be suspicious of messages that ask for your password or create a sense of urgency.',
    personalInfoTitle: 'Protect Your Personal Information',
    personalInfoContent: 'Be very careful about who you share your personal details with online. This includes your full name, address, phone number, and school name. It is best to only share such information with your parents or teachers.',
    // Admin/Teacher Dashboard
    userDistribution: 'User Distribution',
    // User Management
    userManagement: 'User Management',
    userManagementTitle: 'User Management',
    userManagementDesc: 'View, edit, and manage all student and teacher accounts.',
    allTeachers: 'All Teachers',
    allStudents: 'All Students',
    editUser: 'Edit User',
    deleteUserConfirm: 'Are you sure you want to delete this user? This action cannot be undone.',
    lastLogin: 'Last Login',
    newPassword: 'New Password',
    newPasswordHelp: 'Leave blank to keep the current password',
    actions: 'Actions',
    never: 'Never',
  },
  pa: {
    appName: 'ਨਾਭਾ ਸਿੱਖਿਆ ਕਨੈਕਟ',
    dashboard: 'ਡੈਸ਼ਬੋਰਡ',
    digitalSkills: 'ਡਿਜੀਟਲ ਹੁਨਰ',
    teacherPortal: 'ਅਧਿਆਪਕ ਪੋਰਟਲ',
    studyBuddy: 'ਸਟੱਡੀ ਬੱਡੀ',
    welcome: 'ਜੀ ਆਇਆਂ ਨੂੰ',
    welcomeDesc: 'ਤੁਹਾਡੀ ਸਿੱਖਣ ਦੀ ਯਾਤਰਾ ਇੱਥੋਂ ਸ਼ੁਰੂ ਹੁੰਦੀ ਹੈ। ਆਪਣੇ ਪਾਠ ਅਤੇ ਸਾਧਨਾਂ ਦੀ ਪੜਚੋਲ ਕਰੋ।',
    myLessons: 'ਮੇਰੇ ਪਾਠ',
    manageLessons: 'ਪਾਠਾਂ ਦਾ ਪ੍ਰਬੰਧਨ ਕਰੋ',
    download: 'ਡਾਊਨਲᴏਡ ਕਰੋ',
    downloading: 'ਡਾਊਨਲੋਡ ਹੋ ਰਿਹਾ ਹੈ...',
    downloaded: 'ਡਾਊਨਲੋਡ ਕੀਤਾ ਗਿਆ',
    view: 'ਦੇਖੋ',
    backToDashboard: 'ਡੈਸ਼ਬੋਰਡ ਤੇ ਵਾਪਸ',
    digitalSkillsTitle: 'ਡਿਜੀਟਲ ਹੁਨਰ ਸਿੱਖੋ',
    digitalSkillsDesc: 'ਕੰਪਿਊਟਰ ਦੀਆਂ ਮੂਲ ਗੱਲਾਂ ਵਿੱਚ ਮੁਹਾਰਤ ਹਾਸਲ ਕਰਨ ਵਿੱਚ ਤੁਹਾਡੀ ਮਦਦ ਕਰਨ ਲਈ ਇੰਟਰਐਕਟਿਵ ਮਾਡਿਊਲ।',
    teacherPortalTitle: 'ਅਧਿਆਪਕ ਸਰੋਤ',
    teacherPortalDesc: 'ਤਕਨਾਲੋਜੀ ਨਾਲ ਪ੍ਰਭਾਵਸ਼ਾਲੀ ਅਧਿਆਪਨ ਲਈ ਗਾਈਡ ਅਤੇ ਮੈਨੂਅਲ।',
    studyBuddyTitle: 'AI ਸਟੱਡੀ ਬੱਡੀ',
    studyBuddyDesc: 'ਕੋਈ ਸਵਾਲ ਹੈ? ਮਦਦ ਲਈ ਆਪਣੇ AI ਦੋਸਤ, ਸ਼ਿਕਸ਼ਾ ਦੋਸਤ ਨੂੰ ਪੁੱਛੋ!',
    askMeAnything: 'ਮੈਨੂੰ ਆਪਣੇ ਪਾਠਾਂ ਬਾਰੇ ਕੁਝ ਵੀ ਪੁੱਛੋ...',
    sendMessage: 'ਭੇਜੋ',
    isOffline: "ਤੁਸੀਂ ਔਫਲਾਈਨ ਹੋ। ਕੁਝ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ ਸੀਮਤ ਹੋ ਸਕਦੀਆਂ ਹਨ।",
    isOnline: "ਤੁਸੀਂ ਵਾਪਸ ਔਨਲਾਈਨ ਹੋ!",
    markAsComplete: 'ਪੂਰਾ ਹੋਇਆ ਵਜੋਂ ਮਾਰਕ ਕਰੋ',
    completed: 'ਪੂਰਾ ਹੋਇਆ',
    // Auth
    login: 'ਲੌਗਇਨ',
    loginTitle: 'ਆਪਣੇ ਖਾਤੇ ਵਿੱਚ ਲੌਗਇਨ ਕਰੋ',
    register: 'ਰਜਿਸਟਰ ਕਰੋ',
    registerTitle: 'ਇੱਕ ਨਵਾਂ ਖਾਤਾ ਬਣਾਓ',
    logout: 'ਲੌਗਆਉਟ',
    email: 'ਈਮੇਲ ਪਤਾ',
    password: 'ਪਾਸਵਰਡ',
    name: 'ਪੂਰਾ ਨਾਂਮ',
    role: 'ਭੂਮਿਕਾ',
    student: 'ਵਿਦਿਆਰਥੀ',
    teacher: 'ਅਧਿਆਪਕ',
    admin: 'ਪ੍ਰਬੰਧਕ',
    dontHaveAccount: 'ਖਾਤਾ ਨਹੀਂ ਹੈ?',
    alreadyHaveAccount: 'ਪਹਿਲਾਂ ਤੋਂ ਹੀ ਖਾਤਾ ਹੈ?',
    // File Management
    fileManagement: 'ਫਾਈਲ ਪ੍ਰਬੰਧਨ',
    fileManagementTitle: 'ਫਾਈਲ ਪ੍ਰਬੰਧਨ ਪੋਰਟਲ',
    fileManagementDesc: 'ਵਿਦਿਆਰਥੀਆਂ ਲਈ ਵਿਦਿਅਕ ਸਰੋਤ ਅਪਲੋਡ ਅਤੇ ਪ੍ਰਬੰਧਿਤ ਕਰੋ।',
    uploadFile: 'ਫਾਈਲ ਅਪਲੋਡ ਕਰੋ',
    selectFile: 'ਇੱਕ ਫਾਈਲ ਚੁਣੋ',
    noFileChosen: 'ਕੋਈ ਫਾਈਲ ਨਹੀਂ ਚੁਣੀ ਗਈ',
    uploadedFiles: 'ਅਪਲੋਡ ਕੀਤੇ ਸਰੋਤ',
    uploadedBy: 'ਦੁਆਰਾ ਅਪਲੋਡ ਕੀਤਾ ਗਿਆ',
    noFilesUploaded: 'ਹਾਲੇ ਤੱਕ ਕੋਈ ਫਾਈਲ ਅਪਲੋਡ ਨਹੀਂ ਕੀਤੀ ਗਈ ਹੈ।',
    delete: 'ਮਿਟਾਓ',
    // File types
    videos: 'ਵੀਡੀਓਜ਼',
    documents: 'ਦਸਤਾਵੇਜ਼ ਅਤੇ PDF',
    images: 'ਚਿੱਤਰ',
    other: 'ਹੋਰ ਫਾਈਲਾਂ',
    // Lesson Management
    addLesson: 'ਨਵਾਂ ਪਾਠ ਸ਼ਾਮਲ ਕਰੋ',
    editLesson: 'ਪਾਠ ਦਾ ਸੰਪਾਦਨ ਕਰੋ',
    save: 'ਸੇਵ ਕਰੋ',
    cancel: 'ਰੱਦ ਕਰੋ',
    title: 'ਸਿਰਲੇਖ',
    description: 'ਵੇਰਵਾ',
    lessonType: 'ਪਾਠ ਦੀ ਕਿਸਮ',
    edit: 'ਸੰਪਾਦਨ ਕਰੋ',
    // FIX: Escaped the single quote in the string to prevent a syntax error.
    deleteLessonConfirm: 'ਕੀ ਤੁਸੀਂ ਯਕੀਨੀ ਤੌਰ \'ਤੇ ਇਸ ਪਾਠ ਨੂੰ ਮਿਟਾਉਣਾ ਚਾਹੁੰਦੇ ਹੋ?',
    sourceFile: 'ਸਰੋਤ ਫਾਈਲ (ਵਿਕਲਪਿਕ)',
    noFileAttached: 'ਕੋਈ ਫਾਈਲ ਨੱਥੀ ਨਹੀਂ ਹੈ',
    // File Explorer
    selectAFile: 'ਇੱਕ ਫਾਈਲ ਚੁਣੋ',
    browseFiles: 'ਬ੍ਰਾਊਜ਼',
    clearSelection: 'ਚੋਣ ਸਾਫ਼ ਕਰੋ',
    noFileSelected: 'ਕੋਈ ਫਾਈਲ ਨਹੀਂ ਚੁਣੀ ਗਈ',
    back: 'ਪਿੱਛੇ',
    select: 'ਚੁਣੋ',
    // AI Quiz Generator
    aiQuizGenerator: 'AI ਕੁਇਜ਼ ਜੇਨਰੇਟਰ',
    aiQuizGeneratorDesc: 'ਕਿਸੇ ਵੀ ਵਿਸ਼ੇ \'ਤੇ ਤੁਰੰਤ 5-ਪ੍ਰਸ਼ਨਾਂ ਵਾਲੀ ਬਹੁ-ਚੋਣ ਕੁਇਜ਼ ਬਣਾਓ।',
    quizTopic: 'ਕੁਇਜ਼ ਵਿਸ਼ਾ',
    quizTopicPlaceholder: 'ਉਦਾਹਰਨ ਲਈ, ਸੂਰਜੀ ਸਿਸਟਮ',
    generateQuiz: 'ਕੁਇਜ਼ ਬਣਾਓ',
    generatingQuiz: 'ਬਣਾਇਆ ਜਾ ਰਿਹਾ ਹੈ...',
    quizGeneratedSuccess: 'ਕੁਇਜ਼ ਸਫਲਤਾਪੂਰਵਕ ਬਣਾਈ ਗਈ ਅਤੇ ਪਾਠਾਂ ਵਿੱਚ ਸ਼ਾਮਲ ਕੀਤੀ ਗਈ!',
    quizGeneratedError: 'ਕੁਇਜ਼ ਬਣਾਉਣ ਵਿੱਚ ਅਸਫਲ। ਕਿਰਪਾ ਕਰਕੇ ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ।',
    // Teacher Portal Resource Management
    addResource: 'ਨਵਾਂ ਸਰੋਤ ਸ਼ਾਮਲ ਕਰੋ',
    editResource: 'ਸਰੋਤ ਦਾ ਸੰਪਾਦਨ ਕਰੋ',
    deleteResourceConfirm: 'ਕੀ ਤੁਸੀਂ ਯਕੀਨੀ ਤੌਰ \'ਤੇ ਇਸ ਸਰੋਤ ਨੂੰ ਮਿਟਾਉਣਾ ਚਾਹੁੰਦੇ ਹੋ?',
    resource: 'ਸਰੋਤ',
    // Classroom Management
    myClassrooms: 'ਮੇਰੀਆਂ ਕਲਾਸਾਂ',
    createClassroom: 'ਕਲਾਸਰੂਮ ਬਣਾਓ',
    editClassroom: 'ਕਲਾਸਰੂਮ ਦਾ ਸੰਪਾਦਨ ਕਰੋ',
    classroomName: 'ਕਲਾਸਰੂਮ ਦਾ ਨਾਮ',
    selectStudents: 'ਵਿਦਿਆਰਥੀ ਚੁਣੋ',
    students: 'ਵਿਦਿਆਰਥੀ',
    noStudentsInClassroom: 'ਇਸ ਕਲਾਸਰੂਮ ਵਿੱਚ ਕੋਈ ਵਿਦਿਆਰਥੀ ਸ਼ਾਮਲ ਨਹੀਂ ਕੀਤਾ ਗਿਆ ਹੈ।',
    deleteClassroomConfirm: 'ਕੀ ਤੁਸੀਂ ਯਕੀਨੀ ਤੌਰ \'ਤੇ ਇਸ ਕਲਾਸਰੂਮ ਨੂੰ ਮਿਟਾਉਣਾ ਚਾਹੁੰਦੇ ਹੋ? ਇਸਨੂੰ ਵਾਪਸ ਨਹੀਂ ਕੀਤਾ ਜਾ ਸਕਦਾ।',
    noClassroomsCreated: 'ਤੁਸੀਂ ਹਾਲੇ ਤੱਕ ਕੋਈ ਕਲਾਸਰੂਮ ਨਹੀਂ ਬਣਾਇਆ ਹੈ।',
    classroom: 'ਕਲਾਸਰੂਮ',
    taughtBy: 'ਦੁਆਰਾ ਪੜ੍ਹਾਇਆ ਗਿਆ',
    // Digital Skills Modules
    skillKeyboardTitle: 'ਕੀਬੋਰਡ ਅਤੇ ਮਾਊਸ ਦੀਆਂ ਮੂਲ ਗੱਲਾਂ',
    skillKeyboardDesc: 'ਸਟੀਕਤਾ ਨਾਲ ਟਾਈਪ ਕਰਨਾ ਅਤੇ ਨੈਵੀਗੇਟ ਕਰਨਾ ਸਿੱਖੋ।',
    skillFileOrgTitle: 'ਫਾਈਲ ਸੰਗਠਨ',
    skillFileOrgDesc: 'ਫੋਲਡਰ ਬਣਾਉਣਾ ਅਤੇ ਆਪਣੀਆਂ ਫਾਈਲਾਂ ਦਾ ਪ੍ਰਬੰਧਨ ਕਰਨਾ ਸਮਝੋ।',
    skillInternetSafetyTitle: 'ਇੰਟਰਨੈੱਟ ਸੁਰੱਖਿਆ',
    skillInternetSafetyDesc: 'ਵੈੱਬ ਨੂੰ ਸੁਰੱਖਿਅਤ ਢੰਗ ਨਾਲ ਬ੍ਰਾਊਜ਼ ਕਰੋ ਅਤੇ ਆਪਣੀ ਜਾਣਕਾਰੀ ਦੀ ਰੱਖਿਆ ਕਰੋ।',
    // Digital Skills Detail Content
    backToSkills: 'ਹੁਨਰਾਂ \'ਤੇ ਵਾਪਸ',
    // Keyboard & Mouse
    keyboardMouseDetailTitle: 'ਕੀਬੋਰਡ ਅਤੇ ਮਾਊਸ ਦੀਆਂ ਮੂਲ ਗੱਲਾਂ',
    keyboardIntroTitle: 'ਕੀਬੋਰਡ ਨੂੰ ਸਮਝਣਾ',
    keyboardIntroContent: 'ਕੀਬੋਰਡ ਕੰਪਿਊਟਰ ਵਿੱਚ ਟੈਕਸਟ ਟਾਈਪ ਕਰਨ ਲਈ ਤੁਹਾਡਾ ਮੁੱਖ ਸਾਧਨ ਹੈ। ਇਸ ਦੀਆਂ ਬਹੁਤ ਸਾਰੀਆਂ ਕੁੰਜੀਆਂ ਹਨ, ਹਰ ਇੱਕ ਦਾ ਇੱਕ ਵਿਸ਼ੇਸ਼ ਕੰਮ ਹੈ। ਉਹਨਾਂ ਨੂੰ ਸਿੱਖਣ ਨਾਲ ਤੁਹਾਨੂੰ ਤੇਜ਼ੀ ਨਾਲ ਕੰਮ ਕਰਨ ਵਿੱਚ ਮਦਦ ਮਿਲੇਗੀ।',
    keyTypesTitle: 'ਕੁੰਜੀਆਂ ਦੀਆਂ ਕਿਸਮਾਂ',
    keyTypesTyping: 'ਟਾਈਪਿੰਗ ਕੁੰਜੀਆਂ',
    keyTypesTypingDesc: 'ਇਹ ਅੱਖਰ (A-Z) ਅਤੇ ਨੰਬਰ (0-9) ਕੁੰਜੀਆਂ ਹਨ, ਜੋ ਸ਼ਬਦਾਂ ਅਤੇ ਸੰਖਿਆਵਾਂ ਨੂੰ ਟਾਈਪ ਕਰਨ ਲਈ ਵਰਤੀਆਂ ਜਾਂਦੀਆਂ ਹਨ।',
    keyTypesControl: 'ਕੰਟਰੋਲ ਕੁੰਜੀਆਂ',
    keyTypesControlDesc: 'Ctrl, Alt, ਅਤੇ ਵਿੰਡੋਜ਼ ਕੁੰਜੀ ਵਰਗੀਆਂ ਕੁੰਜੀਆਂ ਵਿਸ਼ੇਸ਼ ਕਾਰਵਾਈਆਂ (ਸ਼ਾਰਟਕੱਟ) ਕਰਨ ਲਈ ਦੂਜੀਆਂ ਕੁੰਜੀਆਂ ਦੇ ਨਾਲ ਸੁਮੇਲ ਵਿੱਚ ਵਰਤੀਆਂ ਜਾਂਦੀਆਂ ਹਨ।',
    keyTypesFunction: 'ਫੰਕਸ਼ਨ ਕੁੰਜੀਆਂ',
    keyTypesFunctionDesc: 'ਇਹ ਸਿਖਰ \'ਤੇ F1 ਤੋਂ F12 ਤੱਕ ਲੇਬਲ ਕੀਤੇ ਗਏ ਹਨ। ਤੁਹਾਡੇ ਦੁਆਰਾ ਵਰਤੇ ਜਾ ਰਹੇ ਪ੍ਰੋਗਰਾਮ ਦੇ ਅਧਾਰ \'ਤੇ ਉਹਨਾਂ ਦੇ ਵੱਖ-ਵੱਖ ਕਾਰਜ ਹੁੰਦੇ ਹਨ।',
    mouseIntroTitle: 'ਮਾਊਸ ਵਿੱਚ ਮੁਹਾਰਤ ਹਾਸਲ ਕਰਨਾ',
    mouseIntroContent: 'ਮਾਊਸ ਤੁਹਾਨੂੰ ਤੁਹਾਡੀ ਸਕ੍ਰੀਨ \'ਤੇ ਆਈਟਮਾਂ ਨੂੰ ਪੁਆਇੰਟ ਕਰਨ, ਚੁਣਨ ਅਤੇ ਹਿਲਾਉਣ ਦਿੰਦਾ ਹੈ। ਇਹ ਕੰਪਿਊਟਰ ਨਾਲ ਦ੍ਰਿਸ਼ਟੀਗਤ ਤੌਰ \'ਤੇ ਗੱਲਬਾਤ ਕਰਨ ਲਈ ਇੱਕ ਮੁੱਖ ਸਾਧਨ ਹੈ।',
    mouseActionsTitle: 'ਮੁੱਢਲੀਆਂ ਮਾਊਸ ਕਾਰਵਾਈਆਂ',
    mouseActionsClick: 'ਕਲਿੱਕ (ਖੱਬਾ-ਕਲਿੱਕ)',
    mouseActionsClickDesc: 'ਖੱਬੇ ਮਾਊਸ ਬਟਨ ਨੂੰ ਇੱਕ ਵਾਰ ਦਬਾਉਣਾ ਅਤੇ ਛੱਡਣਾ। ਕਿਸੇ ਆਈਟਮ ਨੂੰ ਚੁਣਨ ਜਾਂ ਬਟਨ ਦਬਾਉਣ ਲਈ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ।',
    mouseActionsDoubleClick: 'ਡਬਲ-ਕਲਿੱਕ',
    mouseActionsDoubleClickDesc: 'ਖੱਬੇ ਮਾਊਸ ਬਟਨ ਨੂੰ ਦੋ ਵਾਰ ਤੇਜ਼ੀ ਨਾਲ ਦਬਾਉਣਾ। ਇੱਕ ਪ੍ਰੋਗਰਾਮ ਜਾਂ ਇੱਕ ਫਾਈਲ ਖੋਲ੍ਹਣ ਲਈ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ.',
    mouseActionsRightClick: 'ਸੱਜਾ-ਕਲਿੱਕ',
    mouseActionsRightClickDesc: 'ਸੱਜੇ ਮਾਊਸ ਬਟਨ ਨੂੰ ਇੱਕ ਵਾਰ ਦਬਾਉਣ ਨਾਲ। ਇਹ ਆਮ ਤੌਰ \'ਤੇ ਤੁਹਾਡੇ ਦੁਆਰਾ ਕਲਿੱਕ ਕੀਤੀ ਆਈਟਮ ਨਾਲ ਸਬੰਧਤ ਹੋਰ ਵਿਕਲਪਾਂ ਵਾਲਾ ਇੱਕ ਮੀਨੂ ਖੋਲ੍ਹਦਾ ਹੈ।',
    mouseActionsScroll: 'ਸਕ੍ਰੌਲ',
    mouseActionsScrollDesc: 'ਬਹੁਤ ਸਾਰੇ ਮਾਊਸ ਵਿੱਚ ਇੱਕ ਸਕ੍ਰੌਲ ਵ੍ਹੀਲ ਹੁੰਦਾ ਹੈ। ਤੁਸੀਂ ਇਸਨੂੰ ਇੱਕ ਪੰਨੇ ਜਾਂ ਦਸਤਾਵੇਜ਼ \'ਤੇ ਉੱਪਰ ਅਤੇ ਹੇਠਾਂ ਜਾਣ ਲਈ ਰੋਲ ਕਰ ਸਕਦੇ ਹੋ।',
    // File Organization
    fileOrgDetailTitle: 'ਫਾਈਲ ਸੰਗਠਨ',
    fileOrgIntroTitle: 'ਫਾਈਲਾਂ ਨੂੰ ਸੰਗਠਿਤ ਕਿਉਂ ਕਰੀਏ?',
    fileOrgIntroContent: 'ਜਿਵੇਂ ਤੁਹਾਡੀਆਂ ਨੋਟਬੁੱਕਾਂ ਨੂੰ ਵਿਵਸਥਿਤ ਰੱਖਣਾ ਤੁਹਾਡੇ ਨੋਟਸ ਲੱਭਣ ਵਿੱਚ ਤੁਹਾਡੀ ਮਦਦ ਕਰਦਾ ਹੈ, ਉਸੇ ਤਰ੍ਹਾਂ ਕੰਪਿਊਟਰ ਫਾਈਲਾਂ ਨੂੰ ਵਿਵਸਥਿਤ ਕਰਨਾ ਤੁਹਾਡੇ ਦਸਤਾਵੇਜ਼ਾਂ, ਫੋਟੋਆਂ ਅਤੇ ਵੀਡੀਓਜ਼ ਨੂੰ ਆਸਾਨੀ ਨਾਲ ਲੱਭਣ ਵਿੱਚ ਤੁਹਾਡੀ ਮਦਦ ਕਰਦਾ ਹੈ। ਇਹ ਸਮਾਂ ਬਚਾਉਂਦਾ ਹੈ ਅਤੇ ਮਹੱਤਵਪੂਰਨ ਕੰਮ ਗੁਆਉਣ ਤੋਂ ਰੋਕਦਾ ਹੈ।',
    whatAreFilesTitle: 'ਫਾਈਲਾਂ ਕੀ ਹਨ?',
    whatAreFilesContent: 'ਇੱਕ ਫਾਈਲ ਜਾਣਕਾਰੀ ਦਾ ਇੱਕ ਟੁਕੜਾ ਹੈ, ਜਿਵੇਂ ਕਿ ਇੱਕ ਟੈਕਸਟ ਦਸਤਾਵੇਜ਼, ਇੱਕ ਤਸਵੀਰ, ਇੱਕ ਗੀਤ, ਜਾਂ ਇੱਕ ਵੀਡੀਓ। ਹਰੇਕ ਫਾਈਲ ਦਾ ਇੱਕ ਨਾਮ ਅਤੇ ਇੱਕ ਆਈਕਨ ਹੁੰਦਾ ਹੈ ਜੋ ਇਸਦੀ ਕਿਸਮ ਦਰਸਾਉਂਦਾ ਹੈ।',
    whatAreFoldersTitle: 'ਫੋਲਡਰ ਕੀ ਹਨ?',
    whatAreFoldersContent: 'ਇੱਕ ਫੋਲਡਰ ਇੱਕ ਕੰਟੇਨਰ ਵਾਂਗ ਹੁੰਦਾ ਹੈ ਜਿੱਥੇ ਤੁਸੀਂ ਫਾਈਲਾਂ ਅਤੇ ਹੋਰ ਫੋਲਡਰ ਵੀ ਸਟੋਰ ਕਰ ਸਕਦੇ ਹੋ। ਫੋਲਡਰਾਂ ਦੀ ਵਰਤੋਂ ਕਰਨ ਨਾਲ ਤੁਹਾਨੂੰ ਸੰਬੰਧਿਤ ਫਾਈਲਾਂ ਨੂੰ ਇਕੱਠੇ ਸਮੂਹ ਕਰਨ ਵਿੱਚ ਮਦਦ ਮਿਲਦੀ ਹੈ।',
    howToOrganizeTitle: 'ਚੰਗੇ ਸੰਗਠਨ ਲਈ ਕਦਮ',
    howToOrganizeStep1: 'ਇੱਕ ਮੁੱਖ ਫੋਲਡਰ ਬਣਾਓ',
    howToOrganizeStep1Desc: 'ਆਪਣੇ ਸਕੂਲ ਦੇ ਕੰਮ ਲਈ ਇੱਕ ਮੁੱਖ ਫੋਲਡਰ ਬਣਾ ਕੇ ਸ਼ੁਰੂ ਕਰੋ। ਤੁਸੀਂ ਇਸਨੂੰ "ਮੇਰਾ ਸਕੂਲ ਦਾ ਕੰਮ" ਜਾਂ "ਕਲਾਸ 8" ਨਾਮ ਦੇ ਸਕਦੇ ਹੋ।',
    howToOrganizeStep2: 'ਵਿਸ਼ਿਆਂ ਲਈ ਉਪ-ਫੋਲਡਰ ਬਣਾਓ',
    howToOrganizeStep2Desc: 'ਆਪਣੇ ਮੁੱਖ ਫੋਲਡਰ ਦੇ ਅੰਦਰ, ਹਰੇਕ ਵਿਸ਼ੇ ਲਈ ਵੱਖਰੇ ਫੋਲਡਰ ਬਣਾਓ, ਜਿਵੇਂ ਕਿ "ਗਣਿਤ," "ਵਿਗਿਆਨ," ਅਤੇ "ਅੰਗਰੇਜ਼ੀ।"',
    howToOrganizeStep3: 'ਫਾਈਲਾਂ ਨੂੰ ਸਪਸ਼ਟ ਨਾਮ ਦਿਓ',
    howToOrganizeStep3Desc: 'ਜਦੋਂ ਤੁਸੀਂ ਕੋਈ ਫਾਈਲ ਸੇਵ ਕਰਦੇ ਹੋ, ਤਾਂ ਇਸਨੂੰ ਅਜਿਹਾ ਨਾਮ ਦਿਓ ਜੋ ਵਰਣਨ ਕਰਦਾ ਹੈ ਕਿ ਇਹ ਕੀ ਹੈ। ਉਦਾਹਰਨ ਲਈ, "Science_Solar_System_Homework.docx" "file1.docx" ਨਾਲੋਂ ਬਹੁਤ ਵਧੀਆ ਹੈ।',
    // Internet Safety
    internetSafetyDetailTitle: 'ਇੰਟਰਨੈੱਟ ਸੁਰੱਖਿਆ',
    internetSafetyIntroTitle: 'ਆਨਲਾਈਨ ਸੁਰੱਖਿਅਤ ਰਹਿਣਾ',
    internetSafetyIntroContent: 'ਇੰਟਰਨੈੱਟ ਦੂਜਿਆਂ ਨਾਲ ਸਿੱਖਣ ਅਤੇ ਜੁੜਨ ਲਈ ਇੱਕ ਸ਼ਾਨਦਾਰ ਜਗ੍ਹ ਹੈ, ਪਰ ਸਾਵਧਾਨ ਰਹਿਣਾ ਮਹੱਤਵਪੂਰਨ ਹੈ। ਇਹਨਾਂ ਸੁਰੱਖਿਆ ਸੁਝਾਵਾਂ ਦੀ ਪਾਲਣਾ ਕਰਨ ਨਾਲ ਤੁਹਾਡੀ ਅਤੇ ਤੁਹਾਡੀ ਨਿੱਜੀ ਜਾਣਕਾਰੀ ਦੀ ਰੱਖਿਆ ਕਰਨ ਵਿੱਚ ਮਦਦ ਮਿਲੇਗੀ।',
    strongPasswordsTitle: 'ਮਜ਼ਬੂਤ ​​ਪਾਸਵਰਡ ਵਰਤੋ',
    strongPasswordsContent: 'ਇੱਕ ਮਜ਼ਬੂਤ ​​ਪਾਸਵਰਡ ਇੱਕ ਦਰਵਾਜ਼ੇ \'ਤੇ ਇੱਕ ਮਜ਼ਬੂਤ ​​ਤਾਲੇ ਵਾਂਗ ਹੁੰਦਾ ਹੈ। ਇਹ ਤੁਹਾਡੇ ਖਾਤਿਆਂ ਨੂੰ ਦੂਜਿਆਂ ਤੋਂ ਸੁਰੱਖਿਅਤ ਰੱਖਣ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ।',
    strongPasswordsTip1: 'ਅੱਖਰਾਂ (ਵੱਡੇ ਅਤੇ ਛੋਟੇ ਦੋਵੇਂ), ਸੰਖਿਆਵਾਂ ਅਤੇ ਚਿੰਨ੍ਹਾਂ (ਜਿਵੇਂ !, @, #) ਦੇ ਮਿਸ਼ਰਣ ਦੀ ਵਰਤੋਂ ਕਰੋ।',
    strongPasswordsTip2: 'ਇਸਨੂੰ ਲੰਬਾ ਬਣਾਓ - ਘੱਟੋ ਘੱਟ 8 ਅੱਖਰ।',
    strongPasswordsTip3: 'ਆਪਣੀ ਨਿੱਜੀ ਜਾਣਕਾਰੀ ਜਿਵੇਂ ਕਿ ਤੁਹਾਡਾ ਨਾਮ, ਜਨਮਦਿਨ, ਜਾਂ ਸਕੂਲ ਦਾ ਨਾਮ ਨਾ ਵਰਤੋ।',
    phishingTitle: 'ਫਿਸ਼ਿੰਗ ਤੋਂ ਸਾਵਧਾਨ ਰਹੋ',
    phishingContent: 'ਫਿਸ਼ਿੰਗ ਉਦੋਂ ਹੁੰਦੀ ਹੈ ਜਦੋਂ ਕੋਈ ਤੁਹਾਨੂੰ ਜਾਅਲੀ ਈਮੇਲਾਂ ਜਾਂ ਸੰਦੇਸ਼ ਭੇਜ ਕੇ ਤੁਹਾਡੀ ਨਿੱਜੀ ਜਾਣਕਾਰੀ, ਜਿਵੇਂ ਕਿ ਪਾਸਵਰਡ ਜਾਂ ਬੈਂਕ ਵੇਰਵੇ, ਦੇਣ ਲਈ ਧੋਖਾ ਦੇਣ ਦੀ ਕੋਸ਼ਿਸ਼ ਕਰਦਾ ਹੈ।',
    phishingTip1: 'ਉਹਨਾਂ ਈਮੇਲਾਂ ਦੇ ਲਿੰਕਾਂ \'ਤੇ ਕਲਿੱਕ ਨਾ ਕਰੋ ਜਾਂ ਅਟੈਚਮੈਂਟਾਂ ਨੂੰ ਡਾਊਨਲੋਡ ਨਾ ਕਰੋ ਜਿਨ੍ਹਾਂ ਨੂੰ ਤੁਸੀਂ ਨਹੀਂ ਪਛਾਣਦੇ।',
    phishingTip2: 'ਤੁਹਾਡਾ ਪਾਸਵਰਡ ਮੰਗਣ ਵਾਲੇ ਜਾਂ ਜ਼ਰੂਰੀ ਹੋਣ ਦਾ ਅਹਿਸਾਸ ਪੈਦਾ ਕਰਨ ਵਾਲੇ ਸੁਨੇਹਿਆਂ ਤੋਂ ਸਾਵਧਾਨ ਰਹੋ।',
    personalInfoTitle: 'ਆਪਣੀ ਨਿੱਜੀ ਜਾਣਕਾਰੀ ਦੀ ਰੱਖਿਆ ਕਰੋ',
    personalInfoContent: 'ਇਸ ਬਾਰੇ ਬਹੁਤ ਸਾਵਧਾਨ ਰਹੋ ਕਿ ਤੁਸੀਂ ਆਪਣੀ ਨਿੱਜੀ ਜਾਣਕਾਰੀ ਨੂੰ ਆਨਲਾਈਨ ਕਿਸ ਨਾਲ ਸਾਂਝਾ ਕਰਦੇ ਹੋ। ਇਸ ਵਿੱਚ ਤੁਹਾਡਾ ਪੂਰਾ ਨਾਮ, ਪਤਾ, ਫ਼ੋਨ ਨੰਬਰ ਅਤੇ ਸਕੂਲ ਦਾ ਨਾਮ ਸ਼ਾਮਲ ਹੈ। ਅਜਿਹੀ ਜਾਣਕਾਰੀ ਸਿਰਫ਼ ਆਪਣੇ ਮਾਪਿਆਂ ਜਾਂ ਅਧਿਆਪਕਾਂ ਨਾਲ ਸਾਂਝੀ ਕਰਨਾ ਸਭ ਤੋਂ ਵਧੀਆ ਹੈ।',
    // Admin/Teacher Dashboard
    userDistribution: 'ਵਰਤੋਂਕਾਰ ਵੰਡ',
    // User Management
    userManagement: 'ਵਰਤੋਂਕਾਰ ਪ੍ਰਬੰਧਨ',
    userManagementTitle: 'ਵਰਤੋਂਕਾਰ ਪ੍ਰਬੰਧਨ',
    userManagementDesc: 'ਸਾਰੇ ਵਿਦਿਆਰਥੀ ਅਤੇ ਅਧਿਆਪਕ ਖਾਤਿਆਂ ਨੂੰ ਦੇਖੋ, ਸੰਪਾਦਿਤ ਕਰੋ ਅਤੇ ਪ੍ਰਬੰਧਿਤ ਕਰੋ।',
    allTeachers: 'ਸਾਰੇ ਅਧਿਆਪਕ',
    allStudents: 'ਸਾਰੇ ਵਿਦਿਆਰਥੀ',
    editUser: 'ਵਰਤੋਂਕਾਰ ਦਾ ਸੰਪਾਦਨ ਕਰੋ',
    deleteUserConfirm: 'ਕੀ ਤੁਸੀਂ ਯਕੀਨੀ ਤੌਰ \'ਤੇ ਇਸ ਵਰਤੋਂਕਾਰ ਨੂੰ ਮਿਟਾਉਣਾ ਚਾਹੁੰਦੇ ਹੋ? ਇਸ ਕਾਰਵਾਈ ਨੂੰ ਵਾਪਸ ਨਹੀਂ ਕੀਤਾ ਜਾ ਸਕਦਾ।',
    lastLogin: 'ਆਖਰੀ ਲੌਗਇਨ',
    newPassword: 'ਨਵਾਂ ਪਾਸਵਰਡ',
    newPasswordHelp: 'ਮੌਜੂਦਾ ਪਾਸਵਰਡ ਰੱਖਣ ਲਈ ਖਾਲੀ ਛੱਡੋ',
    actions: 'ਕਾਰਵਾਈਆਂ',
    never: 'ਕਦੇ ਨਹੀਂ',
  },
};