package com.bbtutorials.users.service;

import java.util.List;

import org.springframework.stereotype.Component;

import com.bbtutorials.users.entity.Cursos;
import com.bbtutorials.users.repository.CursosRepository;

@Component
public class CursosService {
	
	private CursosRepository cursosRepository;

    public CursosService(CursosRepository cursosRepository) {
        this.cursosRepository = cursosRepository;
    }

    public List<Cursos> getCursos() {
        return cursosRepository.findAll();
    }

    public Cursos saveCurso(Cursos cursos) {
    	return cursosRepository.save(cursos);
    }

}
