package com.bbtutorials.users.service;

import java.util.List;

import org.springframework.stereotype.Component;

import com.bbtutorials.users.entity.AsignaturasXEstudiantes;
import com.bbtutorials.users.repository.AsignaturasXEstudiantesRepository;

@Component
public class AsignaturasXEstudiantesService {
	
	private AsignaturasXEstudiantesRepository asignaturasxestudiantesRepository;

    public AsignaturasXEstudiantesService(AsignaturasXEstudiantesRepository asignaturasxestudiantesRepository) {
        this.asignaturasxestudiantesRepository = asignaturasxestudiantesRepository;
    }

    public List<AsignaturasXEstudiantes> getAsignaturasxestudiantes() {
        return asignaturasxestudiantesRepository.findAll();
    }

    public AsignaturasXEstudiantes saveAsignaturaxestudiante(AsignaturasXEstudiantes asignaturasxestudiantes) {
    	return asignaturasxestudiantesRepository.save(asignaturasxestudiantes);
    }

}
