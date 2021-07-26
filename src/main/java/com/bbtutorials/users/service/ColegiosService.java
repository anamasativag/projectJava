package com.bbtutorials.users.service;

import java.util.List;

import org.springframework.stereotype.Component;

import com.bbtutorials.users.entity.Colegios;
import com.bbtutorials.users.repository.ColegiosRepository;

@Component
public class ColegiosService {
	
	private ColegiosRepository colegiosRepository;

    public ColegiosService(ColegiosRepository colegiosRepository) {
        this.colegiosRepository = colegiosRepository;
    }

    public List<Colegios> getColegios() {
        return colegiosRepository.findAll();
    }

    public Colegios saveColegio(Colegios colegios) {
    	return colegiosRepository.save(colegios);
    }

}
