const initialData = {
  authors: [
    {
      id: "cory-house",
      firstName: "Cory",
      lastName: "House"
    },
    {
      id: "scott-allen",
      firstName: "Scott",
      lastName: "Allen"
    },
    {
      id: "dan-wahlin",
      firstName: "Dan",
      lastName: "Wahlin"
    }
  ],

  courses: [
    {
      id: "react-flux-building-applications",
      title: "Building Applications in React and Flux",
      watchHref:
        "http://www.pluralsight.com/courses/react-flux-building-applications",
      authorId: "cory-house",
      length: "5:08",
      category: "JavaScript"
    },
    {
      id: "clean-code",
      title: "Clean Code: Writing Code for Humans",
      watchHref: "http://www.pluralsight.com/courses/writing-clean-code-humans",
      authorId: "cory-house",
      length: "3:10",
      category: "Software Practices"
    },
    {
      id: "architecture",
      title: "Architecting Applications for the Real World",
      watchHref:
        "http://www.pluralsight.com/courses/architecting-applications-dotnet",
      authorId: "cory-house",
      length: "2:52",
      category: "Software Architecture"
    },
    {
      id: "career-reboot-for-developer-mind",
      title: "Becoming an Outlier: Reprogramming the Developer Mind",
      watchHref:
        "http://www.pluralsight.com/courses/career-reboot-for-developer-mind",
      authorId: "dan-wahlin",
      length: "2:30",
      category: "Career"
    },
    {
      id: "web-components-shadow-dom",
      title: "Web Component Fundamentals",
      watchHref: "http://www.pluralsight.com/courses/web-components-shadow-dom",
      authorId: "cory-house",
      length: "5:10",
      category: "HTML5"
    }
  ]
};

const store = {
  getData(name) {
    const storage = window.localStorage;
    
    if(!storage) return;

    if (!storage.getItem(`redux-${name}Data`)) {
      storage.setItem(`redux-${name}Data`, JSON.stringify(initialData[name]));
    }

    return JSON.parse(storage.getItem(`redux-${name}Data`));
  },

  setData(name, data){
    window.localStorage.setItem(`redux-${name}Data`, JSON.stringify(data));
  }
};

export default store;
