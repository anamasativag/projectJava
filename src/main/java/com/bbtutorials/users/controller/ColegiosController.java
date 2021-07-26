package com.bbtutorials.users.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bbtutorials.users.entity.Colegios;
import com.bbtutorials.users.links.ColegioLinks;
import com.bbtutorials.users.service.ColegiosService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/api/")
public class ColegiosController {
	
	@Autowired
	ColegiosService colegiosService;
	
	@GetMapping(path = ColegioLinks.LIST_COLEGIOS)
    public ResponseEntity<?> listColegios() {
        log.info("ColegiosController:  list colegios");
        List<Colegios> resource = colegiosService.getColegios();
        return ResponseEntity.ok(resource);
    }
	
	@PostMapping(path = ColegioLinks.ADD_COLEGIO)
	public ResponseEntity<?> saveColegio(@RequestBody Colegios colegio) {
        log.info("ColegiosController:  list colegios");
        Colegios resource = colegiosService.saveColegio(colegio);
        return ResponseEntity.ok(resource);
    }
}
