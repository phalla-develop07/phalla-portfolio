import { profile } from "../data/profile";
import { education } from "../data/education";
import { skillCategories, softSkills } from "../data/skills";
import { tools } from "../data/tools";
import { languages } from "../data/languages";
import { experience } from "../data/experience";
import { hobbies } from "../data/hobbies";
import { interests } from "../data/interests";
import { projects, projectFilters } from "../data/projects";
import { references } from "../data/references";
import { achievements } from "../data/achievements";
import { whyHireMe } from "../data/whyHireMe";

export function usePortfolioData() {
  return {
    profile,
    education,
    skillCategories,
    softSkills,
    tools,
    languages,
    experience,
    hobbies,
    interests,
    projects,
    projectFilters,
    references,
    achievements,
    whyHireMe,
  };
}
