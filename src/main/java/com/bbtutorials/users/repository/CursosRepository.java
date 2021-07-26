package com.bbtutorials.users.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.bbtutorials.users.entity.Cursos;

@RepositoryRestResource()
public interface CursosRepository extends JpaRepository<Cursos, Integer>, JpaSpecificationExecutor<Cursos>, QuerydslPredicateExecutor<Cursos> {}
