'use client';
import { useState, useEffect } from 'react';

type NumberOfStudents = {
  name: string;
  cedula: string;
  email: string;
  phone: string;
};

type Course = {
  id: number;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  professor: string;
  number_of_students: NumberOfStudents[]; // Nueva propiedad para el número de estudiantes
};

type Props = {
  courses: Course[];
};

const CoursesList: React.FC<Props> = ({ courses }) => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('searchTerm', searchTerm);
    }
  }, [searchTerm]);

  const filteredCourses = courses.filter((course) => {
    const lowerSearchTerm = searchTerm.toLowerCase();
    return (
      course.name.toLowerCase().includes(lowerSearchTerm) ||
      course.description.toLowerCase().includes(lowerSearchTerm) ||
      course.startDate.toLowerCase().includes(lowerSearchTerm) ||
      course.endDate.toLowerCase().includes(lowerSearchTerm) ||
      course.professor.toLowerCase().includes(lowerSearchTerm)
    );
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar cursos..."
        className="p-2 rounded-lg border-2 border-gray-500 focus:outline-none focus:border-gray-400"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="flex flex-wrap justify-center items-center">
        {filteredCourses.map((course) => (
          <div key={course.id} className="shadow-md rounded-md p-6 mb-4 md:w-1/2 lg:w-1/3">
            <h2 className="text-lg font-medium mb-2">{course.name}</h2>
            <p className="text-gray-600 mb-2">{course.description}</p>
            <p className="text-sm text-gray-500 mb-2">Fecha de inicio: {course.startDate}</p>
            <p className="text-sm text-gray-500 mb-2">Fecha de finalización: {course.endDate}</p>
            <p className="text-sm text-gray-500">Profesor: {course.professor}</p>
            <p className="text-sm text-gray-500">Numero de estudiantes: {course.number_of_students.length}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesList;
