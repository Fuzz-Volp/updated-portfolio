const header = {
  // all the properties are optional - can be left empty or deleted
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Fuzzy Volpitta',
  role: 'Full Stack Engineer',
  description:
    "I'm a software engineer with a passion for creating beautiful, user-friendly applications. My skills lie in TypeScript, JavaScript, Tailwindcss, MongoDB, and React, and I'm always eager to learn new technologies to stay on top of the latest industry trends. I've worked on a variety of projects, and I love tackling complex problems and finding innovative solutions. When I'm not coding, you can usually find me reading, hiking, or spending time with my friends and family. I'm a big believer in work-life balance and I'm always striving to find ways to stay healthy and happy, both on and off the job. Thanks for stopping by my portfolio page! Feel free to take a look at some of my projects and drop me a line if you're interested in working together. ",
  resume:
    'https://docs.google.com/document/d/e/2PACX-1vSJuUUk8uR6iqSl82OcRtqXJGEOGdL08rGY0K8NABpr1_fkgwmaUDp0Pe3W8X9NybFXYjoP5_keT1JK/pub',
  social: {
    linkedin: 'https://linkedin.com/in/fuzzvolpitta',
    github: 'https://github.com/Fuzz-Volp',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Survive the Gauntlet',
    description:
      "This was my very first project. It's a work in progress and a reminder of how far I've come.",
    stack: ['Vanilla-JavaScript', 'HTML', 'CSS'],
    sourceCode: 'https://github.com/Fuzz-Volp/Survive-the-Gauntlet',
    livePreview: 'https://fuzz-volp.github.io/Survive-the-Gauntlet/',
  },
  {
    name: 'Simply Art',
    description:
      'Simply Art is a webpage for my wife to be able to share and sell her artwork!',
    stack: ['Tailwind', 'JavaScript', 'JSX', 'MongoDB'],
    sourceCode: 'https://github.com/Fuzz-Volp/Simply-Art',
    livePreview: 'https://github.com',
  },
  {
    name: 'Quill and Blade',
    description:
      'This is my work in progress solution to some of the issues that I found with many of the TTRPG tools that I have used in the past. ',
    stack: ['TypeScript', 'Tailwind', 'React'],
    sourceCode: 'https://github.com/Fuzz-Volp/Quill-and-Blade',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'SASS',
  'Material UI',
  'Git',
  'Tailwindcss',
  'Flowbite',
  'Zustand',
  'Jest',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'johnvolpitta@gmail.com',
}

export { header, about, projects, skills, contact }
