import { DATA_SCIENCE, FRONTEND, FULLSTACK, JAVASCRIPT, MACHINE_LEARNING, MOBILE_UI, REACT_JS, REACT_NATIVE } from "./Image";


export const successToastData = {
  type: 'success',
  position: 'center',
  text1: 'Enrollment Confirmation',
  text2: 'You have been enrolled in the course.',
}

export const infoToastData = {
  type: 'info',
  position: 'center',
  text1: 'Already enrolled !',
  text2: 'You are already enrolled in this course.'
}
export const failureToastData = {
  type: 'error',
  position: 'center',
  text1: 'Enrollment Error !',
  text2: 'Enrollment is not available for this course.',
}

export enum COURSE_DATA {
    COURSE_LIST = 'Course List',
    BY = 'By : ',
    OPEN = 'Open',
    ENROLLED_COURSES = 'enrolledCourses',
    ENROLL_STATUS = 'Enrollment Status',
    COURSE_DURATION = 'Course Duration',
    SCHEDULE = 'Schedule',
    LOCATION = 'Location',
    PRE_REQUISITES = 'Pre-requisites',
    ABOUT_COURSE = 'About Course',
    SYLLABUS = 'Syllabus',
    WEEK = 'Week',
    ENROLLED = 'Enrolled',
    DATE = 'Due Date : ',
    EN_COURSE = 'Enrolled Courses',
    NO_COURSE = 'You have not enrolled in any courses yet',
}

const courseModel = [
    {
      id: 1,
      name: 'Introduction to React Native',
      instructor: 'John Doe',
      description: 'Learn the basics of React Native development and build your first mobile app.',
      enrollmentStatus: 'Closed',
      thumbnail: REACT_NATIVE,
      duration: '8 weeks',
      schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
      location: 'Online',
      prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
      dueDate: '2023-12-31', 
      progress: 30,
      syllabus: [
        {
          week: 1,
          topic: 'Introduction to React Native',
          content: 'Overview of React Native, setting up your development environment.',
        },
        {
          week: 2,
          topic: 'Creating Your First App',
          content: 'Creating a simple mobile app using React Native components.',
        },
        {
          week: 3,
          topic: 'Styling and Layout',
          content: 'Styling your app with CSS, layout, and Flexbox.',
        },
        {
          week: 4,
          topic: 'Navigation in React Native',
          content: 'Implementing navigation between screens.',
        },
        {
          week: 5,
          topic: 'State Management',
          content: 'Managing state using React hooks and context.',
        },
        {
          week: 6,
          topic: 'API Integration',
          content: 'Fetching data from APIs and displaying it in your app.',
        },
        {
          week: 7,
          topic: 'Testing and Debugging',
          content: 'Testing your app and debugging common issues.',
        },
        {
          week: 8,
          topic: 'Deployment',
          content: 'Preparing your app for deployment to app stores.',
        },
      ],
      students: [
        {
        id: 101,
        name: 'Alice Johnson',
        email: 'alice@example.com',
        },
        {
        id: 102,
        name: 'Bob Smith',
        email: 'bob@example.com',
        },
      ]
    },
    {
      id: 2,
      name: 'Advanced JavaScript Concepts',
      instructor: 'Jane Smith',
      description: 'Dive deep into advanced JavaScript topics, including closures, promises, and async/await.',
      enrollmentStatus: 'Open',
      thumbnail: JAVASCRIPT,
      duration: '6 weeks',
      schedule: 'Mondays and Wednesdays, 7:00 PM - 9:00 PM',
      location: 'Online',
      prerequisites: ['Intermediate JavaScript knowledge'],
      dueDate: '2023-11-01',
  progress: 50,
      syllabus: [
        {
          week: 1,
          topic: 'Closures and Scopes',
          content: 'Understanding closures and lexical scoping in JavaScript.',
        },
        {
          week: 2,
          topic: 'Promises and Async/Await',
          content: 'Working with asynchronous JavaScript using Promises and Async/Await.',
        },
        {
          week: 3,
          topic: 'Functional Programming',
          content: 'Exploring functional programming concepts in JavaScript.',
        },
        {
          week: 4,
          topic: 'Modules and Bundlers',
          content: 'Managing JavaScript modules and bundling with tools like Webpack.',
        },
        {
          week: 5,
          topic: 'Design Patterns',
          content: 'Understanding common JavaScript design patterns.',
        },
        {
          week: 6,
          topic: 'Advanced Topics',
          content: 'Exploring advanced JavaScript concepts and patterns.',
        },
      ],
      students: [
        {
        id: 101,
        name: 'Alice Johnson',
        email: 'alice@example.com',
        },
     ]
    },
    {
      id: 3,
      name: 'Web Development with React',
      instructor: 'Sarah Johnson',
      description: 'Build web applications using React.js, covering state management and routing.',
      enrollmentStatus: 'Open',
      thumbnail: REACT_JS,
      duration: '10 weeks',
      schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
      location: 'Online',
      prerequisites: ['HTML, CSS, and JavaScript basics'],
      dueDate: '2024-01-11', 
      progress: 90,
      syllabus: [
        {
          week: 1,
          topic: 'Introduction to React.js',
          content: 'Getting started with React components and JSX.',
        },
        {
          week: 2,
          topic: 'State Management with Redux',
          content: 'Managing application state with Redux.',
        },
        {
          week: 3,
          topic: 'React Router and Navigation',
          content: 'Implementing routing and navigation in React applications.',
        },
        {
          week: 4,
          topic: 'Component Styling',
          content: 'Styling React components using CSS-in-JS and styled-components.',
        },
        {
          week: 5,
          topic: 'REST API Integration',
          content: 'Connecting React applications to RESTful APIs.',
        },
        {
          week: 6,
          topic: 'GraphQL and Apollo Client',
          content: 'Using GraphQL and Apollo Client for data fetching.',
        },
        {
          week: 7,
          topic: 'Authentication and Authorization',
          content: 'Implementing user authentication and authorization in React apps.',
        },
        {
          week: 8,
          topic: 'Testing React Apps',
          content: 'Testing React components and applications.',
        },
        {
          week: 9,
          topic: 'Serverless Functions and Deployment',
          content: 'Using serverless functions and deploying web apps.',
        },
        {
          week: 10,
          topic: 'Final Project',
          content: 'Develop and present a final web application project.',
        },
      ],
      students: [],
    },
    {
      id: 4,
      name: 'Data Science Fundamentals',
      instructor: 'David Brown',
      description: 'Learn the basics of data science, including data analysis and visualization using Python.',
      enrollmentStatus: 'Open',
      thumbnail: DATA_SCIENCE,
      duration: '12 weeks',
      schedule: 'Wednesdays and Fridays, 5:00 PM - 7:00 PM',
      location: 'Online',
      prerequisites: ['Basic Python knowledge'],
      dueDate: '2024-02-21', 
      progress: 42,
      syllabus: [
        {
          week: 1,
          topic: 'Introduction to Data Science',
          content: 'Overview of data science and the data analysis process.',
        },
        {
          week: 2,
          topic: 'Data Cleaning and Exploration',
          content: 'Cleaning and exploring datasets using Python libraries.',
        },
        {
          week: 3,
          topic: 'Data Visualization',
          content: 'Creating data visualizations using Matplotlib and Seaborn.',
        },
        {
          week: 4,
          topic: 'Statistical Analysis',
          content: 'Performing statistical analysis on data sets.',
        },
        {
          week: 5,
          topic: 'Machine Learning Basics',
          content: 'Introduction to machine learning algorithms.',
        },
        {
          week: 6,
          topic: 'Supervised Learning',
          content: 'Understanding supervised learning and building predictive models.',
        },
        {
          week: 7,
          topic: 'Unsupervised Learning',
          content: 'Exploring unsupervised learning and clustering techniques.',
        },
        {
          week: 8,
          topic: 'Data Science Projects',
          content: 'Working on data science projects and presenting findings.',
        },
        {
          week: 9,
          topic: 'Advanced Topics',
          content: 'Exploring advanced data science concepts and techniques.',
        },
        {
          week: 10,
          topic: 'Final Data Science Project',
          content: 'Develop and present a final data science project.',
        },
      ],
      students: [],
    },
    {
      id: 5,
      name: 'Mobile App Design Principles',
      instructor: 'Emily White',
      description: 'Learn the principles of mobile app design, including user experience and UI design.',
      enrollmentStatus: 'Open',
      thumbnail: MOBILE_UI,
      duration: '6 weeks',
      schedule: 'Mondays and Wednesdays, 6:00 PM - 8:00 PM',
      prerequisites: ['Basic design knowledge'],
      dueDate: '2023-11-31', 
      progress: 10,
      syllabus: [
        {
          week: 1,
          topic: 'User Interface Design',
          content: 'Introduction to designing user interfaces for mobile apps.',
        },
        {
          week: 2,
          topic: 'User Experience (UX) Design',
          content: 'Understanding and creating great user experiences in mobile apps.',
        },
        {
          week: 3,
          topic: 'Mobile App Navigation',
          content: 'Designing effective navigation and information architecture.',
        },
        {
          week: 4,
          topic: 'Mobile App Usability',
          content: 'Ensuring usability and accessibility in mobile app design.',
        },
        {
          week: 5,
          topic: 'Mobile App Prototyping',
          content: 'Creating interactive prototypes for user testing.',
        },
        {
          week: 6,
          topic: 'Mobile App Design Trends',
          content: 'Exploring current trends in mobile app design.',
        },
      ],
      students: [],
    },
    {
      id: 6,
      name: 'Full Stack Web Development',
      instructor: 'Michael Adams',
      description: 'Learn to build modern web applications from front-end to back-end using popular technologies.',
      enrollmentStatus: 'Open',
      thumbnail: FULLSTACK,
      duration: '16 weeks',
      schedule: 'Mondays and Wednesdays, 7:00 PM - 9:00 PM',
      location: 'Online',
      prerequisites: ['HTML, CSS, JavaScript fundamentals'],
      dueDate: '2024-02-24', 
      progress: 70,
      syllabus: [
        {
          week: 1,
          topic: 'Introduction to Web Development',
          content: 'Overview of web development technologies and tools.',
        },
        {
          week: 2,
          topic: 'Front-End Development',
          content: 'Building user interfaces and interactive web pages.',
        },
        {
          week: 3,
          topic: 'Responsive Web Design',
          content: 'Creating responsive and mobile-friendly web layouts.',
        },
        {
          week: 4,
          topic: 'Back-End Development',
          content: 'Building server-side applications and APIs.',
        },
        {
          week: 5,
          topic: 'Databases and Data Storage',
          content: 'Working with databases and data storage technologies.',
        },
        {
          week: 6,
          topic: 'Authentication and Security',
          content: 'Implementing user authentication and securing web apps.',
        },
        {
          week: 7,
          topic: 'RESTful APIs',
          content: 'Creating and consuming RESTful APIs for web apps.',
        },
        {
          week: 8,
          topic: 'Web Development Frameworks',
          content: 'Exploring popular web development frameworks.',
        },
        {
          week: 9,
          topic: 'DevOps and Deployment',
          content: 'Managing the deployment and infrastructure of web applications.',
        },
        {
          week: 10,
          topic: 'Final Full-Stack Project',
          content: 'Develop and present a final full-stack web application project.',
        },
      ],
      students: [],
    },
    {
      id: 7,
      name: 'Machine Learning and AI Basics',
      instructor: 'Sophia Lee',
      description: 'Explore the fundamentals of machine learning and artificial intelligence with hands-on projects.',
      enrollmentStatus: 'Open',
      thumbnail: MACHINE_LEARNING,
      duration: '12 weeks',
      schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
      location: 'Online',
      prerequisites: ['Basic Python programming'],
      dueDate: '2023-12-03', 
      progress: 99,
      syllabus: [
        {
          week: 1,
          topic: 'Introduction to Machine Learning',
          content: 'Overview of machine learning concepts and algorithms.',
        },
        {
          week: 2,
          topic: 'Supervised Learning',
          content: 'Understanding supervised learning and building predictive models.',
        },
        {
          week: 3,
          topic: 'Unsupervised Learning',
          content: 'Exploring unsupervised learning and clustering techniques.',
        },
        {
          week: 4,
          topic: 'Deep Learning and Neural Networks',
          content: 'Understanding deep learning and neural network models.',
        },
        {
          week: 5,
          topic: 'Natural Language Processing (NLP)',
          content: 'Working with text data and NLP techniques.',
        },
        {
          week: 6,
          topic: 'Computer Vision',
          content: 'Exploring computer vision and image analysis.',
        },
        {
          week: 7,
          topic: 'Reinforcement Learning',
          content: 'Understanding reinforcement learning and applications.',
        },
        {
          week: 8,
          topic: 'Machine Learning Projects',
          content: 'Working on machine learning projects and presenting results.',
        },
        {
          week: 9,
          topic: 'AI and Ethics',
          content: 'Exploring ethical considerations in AI and machine learning.',
        },
        {
          week: 10,
          topic: 'Final AI Project',
          content: 'Develop and present a final AI project with practical applications.',
        },
      ],
      students: [],
    },
    {
      id: 8,
      name: 'Front-End Web Development',
      instructor: 'Lisa Green',
      description: 'Learn front-end web development with a focus on HTML, CSS, and JavaScript.',
      enrollmentStatus: 'Open',
      thumbnail: FRONTEND,
      duration: '8 weeks',
      schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
      location: 'Online',
      prerequisites: ['No prior experience required'],
      dueDate: '2024-05-13', 
      progress: 80,
      syllabus: [
        {
          week: 1,
          topic: 'Introduction to HTML',
          content: 'Getting started with HTML and creating web pages.',
        },
        {
          week: 2,
          topic: 'CSS Fundamentals',
          content: 'Styling web pages with CSS and creating responsive designs.',
        },
        {
          week: 3,
          topic: 'JavaScript Basics',
          content: 'Introduction to JavaScript and adding interactivity to websites.',
        },
        {
          week: 4,
          topic: 'Responsive Web Design',
          content: 'Creating responsive and mobile-friendly web layouts.',
        },
        {
          week: 5,
          topic: 'Web Design Principles',
          content: 'Exploring design principles for web development.',
        },
        {
          week: 6,
          topic: 'Building Web Forms',
          content: 'Creating forms for user input and data collection.',
        }, 
    ],
    students: [],
  },
]  

const fetchCourseData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(courseModel);
      }, 1000); // Simulate a 1-second delay
    });
  };
  
  export default {
    fetchCourseData,
  };
