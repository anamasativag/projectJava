package com.bbtutorials.users.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.bbtutorials.users.entity.Asignaturas;

@RepositoryRestResource()
public interface AsignaturasRepository extends JpaRepository<Asignaturas, Integer>, JpaSpecificationExecutor<Asignaturas>, QuerydslPredicateExecutor<Asignaturas> {}
