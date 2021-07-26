package com.bbtutorials.users.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;


import lombok.Data;

@Entity
@Data
public class Estudiantes {
	
	@Id
	@Column
    private long id;

    @Column
    @NotNull(message="{NotNull.Estudiante.name}")
    private String name;
}
