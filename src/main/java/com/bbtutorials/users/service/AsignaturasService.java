package com.bbtutorials.users.service;

import java.util.List;

import org.springframework.stereotype.Component;

import com.bbtutorials.users.entity.Asignaturas;
import com.bbtutorials.users.repository.AsignaturasRepository;

@Component
public class AsignaturasService {
	
	private AsignaturasRepository asignaturasRepository;

    public AsignaturasService(AsignaturasRepository asignaturasRepository) {
        this.asignaturasRepository = asignaturasRepository;
    }

    public List<Asignaturas> getAsignaturas() {
        return asignaturasRepository.findAll();
    }

    public Asignaturas saveAsignatura(Asignaturas asignaturas) {
    	return asignaturasRepository.save(asignaturas);
    }

}
