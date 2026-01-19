export interface Member {
  id: number;
  name: string;
  position?: string;
  imageUrl?: string;
  bio?: string; // kept for compatibility, not used
  resumeUrl?: string;
  year?: "2nd" | "3rd" | "4th";
  socialLinks?: {
    linkedin?: string;
    github?: string;
    email?: string;
  };
}

export interface MemberCardProps {
  member: Member;
}

export interface SocialLinkProps {
  href: string;
  aria: string;
  icon: React.ReactNode;
}

export const members: Member[] = [
  {
    id: 1,
    name: "Vinay Madival",
    position: "Tech Lead, Aegis",
    year: "4th",
    imageUrl: "/members/vinay_madival.png",
    resumeUrl:
      "https://drive.google.com/file/d/10yBuR0mhTRiZ46y4Or7z7vXzBtYPz8Tb/view?usp=sharing",

    socialLinks: {
      github: "https://github.com/VINAYMADIVAL",
      linkedin: "https://www.linkedin.com/in/vinay-madival-ab9059320/",
      email: "vinaymadivalcmp@gmail.com",
    },
  },
  {
    id: 2,
    name: "Vinay Madival",
    position: "Tech Co-Lead, Aegis",
    year: "3rd",
    imageUrl: "/members/vinay_madival.png",
    resumeUrl:
      "https://drive.google.com/file/d/10yBuR0mhTRiZ46y4Or7z7vXzBtYPz8Tb/view?usp=drive_link",
    socialLinks: {
      github: "https://github.com/VINAYMADIVAL",
      linkedin: "https://www.linkedin.com/in/vinay-madival-ab9059320/",
      email: "vinaymadivalcmp@gmail.com",
    },
  },
  {
    id: 3,
    name: "Vinay Madival",
    position: "Tech Member, Aegis",
    year: "2nd",
    imageUrl: "/members/vinay_madival.png",
    resumeUrl: undefined,
    socialLinks: {
      github: "https://github.com/VINAYMADIVAL",
      linkedin: "https://www.linkedin.com/in/vinay-madival-ab9059320/",
      email: "vinaymadivalcmp@gmail.com",
    },
  },
  {
    id: 4,
    name: "Vinay Madival",
    position: "Tech Member, Aegis",
    year: "2nd",
    imageUrl: "/members/vinay_madival.png",
    resumeUrl:
      "https://drive.google.com/file/d/10yBuR0mhTRiZ46y4Or7z7vXzBtYPz8Tb/view?usp=drive_link",
    socialLinks: {
      github: "https://github.com/VINAYMADIVAL",
      linkedin: "https://www.linkedin.com/in/vinay-madival-ab9059320/",
      email: "vinaymadivalcmp@gmail.com",
    },
  },
  {
    id: 5,
    name: "Vinay Madival",
    position: "Tech Member, Aegis",
    year: "2nd",
    imageUrl: "/members/vinay_madival.png",
    resumeUrl:
      "https://drive.google.com/file/d/10yBuR0mhTRiZ46y4Or7z7vXzBtYPz8Tb/view?usp=drive_link",
    socialLinks: {
      github: "https://github.com/VINAYMADIVAL",
      linkedin: "https://www.linkedin.com/in/vinay-madival-ab9059320/",
      email: "vinaymadivalcmp@gmail.com",
    },
  },
  {
    id: 6,
    name: "Vinay Madival",
    position: "Tech Member, Aegis",
    year: "2nd",
    imageUrl: "/members/vinay_madival.png",
    resumeUrl:
      "https://drive.google.com/file/d/10yBuR0mhTRiZ46y4Or7z7vXzBtYPz8Tb/view?usp=drive_link",
    socialLinks: {
      github: "https://github.com/VINAYMADIVAL",
      linkedin: "https://www.linkedin.com/in/vinay-madival-ab9059320/",
      email: "vinaymadivalcmp@gmail.com",
    },
  },
  {
    id: 7,
    name: "Vinay Madival",
    position: "Tech Member, Aegis",
    year: "2nd",
    imageUrl: "/members/vinay_madival.png",
    resumeUrl:
      "https://drive.google.com/file/d/10yBuR0mhTRiZ46y4Or7z7vXzBtYPz8Tb/view?usp=drive_link",
    socialLinks: {
      github: "https://github.com/VINAYMADIVAL",
      linkedin: "https://www.linkedin.com/in/vinay-madival-ab9059320/",
      email: "vinaymadivalcmp@gmail.com",
    },
  },
];
