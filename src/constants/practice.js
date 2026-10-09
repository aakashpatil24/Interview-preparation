export const CATEGORIES = ["DSA", "Git", "Technical"];

export const DIFFICULTIES = ["Easy", "Medium", "Hard"];

export const STATUSES = [
  "Pending",
  "In Progress",
  "Completed",
];

export const STORAGE_KEY = "interview-practice-tracker:v1";

// Starter questions shown the first time the app runs (no data in
// LocalStorage yet). Once saved, the stored data becomes the single
// source of truth, so deleting/editing these is permanent like any
// other question.
export const SEED_QUESTIONS = [
  {
    id: "seed-dsa-1",
    title: "Two Sum — LC 1",
    category: "DSA",
    difficulty: "Easy",
    status: "Pending",
  },
  {
    id: "seed-dsa-2",
    title: "Remove Duplicates from Sorted Array — LC 26",
    category: "DSA",
    difficulty: "Easy",
    status: "Pending",
  },
  {
    id: "seed-dsa-3",
    title: "Move Zeroes — LC 283",
    category: "DSA",
    difficulty: "Easy",
    status: "Pending",
  },
  {
    id: "seed-dsa-4",
    title: "Rotate Array — LC 189",
    category: "DSA",
    difficulty: "Medium",
    status: "Pending",
  },
  {
    id: "seed-dsa-5",
    title: "3Sum — LC 15",
    category: "DSA",
    difficulty: "Medium",
    status: "Pending",
  },
  {
    id: "seed-git-1",
    title: "Wrong Branch, Correct Work",
    category: "Git",
    difficulty: "Medium",
    status: "Pending",
  },
  {
    id: "seed-git-2",
    title: "Merge Conflict During PR",
    category: "Git",
    difficulty: "Medium",
    status: "Pending",
  },
  {
    id: "seed-git-3",
    title: "Secret Accidentally Committed",
    category: "Git",
    difficulty: "Medium",
    status: "Pending",
  },
  {
    id: "seed-git-4",
    title: "PR Review With New Changes",
    category: "Git",
    difficulty: "Medium",
    status: "Pending",
  },
  {
    id: "seed-git-5",
    title: "Recovering Lost Local Work",
    category: "Git",
    difficulty: "Medium",
    status: "Pending",
  },
  {
    id: "seed-tech-1",
    title: "JavaScript — Async Flow and the Event Loop",
    category: "Technical",
    difficulty: "Medium",
    status: "Pending",
  },
  {
    id: "seed-tech-2",
    title: "React — Unnecessary Re-renders",
    category: "Technical",
    difficulty: "Medium",
    status: "Pending",
  },
  {
    id: "seed-tech-3",
    title: "REST API + Express — Debugging a 401 Request Flow",
    category: "Technical",
    difficulty: "Medium",
    status: "Pending",
  },
  {
    id: "seed-tech-4",
    title: "MongoDB + Mongoose — Preventing Duplicate Data",
    category: "Technical",
    difficulty: "Hard",
    status: "Pending",
  },
  {
    id: "seed-tech-5",
    title: "Authentication + Authorization + ImageKit Upload Flow",
    category: "Technical",
    difficulty: "Hard",
    status: "Pending",
  },
];

export const INITIAL_DATA = {
  questions: SEED_QUESTIONS,
  machineCodingStatus: "Pending",
};

export const INITIAL_FILTERS = {
  search: "",
  category: "All",
  difficulty: "All",
  status: "All",
};

// Validate browser-stored data before using it.
export function isValidPracticeData(data) {
  if (
    !data ||
    typeof data !== "object" ||
    !Array.isArray(data.questions) ||
    !STATUSES.includes(data.machineCodingStatus)
  ) {
    return false;
  }

  const ids = new Set();

  return data.questions.every((question) => {
    if (
      !question ||
      typeof question !== "object" ||
      typeof question.id !== "string" ||
      !question.id ||
      ids.has(question.id) ||
      typeof question.title !== "string" ||
      question.title.trim().length < 3 ||
      question.title.length > 150 ||
      !CATEGORIES.includes(question.category) ||
      !DIFFICULTIES.includes(question.difficulty) ||
      !STATUSES.includes(question.status)
    ) {
      return false;
    }

    ids.add(question.id);
    return true;
  });
}