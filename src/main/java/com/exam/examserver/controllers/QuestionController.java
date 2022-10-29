package com.exam.examserver.controllers;

import java.util.ArrayList;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.exam.examserver.models.exam.Question;
import com.exam.examserver.models.exam.Quiz;
import com.exam.examserver.services.QuestionService;
import com.exam.examserver.services.QuizService;

@RestController
@CrossOrigin("*")
@RequestMapping("/question")
public class QuestionController {

	
	  @Autowired private QuestionService service;
	  
	  @Autowired private QuizService quizService;
	  
	  //add question
	  
	  @PostMapping("/") public ResponseEntity<Question> add (@RequestBody Question
	  question){
	  
	  return ResponseEntity.ok(this.service.addQuestion(question)); }
	  
	  //update question public 
	  ResponseEntity<Question> update (@RequestBody Question question){ return
	  ResponseEntity.ok(this.service.updateQuestion(question)); 
	  }
	  
	  //get all question of any quiz
	  
	  @GetMapping("/quiz/{qid}") 
	  public ResponseEntity<?>getQuestionsofQuiz(@PathVariable("qid") Long qid){
			/*
			 * Quiz quiz = new Quiz(); quiz.setQId(qid); Set<Question> questionsofQuiz =
			 * this.service.getQuestionsOfQuiz(quiz);
			 * 
			 * return ResponseEntity.ok(questionsofQuiz);
			 */
	  
	  Quiz quiz = this.quizService.getQuiz(qid); Set<Question> questions =
	  quiz.getQuestions(); ArrayList<Question> list = new
	  ArrayList<Question>(questions); if
	  (list.size()>Integer.parseInt(quiz.getNumberOfQuestions())) { list =
	  (ArrayList<Question>) list.subList(0,
	  Integer.parseInt(quiz.getNumberOfQuestions()+1)); }
	  java.util.Collections.shuffle(list); return ResponseEntity.ok(list);
	  
	  }
	  
	  //get single question
	  
	  @GetMapping("/{quesId}") public Question get(@PathVariable("quesId") Long
	  quesId) { return this.service.getQuestion(quesId); }
	  
	  //delete question
	  
	  @DeleteMapping("/{quesId}") public void delete(@PathVariable("quesId") Long
	  quesId) { this.service.deleteQuestion(quesId); }
	 
}
