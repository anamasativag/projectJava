package com.bbtutorials.users.service;

import java.util.List;

import org.springframework.stereotype.Component;

import com.bbtutorials.users.entity.Estudiantes;
import com.bbtutorials.users.repository.EstudiantesRepository;

@Component
public class EstudiantesService {
	
	private EstudiantesRepository estudiantesRepository;

    public EstudiantesService(EstudiantesRepository estudiantesRepository) {
        this.estudiantesRepository = estudiantesRepository;
    }

    public List<Estudiantes> getEstudiantes() {
        return estudiantesRepository.findAll();
    }

    public Estudiantes saveEstudiante(Estudiantes estudiantes) {
    	return estudiantesRepository.save(estudiantes);
    }

}
