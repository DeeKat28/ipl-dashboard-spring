package com.javacode.ipldashboard.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;

import com.javacode.ipldashboard.model.Match;

public interface MatchRepository extends CrudRepository<Match, Long> {
    
    List<Match> findByTeam1OrTeam2OrderByDateDesc(String teamName1, String teamName2, Pageable pageable);

    List<Match> findMatchByTeam1AndDateBetweenOrTeam2AndDateBetweenOrderByDateDesc(
        String teamName1, 
        LocalDate date1, 
        LocalDate date2, 
        String teamName2, 
        LocalDate date3, 
        LocalDate date4
        );

    default List<Match> findLatestMatchesOfTeam(String teamName, int count) {
        return findByTeam1OrTeam2OrderByDateDesc(teamName, teamName, PageRequest.of(0, count));
    }

}
