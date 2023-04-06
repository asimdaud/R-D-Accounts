export const user = {
  id: "user123",
  firstName: "Jafar",
  lastName: "Iqbal",
  fullName: "Jafar Iqbal",
  email: "jiqbal29@hotmail.com",
  phone: "0161 705 4389 / 07973376430",
  address: "Imperial House Barcroft St Bury BL9 5BT",
  city: "Bury",
  country: "UK",
  avatar: "/assets/avatars/avatar-siegbert-gottfried.png",
  jobTitle: "Senior Developer",
  timezone: "GTM-7",
  host: true,
  clients: ["userId456", "userId789"],
  projects: ["project123", "project456", "project789"],
  companies: ["company123", "company456"],
};

export const company = {
  companyId: "company123",
  owner: "user123",
  name: "Codexan Intl Ltd",
  size: "medium-sized enterprise",
  foundedIn: "1 Jan 2010",
  //   yearEnded: "31 March 2022",
  address: "4 Vanguard Close BL8 1NF",
  country: "",
  email: "",
  officers: [
    {
      name: "Muhammad Asif",
      position: "Director",
      dateJoined: "1 Jan 2010",
    },
    {
      name: "Muhammad Atif",
      position: "CTO",
      dateJoined: "17 Nov 2020",
    },
  ],
  //   developmentActivities: [
  //     {
  //       history: "wow",
  //       uncertainties: "good",
  //       activities: "shot",
  //     },
  //   ],
};

export const project = {
  projectId: "project123",
  creator: "user123",
  collaborators: ["user456"],
  company: "company123",
  yearEnded: "31 March 2022",
  developmentActivities: [
    {
      history: "wow",
      uncertainties: "good",
      activities: "shot",
    },
  ],
};
