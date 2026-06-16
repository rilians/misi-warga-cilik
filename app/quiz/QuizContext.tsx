'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface QuizContextType {
  score: number;
  setScore: (score: number) => void;
  addScore: (points: number) => void;
  resetScore: () => void;
  studentName: string;
  setStudentName: (name: string) => void;
  studentClass: string;
  setStudentClass: (cls: string) => void;
  answers: { [key: number]: string };
  setAnswer: (questionNumber: number, answer: string) => void;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export function QuizProvider({ children }: { children: ReactNode }) {
  const [score, setScore] = useState(0);
  const [studentName, setStudentName] = useState('');
  const [studentClass, setStudentClass] = useState('');
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});

  const addScore = (points: number) => {
    setScore(prev => prev + points);
  };

  const resetScore = () => {
    setScore(0);
  };

  const setAnswer = (questionNumber: number, answer: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionNumber]: answer
    }));
  };

  return (
    <QuizContext.Provider value={{ 
      score, 
      setScore, 
      addScore, 
      resetScore,
      studentName,
      setStudentName,
      studentClass,
      setStudentClass,
      answers,
      setAnswer
    }}>
      {children}
    </QuizContext.Provider>
  );
}

export function useQuizContext() {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuizContext must be used within QuizProvider');
  }
  return context;
}
