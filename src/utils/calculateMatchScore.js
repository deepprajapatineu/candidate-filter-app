const calculateMatchScore = (candidate, job) => {
    let score = 0;

    // Skill match
    const matchedSkills = candidate.skills.filter(skill =>
        job.requiredSkills.includes(skill)
    ).length;
    if (job.requiredSkills.length > 0) {
        score += (matchedSkills / job.requiredSkills.length) * 50;
    }

    // Experience match
    if (candidate.experience >= job.minExperience) {
        score += 25;
    }

    // Location match
    if (candidate.location === job.location) {
        score += 25;
    }

    return score;
};

export default calculateMatchScore;

// More accurate Calculator
// const calculateMatchScore = (candidate, job) => {
    //     let score = 0;
    //     const skillWeight = 0.6;
    //     const experienceWeight = 0.3;
    //     const educationWeight = 0;
    //     const locationWeight = 0.1;
    //     const availabilityWeight = 0;

    //     const requiredSkills = job.requiredSkills || [];
    //     const candidateSkills = candidate.skills || [];

    //     const essentialSkills = requiredSkills.filter(skill => skill.essential);
    //     const optionalSkills = requiredSkills.filter(skill => !skill.essential);

    //     const essentialSkillMatchCount = candidateSkills.filter(skill =>
    //         essentialSkills.map(s => s.name).includes(skill)
    //     ).length;

    //     const optionalSkillMatchCount = candidateSkills.filter(skill =>
    //         optionalSkills.map(s => s.name).includes(skill)
    //     ).length;

    //     const skillMatchScore = (essentialSkillMatchCount * 2 + optionalSkillMatchCount) / (essentialSkills.length * 2 + optionalSkills.length);

    //     score += skillMatchScore * skillWeight * 100;

    //     const experienceGap = candidate.experience - job.minExperience;
    //     if (experienceGap >= 0) {
    //         score += experienceWeight * 100;
    //     } else if (experienceGap >= -2) {
    //         score += experienceWeight * 70;
    //     } else if (experienceGap >= -5) {
    //         score += experienceWeight * 50;
    //     }

    //     const educationMatch = candidate.education === job.requiredEducation ? 1 : 0;
    //     score += educationMatch * educationWeight * 100;

    //     const locationMatch = candidate.location === job.location;
    //     score += locationMatch ? locationWeight * 100 : (candidate.willingToRelocate ? locationWeight * 70 : 0);

    //     const availabilityMatch = candidate.available === job.isImmediate;
    //     score += availabilityMatch ? availabilityWeight * 100 : 0;

    //     return score;
    // };