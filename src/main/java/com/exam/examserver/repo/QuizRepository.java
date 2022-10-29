package com.exam.examserver.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.exam.examserver.models.exam.Quiz;

public interface QuizRepository extends JpaRepository<Quiz, Long> {

}