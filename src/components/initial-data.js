const initialData = {
  apps: {
    "apps-1": {
      id: "apps-1",
      name: "Email",
      content: "Access Pitt email through Outlook "
    },
    "apps-2": {
      id: "apps-2",
      name: "LibraryResources",
      content: "One stop place for books and research papers"
    },
    "apps-3": {
      id: "apps-3",
      name: "Courseweb",
      content: "Log in to Pitt's web-based learning management system"
    },
    "apps-4": {
      id: "apps-4",
      name: "Printing",
      content: "Send print jobs to self-service printers, even from your phone"
    },
    "apps-5": {
      id: "apps-5",
      name: "StudentHealth",
      content: "Access the student health portal (Medicat)"
    },
    "apps-6": {
      id: "apps-6",
      name: "ResearchOpportunities",
      content: "Research Opportunities under esteemed faculty"
    },
    "apps-7": {
      id: "apps-7",
      name: "PittSource",
      content: "Portal to find on campus jobs"
    }
  },
  column: {
    "column-1": {
      id: "column-1",
      title: "All Apps",
      appIds: ["apps-4", "apps-5", "apps-6", "apps-7"]
    },
    "column-2": {
      id: "column-2",
      title: "My Apps",
      appIds: ["apps-1", "apps-2", "apps-3"]
    }
  },
  columnOrder: ["column-1", "column-2"]
};

export default initialData;
