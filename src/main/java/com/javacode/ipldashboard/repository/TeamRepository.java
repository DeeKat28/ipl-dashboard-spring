package com.javacode.ipldashboard.repository;

import org.springframework.data.repository.CrudRepository;

import com.javacode.ipldashboard.model.Team;

public interface TeamRepository extends CrudRepository<Team, Long> {
    
    Team findByTeamName(String teamName);

}
