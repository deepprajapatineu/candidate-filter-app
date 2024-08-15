import React, { useReducer, useEffect, useState, useCallback } from 'react';
import FilterPanel from '../filterPanel/FilterPanel';
import CandidateList from '../candidateList/CandidateList';
import candidatesData from '../../data/candidates.json';
import jobDescriptionsData from '../../data/jobDescriptions.json';
import calculateMatchScore from '../../utils/calculateMatchScore';

const initialState = {
    skills: [],
    experience: [0, 10],
    education: '',
    location: '',
    available: false,
};

const filterReducer = (state, action) => {
    switch (action.type) {
        case 'SET_SKILLS':
            return { ...state, skills: action.payload };
        case 'SET_EXPERIENCE':
            return { ...state, experience: action.payload };
        case 'SET_EDUCATION':
            return { ...state, education: action.payload };
        case 'SET_LOCATION':
            return { ...state, location: action.payload };
        case 'SET_AVAILABLE':
            return { ...state, available: action.payload };
        default:
            return state;
    }
};

const MainContent = () => {
    const [filters, dispatch] = useReducer(filterReducer, initialState);
    const [filteredCandidates, setFilteredCandidates] = useState(candidatesData);

    const filterCandidates = useCallback(() => {
        let candidates = candidatesData;

        if (filters.skills.length > 0) {
            candidates = candidates.filter(candidate =>
                filters.skills.every(skill => candidate.skills.includes(skill))
            );
        }

        if (filters.experience) {
            candidates = candidates.filter(candidate =>
                candidate.experience >= filters.experience[0] &&
                candidate.experience <= filters.experience[1]
            );
        }

        if (filters.education) {
            candidates = candidates.filter(candidate =>
                candidate.education === filters.education
            );
        }

        if (filters.location) {
            candidates = candidates.filter(candidate =>
                candidate.location === filters.location
            );
        }

        if (filters.available) {
            candidates = candidates.filter(candidate =>
                candidate.available === filters.available
            );
        }

        candidates = candidates.map(candidate => {
            const job = jobDescriptionsData[0];
            const matchScore = calculateMatchScore(candidate, job);
            return { ...candidate, matchScore };
        });

        candidates.sort((a, b) => b.matchScore - a.matchScore);

        setFilteredCandidates(candidates);
    }, [filters]);

    useEffect(() => {
        const timer = setTimeout(() => {
            filterCandidates();
        }, 500);
        return () => clearTimeout(timer);
    }, [filterCandidates]);

    return (
        <div>
            <FilterPanel filters={filters} dispatch={dispatch} />
            <CandidateList candidates={filteredCandidates} />
        </div>
    );
};

export default MainContent;
