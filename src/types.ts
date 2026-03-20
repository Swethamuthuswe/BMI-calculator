// src/types.ts

export type BMICategory = "Underweight" | "Normal" | "Overweight" | "Obese";

export interface FoodItem {
  name: string;
  description: string;
  benefits: string;
  imageUrl: string;
  calories: string;
  mealTime: string;
}

export interface ExerciseItem {
  name: string;
  description: string;
  duration: string;
  imageUrl: string;
  level: string;
  frequency: string;
}

export interface HealthData {
  category: BMICategory;
  title: string;
  description: string;
  foods: FoodItem[];
  exercises: ExerciseItem[];
  dailyRoutine: string[];
  waterIntake: string;
  sleepRequired: string;
  warningMessage?: string;
  backgroundColor?: string;
}